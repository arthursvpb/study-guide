FROM node:alpine

WORKDIR /src

COPY . .

RUN yarn install

WORKDIR /src/packages/api
RUN yarn start:dev &

WORKDIR /src/packages/web
RUN yarn dev &
