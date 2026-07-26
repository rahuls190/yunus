@echo off
cd /d "%~dp0"
echo Pushing changes to GitHub from %CD%...
echo.
echo Step 1: Fetching latest from GitHub...
git fetch origin main
echo.
echo Step 2: Resetting to keep YOUR local files...
git reset --soft origin/main
echo.
echo Step 3: Committing all your local files...
git add -A
git commit -m "Update admin panel with settings tab for GitHub uploads"
echo.
echo Step 4: Force pushing to GitHub...
git push origin main --force
echo.
echo ========================================
echo Done! Your website will update in about 1-2 minutes.
echo ========================================
pause
