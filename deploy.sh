git fetch
echo "Switching to Master"
git checkout master
git pull
echo "Building"
npm run build
scp -r build/* hms@172.16.61.164:/var/www/html/
echo "Done!"