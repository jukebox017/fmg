# Use small docker image
FROM node:slim
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
COPY . /app
RUN npm run build
CMD ["node", "build/server.js"]
