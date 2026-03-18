# Pre-commit link validation script (PowerShell version)
# This script checks for broken links before committing

Write-Host "🔍 Checking for broken links..." -ForegroundColor Cyan
Write-Host ""

# Run the build which will check for broken links and anchors
Write-Host "Running Docusaurus build to validate links..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Link validation passed!" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Link validation failed!" -ForegroundColor Red
    Write-Host ""
    exit 1
}
