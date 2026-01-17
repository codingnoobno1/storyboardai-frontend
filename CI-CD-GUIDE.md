# CI/CD Pipeline Documentation

## Overview

This project has a **production-grade CI/CD pipeline** that ensures code quality before deployment.

```
Your Code (git push)
    ↓
GitHub Actions
    ├─→ Type Check (TypeScript)
    ├─→ Lint (ESLint)
    ├─→ Build (Next.js)
    └─→ Deploy (Netlify) ← Only on main branch
```

---

## Pipeline Stages

### 1️⃣ **Type Check & Lint** (runs on every push & PR)

```bash
npm run type-check  # TypeScript type checking
npm run lint        # ESLint code quality
```

**What it does:**
- ✅ Finds TypeScript errors
- ✅ Catches code style issues
- ✅ Prevents bad code from reaching build stage

**If it fails:** Your PR/push is blocked until fixed

### 2️⃣ **Build** (runs only if type-check passes)

```bash
npm run build  # Next.js production build
```

**What it does:**
- ✅ Compiles React components
- ✅ Optimizes assets
- ✅ Creates production bundle
- ✅ Generates `.next` folder

**If it fails:** Your code has real issues; Netlify won't deploy

### 3️⃣ **Deploy to Netlify** (runs only on `main` branch)

```bash
netlify deploy --prod
```

**What it does:**
- ✅ Takes the `.next` build artifact
- ✅ Deploys to production
- ✅ Serves at https://sstoryboardai.netlify.app

**Only triggers when:**
- ✓ All checks pass
- ✓ Code is pushed to `main` branch
- ✓ GitHub Actions completes successfully

---

## Setup Instructions

### Step 1: Add GitHub Secrets

These secrets allow GitHub Actions to deploy to Netlify.

**Get NETLIFY_AUTH_TOKEN:**
1. Go to https://app.netlify.com/user/applications/personal
2. Click "New access token"
3. Copy the generated token

**Get NETLIFY_SITE_ID:**
1. Go to https://app.netlify.com/sites
2. Click on "sstoryboardai"
3. Go to Settings → General
4. Find "Site ID" (looks like: `abc123def456`)

**Add to GitHub:**
1. Go to: https://github.com/codingnoobno1/storyboardai-frontend
2. Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add both:
   - Name: `NETLIFY_AUTH_TOKEN` | Value: (your token)
   - Name: `NETLIFY_SITE_ID` | Value: (your site ID)

### Step 2: Push Code

```bash
git add .
git commit -m "feat: add CI/CD pipeline"
git push origin main
```

### Step 3: Watch the Pipeline

1. Go to https://github.com/codingnoobno1/storyboardai-frontend
2. Click "Actions" tab
3. See your workflow run in real-time
4. Once it completes, check Netlify deployment

---

## Local Testing

Run the **exact same checks** locally before pushing:

```bash
# Run all CI checks
npm run ci

# Or individually:
npm run type-check
npm run lint
npm run build
```

**Pro tip:** If `npm run ci` passes locally, it will pass in GitHub Actions.

---

## Common Issues & Fixes

### ❌ "Type Check Failed"
Your TypeScript code has errors.

**Fix:**
```bash
npm run type-check  # See the errors
# Fix the issues in your editor
```

### ❌ "Lint Failed"
Your code doesn't match ESLint rules.

**Fix:**
```bash
npm run lint:fix  # Auto-fix most issues
npm run lint      # Check if any manual fixes needed
```

### ❌ "Build Failed"
Your code won't compile to production.

**Fix:**
```bash
npm run build  # See detailed error messages
# Fix the issues based on error output
```

### ❌ "Deploy Failed - Missing Secrets"
GitHub can't connect to Netlify.

**Fix:**
- Verify `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` are in GitHub Secrets
- Make sure they're not empty
- Regenerate if needed

---

## Workflow File

The pipeline is defined in: [.github/workflows/ci-cd.yml](.github/workflows/ci-cd.yml)

**What it includes:**
- Runs on `push` to `main` and `develop` branches
- Runs on `pull_request` to same branches
- Caches npm packages for speed
- Uploads build artifacts
- Comments on PRs with status

---

## Deployment Preview

### Automatic Deployments

| Branch | Behavior |
|--------|----------|
| `main` | Auto-deploys to production after passing all checks |
| `develop` | Builds & tests (doesn't deploy) |
| `feature/*` | Builds & tests (doesn't deploy) |

### Manual Deployment (Emergency)

```bash
netlify deploy --prod
```

---

## Best Practices

✅ **Always test locally first:**
```bash
npm run ci  # Before git push
```

✅ **Use feature branches:**
```bash
git checkout -b feature/my-feature
# Make changes
git push origin feature/my-feature
# Create PR on GitHub
```

✅ **Keep main branch stable:**
- Only merge PRs that pass all checks
- Don't push directly to main (use PRs)

✅ **Monitor GitHub Actions:**
- Check the Actions tab after pushing
- Fix any failures before merging

---

## Next Steps

1. ✅ Add the GitHub secrets (see Step 1 above)
2. ✅ Push your code with `git push`
3. ✅ Watch the GitHub Actions run
4. ✅ Confirm Netlify deployment
5. ✅ Your site updates automatically on future pushes!

---

**Questions?** Check GitHub Actions logs for detailed error messages.
