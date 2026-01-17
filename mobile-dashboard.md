# Professional Mobile Dashboard Architecture v2

## 🧠 CORE PRINCIPLE

> **Mobile has its own navigation grammar. Desktop patterns do NOT downgrade to mobile.**

We **replace** the dashboard paradigm, not resize it.

---

## ✅ CHOSEN PATTERN: Bottom-First App Navigation

Used by: **Notion, Instagram, Spotify, Slack**

---

## 🔴 CRITICAL: NAVIGATION DEPTH MODEL

### Screen Depth Rules

| Screen Type | Bottom Nav | Top Bar | Navigation Mode |
|-------------|------------|---------|-----------------|
| Dashboard / Lists | ✅ Visible | TopAppBar | `root` |
| Project Details | ❌ Hidden | BackHeader | `focused` |
| Editor / Create | ❌ Hidden | BackHeader | `immersive` |
| Preview / Generate | ❌ Hidden | None / Back | `immersive` |

**BottomNavBar must auto-hide beyond depth 1.**

### User Flow Example
```
Studio → Project → Scene → Editor → Preview
  ↓         ↓         ↓        ↓        ↓
 root    focused   focused  immersive immersive
```

---

## 🎯 NAVIGATION MODE SYSTEM

```typescript
type NavigationMode = "root" | "focused" | "immersive";
```

| Mode | Bottom Nav | ActionBar | Drawer | Use Case |
|------|------------|-----------|--------|----------|
| `root` | ✅ | ✅ | ✅ (hamburger) | Dashboard, Lists |
| `focused` | ❌ | Optional | ❌ | Project details, Sub-pages |
| `immersive` | ❌ | ❌ | ❌ | Editor, Create wizard, Preview |

### Implementation
```typescript
// NavigationStateStore (Zustand)
interface NavigationState {
  activeTab: string;
  navigationMode: "root" | "focused" | "immersive";
  drawerOpen: boolean;
  activeBottomSheet: string | null;
  selectedItemsCount: number;
  keyboardVisible: boolean;
}
```

---

## 👍 THUMB ZONE OPTIMIZATION

### Rules for Mobile Interactions

1. **Primary tap area** → entire row (not just icon)
2. **Secondary actions (⋮)** → bottom-right, not top-right
3. **Long-press** → opens context menu (not small icons)
4. **All tap targets** ≥ 44px
5. **No essential action above mid-screen**

### MobileProjectRow Design
```
┌─────────────────────────────────────┐
│ [Thumb] │ Title                     │
│   64px  │ Status • Date          ⋮ │  ← Menu at bottom-right
└─────────────────────────────────────┘
  ↑ Entire row is tap target
  ↑ Long-press opens context menu
```

---

## 🆕 FIRST-TIME USER FLOW

| Condition | UI |
|-----------|-----|
| No projects | Full EmptyState with illustration + CTA |
| 1–2 projects | Guided hints overlay |
| Returning user | Normal dashboard |

### EmptyState Requirements
- Illustration (Lottie or SVG)
- 1-sentence explanation
- Primary CTA button
- Optional secondary link

---

## ⚡ PERFORMANCE SAFEGUARDS

### Mount Strategy

| Component | Mount Condition |
|-----------|-----------------|
| BottomNavBar | `navigationMode === "root"` |
| HamburgerDrawer | Lazy-mounted (on first open) |
| ToastStack | Single global instance |
| BottomSheet | Portal + lazy mount |
| ContextAction | `selectedItemsCount > 0` |
| ActionBar | `navigationMode === "root" && !keyboardVisible` |

### Rules
- Use `React.lazy()` for drawer content
- Portal BottomSheet outside main tree
- Single ToastStack at app root
- Memoize heavy list items

---

## ⌨️ KEYBOARD PRIORITY RULES

When keyboard is open:

```
Keyboard Open →
  Hide BottomNav
  Hide ActionBar
  Lock ScrollableList scroll position
  Focus content shifts up cleanly
```

### Implementation
```typescript
useEffect(() => {
  const handleResize = () => {
    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const windowHeight = window.innerHeight;
    setKeyboardVisible(windowHeight - viewportHeight > 100);
  };
  window.visualViewport?.addEventListener('resize', handleResize);
  return () => window.visualViewport?.removeEventListener('resize', handleResize);
}, []);
```

---

## ♿ ACCESSIBILITY RULES

