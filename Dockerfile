FROM node:6.10

WORKDIR /APP

COPY APP/package.json /APP
RUN npm install
COPY ./APP /APP

CMD npm start

EXPOSE 3000
