#!/bin/bash
set -e

echo "Building project..."
npm run build

echo "Preparing deployment..."

# Create a temporary directory
TEMP_DIR=$(mktemp -d)
echo "Using temp directory: $TEMP_DIR"

# Clone the gh-pages branch into temp directory
git clone --depth 1 --branch gh-pages https://github.com/MichaelGabu/wedding-invitation.git "$TEMP_DIR"

# Remove all files except .git
cd "$TEMP_DIR"
find . -maxdepth 1 ! -name '.git' ! -name '.' ! -name '..' -exec rm -rf {} +

# Copy built files from dist
cp -r "$OLDPWD/dist/"* .

# Add all files
git add -A

# Check if there are changes
if git diff --staged --quiet; then
  echo "No changes to deploy"
  rm -rf "$TEMP_DIR"
  exit 0
fi

# Commit and push
git config user.name "GitHub Actions"
git config user.email "actions@github.com"
git commit -m "Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')"

echo "Pushing to GitHub Pages..."
git push origin gh-pages

# Cleanup
cd "$OLDPWD"
rm -rf "$TEMP_DIR"

echo "Deployment successful!"
echo "Visit: https://michaelgabu.github.io/wedding-invitation/"
