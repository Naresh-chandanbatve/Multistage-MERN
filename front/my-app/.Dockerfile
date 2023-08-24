FROM node:17 as builder

WORKDIR /app

COPY package.json ./  

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]

