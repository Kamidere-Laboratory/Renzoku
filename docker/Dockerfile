FROM node:19

ENV GH_APP_ID="305447"
ENV GH_INSTALLATION_ID=""
ENV GH_PRIVATE_KEY=""
ENV GH_PUBLIC_DEPLOY_KEY=""
ENV GH_PRIVATE_DEPLOY_KEY=""
ENV GH_OWNER=""
ENV GH_REPO=""
ENV GH_BRANCH=""
ENV GIT_USER="Renzoku"
ENV GIT_EMAIL="renzoku@bot.kamide.re"
ENV GIT_SSH_COMMAND="ssh -i ./id_rsa -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new"

RUN npm i -g pnpm

USER node

RUN git config --global --add safe.directory '*' && \
git config --global user.name ${GIT_USER} && \
git config --global user.email ${GIT_EMAIL}

COPY ./docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]

CMD [ "node" ]