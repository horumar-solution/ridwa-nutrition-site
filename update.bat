@echo off
cd /d "C:\Users\amala\OneDrive\Desktop\ridwa nutrition company site"
echo Pushing updates to GitHub...
git add index.html
git add images/
git commit -m "update site"
git push origin main
echo.
echo Done! Site is live at:
echo https://horumar-solution.github.io/ridwa-nutrition-site/
pause
