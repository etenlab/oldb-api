FROM node:16

# Create app directory
WORKDIR /usr/src/etenlab/oldb-api

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .

EXPOSE 8101
CMD [ "npm", "run", "start:prod" ]