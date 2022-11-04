# build
FROM node:18-alpine as build

WORKDIR /build
ARG NPM_TOKEN

COPY package.json .
COPY package-lock.json .

RUN echo "@qeshdev:registry=https://npm.pkg.github.com/\n//npm.pkg.github.com/:_authToken=$NPM_TOKEN" > .npmrc
RUN npm install

COPY . .
RUN npm run build

RUN rm -rf node_modules
RUN npm install --omit=dev

# production
FROM node:18-alpine

WORKDIR /app

COPY scripts/startApp.sh start.sh

COPY prisma prisma
COPY --from=build /build/node_modules node_modules
COPY --from=build /build/dist dist

RUN sed -i 's/\r$//' start.sh  && \
    chmod +x start.sh

ENTRYPOINT ["./start.sh"]