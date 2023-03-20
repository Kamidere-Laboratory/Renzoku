#!/usr/bin/env bash

if [ $1 -eq 0 ]
  then
    echo "No tag specified"
fi

docker run \
--rm \
-v $PWD/docker:/workspace gcr.io/kaniko-project/executor:latest \
--single-snapshot \
--cleanup \
--dockerfile /workspace/Dockerfile \
--context dir:///workspace \
--no-push \
--destination $1 \
--tar-path ./renzoku-latest.tar

docker load -i ./docker/renzoku-latest.tar
rm -rf ./docker/renzoku-latest.tar