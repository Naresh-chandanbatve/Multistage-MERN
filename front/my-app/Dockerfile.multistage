FROM node:17 as builder

WORKDIR /app

COPY package.json ./  

RUN npm i

COPY . .


FROM node:17-alpine

WORKDIR /app

COPY --from=builder /app/ ./

CMD ["npm", "run", "start"]

