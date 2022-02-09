FROM node:alpine

WORKDIR /usr/app

COPY package.json yarn.lock tsconfig.json ./
RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

RUN apk add --no-cache bash

CMD ["yarn", "start"]