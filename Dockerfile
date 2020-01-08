
FROM node:8.9.3-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy App Files
COPY . /usr/src/app

# Install app dependencies
RUN apk add --no-cache --virtual .gyp python make g++ && npm install && apk del .gyp

#RUN npm install
ARG DOCKER_ENV
ENV NODE_ENV=${DOCKER_ENV}
RUN npm run build

EXPOSE 1333
CMD [ "npm", "start" ]