@echo off
cd /d "%~dp0"
echo Pushing changes to GitHub from %CD%...
git add .
git commit -m "Update admin panel and restore settings tab"
git push origin main -f
echo.
echo Done! Your website will update in about 1-2 minutes.
pause
