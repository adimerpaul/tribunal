FROM node:lts-alpine AS build-stage
WORKDIR /app
COPY package*.json .
RUN npm ci

COPY --chown=node:node src src
COPY --chown=node:node public public
COPY --chown=node:node .env .
COPY --chown=node:node env.d.ts .
COPY --chown=node:node .eslintrc.cjs .
COPY --chown=node:node .prettierrc.json .
COPY --chown=node:node index.html .
COPY --chown=node:node tsconfig.json .
COPY --chown=node:node tsconfig.app.json .
COPY --chown=node:node tsconfig.node.json .
COPY --chown=node:node tsconfig.vitest.json .
COPY --chown=node:node vite.config.ts .
COPY --chown=node:node vitest.config.ts .

RUN npm run build
USER node

# test stage
FROM nginx:stable-alpine AS test-stage
RUN rm -rf /usr/share/nginx/html/*
COPY --chown=nginx:nginx nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx --from=build-stage /app/dist /usr/share/nginx/html
RUN chown -R nginx:nginx /var/cache/nginx && chown -R nginx:nginx /var/log/nginx
RUN touch /var/run/nginx.pid && chown -R nginx:nginx /var/run/nginx.pid

ENV VITE_URL_BASE_ENDPOINT=http://api-justicia-test.oj.gob.bo/api/v1/
USER nginx
CMD [ "nginx", "-g", "daemon off;" ]
