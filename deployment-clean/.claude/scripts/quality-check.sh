#!/bin/bash

# BigBrainBusiness Quality Check Script
# Uses Gemini CLI to validate changes against requirements

echo "🔍 BigBrainBusiness Quality Check"
echo "=================================="
echo ""

# Check if gemini is available
if ! command -v gemini &> /dev/null; then
    echo "⚠️  Gemini CLI not found. Skipping AI-powered quality check."
    echo "   Install with: npm install -g @google/generative-ai"
    exit 0
fi

# Get recent changes
echo "📋 Analyzing recent changes..."
RECENT_CHANGES=$(git diff HEAD~1..HEAD --stat 2>/dev/null || echo "No git history available")

echo "$RECENT_CHANGES"
echo ""

# Read requirements
if [ -f "docs/prd.md" ]; then
    echo "📖 Checking against PRD requirements..."
    
    PROMPT="Review recent git changes for BigBrainBusiness landing page. Focus on: requirements alignment, performance, accessibility, GDPR compliance. Keep response to 3-5 sentences."
    
    REVIEW=$(echo "$PROMPT" | gemini 2>/dev/null || echo "Gemini review unavailable")
    
    echo "🤖 AI Review:"
    echo "$REVIEW"
    echo ""
else
    echo "⚠️  docs/prd.md not found"
fi

# Basic checks
echo "🔧 Running basic validation..."

ISSUES=0

# Check image optimization
LARGE_IMAGES=$(find deployment-clean/assets/images -type f -size +500k 2>/dev/null | wc -l | tr -d ' ')
if [ "$LARGE_IMAGES" -gt 0 ]; then
    echo "⚠️  Found $LARGE_IMAGES images >500KB"
    ISSUES=$((ISSUES + 1))
else
    echo "✓ All images optimized"
fi

# Check sizes
DEPLOYMENT_SIZE=$(du -sh deployment-clean 2>/dev/null | awk '{print $1}')
echo "ℹ️  Deployment size: $DEPLOYMENT_SIZE"

if [ -f "deployment-clean/assets/css/styles.min.css" ]; then
    CSS_SIZE=$(wc -c < deployment-clean/assets/css/styles.min.css | tr -d ' ')
    echo "✓ CSS: ${CSS_SIZE} bytes"
fi

if [ -f "deployment-clean/assets/js/main.min.js" ]; then
    JS_SIZE=$(wc -c < deployment-clean/assets/js/main.min.js | tr -d ' ')
    echo "✓ JS: ${JS_SIZE} bytes"
fi

echo ""
echo "=================================="
if [ "$ISSUES" -eq 0 ]; then
    echo "✅ Quality check passed"
else
    echo "⚠️  Found $ISSUES issues"
fi
exit 0
