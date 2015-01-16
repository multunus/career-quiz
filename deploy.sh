!#/bin/bash
set -e

gulp fetchData
gulp concatenate
git checkout gh-pages
git merge master
git push
git checkout master