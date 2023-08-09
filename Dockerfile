FROM node:18-alpine3.18

WORKDIR /opt/app

COPY package*.json .
COPY tsconfig.json .
COPY src src/
COPY swagger-doc swagger-doc/

RUN npm cache clean --force
RUN npm install
RUN npm run build

RUN rm tsconfig.json
RUN rm -rf node_modules
RUN rm -rf src

RUN npm ci --omit=dev

EXPOSE 3000
CMD [ "npm", "start" ]