FROM node:16-alpine 
WORKDIR /app

COPY react .

RUN npm ci 
RUN npm run build

ENV NODE_ENV production

CMD [ "npx", "serve", "build" ]