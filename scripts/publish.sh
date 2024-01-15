# ENSURE YOU HAVE BUMPED package.json version and sync'd to git

git add . && git commit -m "Update" && git push &&\
vsce package &&\
vsce publish
