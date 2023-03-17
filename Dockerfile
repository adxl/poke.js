FROM node:16-alpine

WORKDIR /app

RUN npm install --omit=dev

COPY . .

EXPOSE 3001

CMD ["npm", "run", "start"]