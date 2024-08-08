#!/bin/bash
VERSIONS=$(ls -d */ |grep v[\0-9] |grep -v v8 | sort -V)
echo "$VERSIONS"

NUM_VERSIONS=$(echo "$VERSIONS" | wc -l)
if [ "$NUM_VERSIONS" -gt 2 ]; then
    DIR=$(echo "$VERSIONS" | head -n 1)
    echo "There are more than 2 versions, removing oldest one in $DIR"
    git rm -r $DIR

    # remove leading v and trailing / from the version dir
    REMOVED_VERSION=$(echo "$DIR" | sed 's/^v//;s/\/$//')
    echo "Removing version $REMOVED_VERSION from versions.json"
    sed -i "s/,\"$REMOVED_VERSION\"//" versions.json

    git commit -a -m "chore: remove older version $REMOVED_VERSION" -m "" -m "TRIVIAL"
    git show --stat
else
    echo "There are less or equal than three versions, skipping."
fi
