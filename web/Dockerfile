FROM node:18-alpine3.16
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]
