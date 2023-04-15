FROM node:18-alpine

USER node
WORKDIR /home/node

COPY . .

RUN npm ci && npm run build:prod

EXPOSE 5000

CMD npm run start:prod
