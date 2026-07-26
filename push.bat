@echo off
echo Pushing changes to GitHub...
git add .
git commit -m "Fix script.js syntax error and add markdown formatting for Coll_pro"
git push origin main
echo.
echo Done! Your website will update in about 1-2 minutes.
pause
