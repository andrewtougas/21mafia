#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# copy the build output directory to live server
rsync -avP ./dist/ atougas@50.116.7.202:/var/www/html/21mafia.andrewtougas.com/public_html/