@echo off
echo Pushing changes to GitHub...
git add .
git commit -m "Update admin panel and restore settings tab"
git push origin main
echo.
echo Done! Your website will update in about 1-2 minutes.
pause
