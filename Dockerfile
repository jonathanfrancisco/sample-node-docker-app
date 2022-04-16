FROM node:16.14.2-alpine

COPY ./app /home/app

WORKDIR /home/app

RUN npm install

CMD [ "node","app.js"]