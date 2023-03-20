#!/bin/sh
# FROM https://github.com/nodejs/docker-node/blob/a628d4361f366e40aa21f613cd6ebbb1741b126e/19/bullseye/docker-entrypoint.sh
set -e

# Create id_rsa key from env
echo "$GH_PRIVATE_DEPLOY_KEY\n" > ./id_rsa
chmod 0600 ./id_rsa

# Run command with node if the first argument contains a "-" or is not a system command. The last
# part inside the "{}" is a workaround for the following bug in ash/dash:
# https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=874264
if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ] || { [ -f "${1}" ] && ! [ -x "${1}" ]; }; then
  set -- node "$@"
fi

exec "$@"