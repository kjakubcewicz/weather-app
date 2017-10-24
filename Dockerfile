FROM node:alpine

WORKDIR /app

COPY APP/package.json /app
RUN npm install
COPY ./APP /app

CMD npm rebuild node-sass && npm run watch

EXPOSE 3000
