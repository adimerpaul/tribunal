FROM node:lts-alpine AS base-build
WORKDIR /app
COPY package*.json ./

RUN apk add --update --no-cache python3 py3-pip
RUN pip3 install --no-cache --upgrade pip setuptools
RUN pip install PyPDF2[image]
RUN npm install

COPY --chown=node:node src src
COPY --chown=node:node uploads uploads
COPY --chown=node:node .env .
COPY --chown=node:node .eslintrc.js .
COPY --chown=node:node methodHttp.http .
COPY --chown=node:node nest-cli.json .
COPY --chown=node:node tsconfig.build.json .
COPY --chown=node:node tsconfig.json .
RUN npm run build

FROM base-build AS develop
ENV APP_ENV=development
USER node
CMD [ "node", "dist/main.js" ]

FROM base-build AS test
ENV APP_ENV=test
USER node
CMD [ "node", "dist/main.js" ]
