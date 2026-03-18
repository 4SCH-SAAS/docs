#!/bin/bash
# Pre-commit link validation script
# This script checks for broken links before committing

set -e

echo "🔍 Checking for broken links..."
echo ""

# Run the build which will check for broken links and anchors
echo "Running Docusaurus build to validate links..."
npm run build

echo ""
echo "✅ Link validation passed!"
echo ""
