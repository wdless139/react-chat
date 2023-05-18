#syntax=docker/dockerfile:1.4

FROM node:19-alpine AS app_node_builder

WORKDIR /srv/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY --link . .

# Dev image
FROM app_node_builder AS app_node_dev

ENV NODE_ENV=development

CMD ["npm", "start"]

# Prod image
FROM app_node_builder AS app_node

ENV NODE_ENV=production

RUN npm install -g serve
RUN npm run build

CMD ["serve", "-s", "build"]
