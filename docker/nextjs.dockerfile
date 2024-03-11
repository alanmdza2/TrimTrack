FROM node:21.2.0

WORKDIR /usr/src/app

COPY ./nextjs/package*.json .
# COPY ./nextjs/.npmrc .
RUN npm install

VOLUME /usr/src/app