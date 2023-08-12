FROM node:alpine
WORKDIR /api
COPY package*.json /api/
COPY tsconfig.json ./
RUN npm install
RUN npm install -g ts-node-dev
COPY . /api/
EXPOSE 8080
CMD [ "npm", "start" ]
