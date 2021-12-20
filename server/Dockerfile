FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "dist/index.js" ]
USER node