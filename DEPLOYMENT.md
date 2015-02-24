To get data from Google Spreadsheets and updating.

```shell
  !#/bin/bash
  set -e

  git checkout master
  gulp fetchData
  gulp concatenate
```

Commit the changes in the repository.

Merge the changes into gh-pages and push.

```shell
  git checkout gh-pages
  git merge master
  git push
  git checkout master
```
