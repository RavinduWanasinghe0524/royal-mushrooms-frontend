# Deploy Royal Mushrooms to GitHub Pages
Write-Host "🚀 Deploying Royal Mushrooms to GitHub Pages..." -ForegroundColor Green

# Build the application for production
Write-Host "📦 Building application..." -ForegroundColor Yellow
$env:NODE_ENV = "production"
npm run build

# Export static files
Write-Host "📤 Exporting static files..." -ForegroundColor Yellow
npm run export

# Check if out directory was created
if (Test-Path "out") {
    Write-Host "✅ Build successful! Files exported to 'out' directory." -ForegroundColor Green
    Write-Host "📁 Contents of out directory:" -ForegroundColor Cyan
    Get-ChildItem -Path "out" | Format-Table Name, Length, LastWriteTime
    
    Write-Host "🌐 To deploy manually:" -ForegroundColor Yellow
    Write-Host "1. Go to your GitHub repository" -ForegroundColor White
    Write-Host "2. Go to Settings > Pages" -ForegroundColor White
    Write-Host "3. Select 'Deploy from a branch'" -ForegroundColor White
    Write-Host "4. Choose 'gh-pages' branch" -ForegroundColor White
    Write-Host "5. Your site will be available at: https://ravinduwanasinghe0524.github.io/royal-mushrooms-frontend/" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed! Check the error messages above." -ForegroundColor Red
}

# Reset environment
$env:NODE_ENV = $null
