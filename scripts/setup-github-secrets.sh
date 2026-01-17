#!/bin/bash
# scripts/setup-github-secrets.sh
# This script helps you set up GitHub secrets for CI/CD

set -e

echo "🔧 GitHub CI/CD Secrets Setup"
echo "================================"
echo ""
echo "You need to configure these secrets in GitHub:"
echo ""
echo "1. NETLIFY_AUTH_TOKEN"
echo "   - Go to: https://app.netlify.com/user/applications/personal"
echo "   - Click 'New access token'"
echo "   - Copy the token"
echo ""
echo "2. NETLIFY_SITE_ID"
echo "   - Go to: Your Netlify project settings"
echo "   - Look under 'Site details' → 'Site ID'"
echo ""
echo "Then in GitHub:"
echo "   1. Go to: github.com/codingnoobno1/storyboardai-frontend"
echo "   2. Settings → Secrets and variables → Actions"
echo "   3. Click 'New repository secret'"
echo "   4. Add both secrets above"
echo ""
echo "✅ Once done, your CI/CD pipeline will automatically deploy!"