1. **All tap targets ≥ 44px** (Apple HIG)
2. **Bottom nav labels visible** (no icon-only by default)
3. **Drawer dismissible by swipe** (left→right gesture)
4. **Essential actions reachable** (bottom half of screen)
5. **Focus indicators visible** (for keyboard nav)
6. **Screen reader labels** on all interactive elements

---

## 📁 UPDATED COMPONENT ARCHITECTURE

### Navigation (8 components)

| Component | Props | Mount Condition |
|-----------|-------|-----------------|
| `BottomNavBar` | `tabs`, `role` | `mode === "root" && !keyboard` |
| `TopAppBar` | `title`, `leftAction`, `rightActions` | `mode === "root"` |
| `BackHeader` | `title`, `onBack` | `mode === "focused"` |
| `HamburgerDrawer` | `open`, `onClose`, `role` | Lazy |
| `ContextualHeader` | `count`, `actions` | `selectedCount > 0` |
| `ScreenTransition` | `direction` | Always |
| `SwipeableTabs` | `tabs`, `activeTab` | As needed |
| `NavigationModeProvider` | `mode` | Root of app |

### Layout (7 components)

| Component | Purpose |
|-----------|---------|
| `MobileScreen` | SafeArea + keyboard-aware |
| `MobileDashboardLayout` | Complete wrapper |
| `ScrollableList` | FlatList-like |
| `StickyActionBar` | Bottom CTA |
| `BottomSheet` | Menus, create flows |
| `FullScreenOverlay` | Immersive mode |
| `SectionCard` | Grouped content |

### Cards (2 components)

| Component | Purpose |
|-----------|---------|
| `MobileProjectRow` | Compact, thumb-optimized |
| `MobileStatCard` | 2x2 grid stat display |

### Feedback (5 components)

| Component | Mount |
|-----------|-------|
| `SkeletonList` | During loading |
| `EmptyState` | Zero items |
| `ToastStack` | Global singleton |
| `PullToRefresh` | Lists only |
| `Haptic` | On interactions |

---

## 🔄 NAVIGATION STATE CONTRACT

```typescript
// stores/navigationStore.ts
import { create } from 'zustand';

interface NavigationState {
  // Core state
  activeTab: string;
  navigationMode: "root" | "focused" | "immersive";
  
  // UI state
  drawerOpen: boolean;
  activeBottomSheet: string | null;
  keyboardVisible: boolean;
  
  // Selection state
  selectedItemsCount: number;
  selectedItems: string[];
  
  // Actions
  setMode: (mode: NavigationState["navigationMode"]) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  openSheet: (id: string) => void;
  closeSheet: () => void;
  setKeyboardVisible: (visible: boolean) => void;
  selectItem: (id: string) => void;
  clearSelection: () => void;
}
```

**Nothing else controls navigation.** All navigation state flows through this store.

---

## 📐 FINAL MOBILE DASHBOARD COMPOSITION

### Consumer Dashboard (Mobile)
```
NavigationModeProvider (mode="root")
 └─ MobileScreen
     ├─ TopAppBar ("Creation Studio", hamburger, search)
     ├─ ScrollableList
     │   ├─ SectionCard (Stats: 2x2 MobileStatCard)
     │   ├─ SectionCard (Recent Projects)
     │   │   ├─ MobileProjectRow (long-press → context)
     │   │   └─ MobileProjectRow
     │   └─ EmptyState (if no projects)
     ├─ ActionBar (+ New Project) [hidden if keyboard]
     └─ BottomNavBar [hidden if keyboard]

HamburgerDrawer (lazy, slide from left)
 ├─ Logo
 ├─ ActionRow (Template Bazaar)
 ├─ ActionRow (Power Credits)
 ├─ ActionRow (Switch to Creator)
 └─ ActionRow (Logout)

ToastStack (global portal)
```

### Project Detail (focused mode)
```
NavigationModeProvider (mode="focused")
 └─ MobileScreen
     ├─ BackHeader ("Project Name")
     └─ Content...
```

### Editor (immersive mode)
```
NavigationModeProvider (mode="immersive")
 └─ FullScreenOverlay
     └─ Editor content (no chrome)
```

---

## ✅ SUCCESS METRICS

- [ ] BottomNav auto-hides beyond depth 1
- [ ] NavigationMode controls all chrome visibility
- [ ] Keyboard hides BottomNav + ActionBar
- [ ] All tap targets ≥ 44px
- [ ] Long-press works on project rows
- [ ] EmptyState shows for new users
- [ ] Drawer lazy-mounted
- [ ] ToastStack is single global instance
- [ ] Focus mode (immersive) has no chrome
