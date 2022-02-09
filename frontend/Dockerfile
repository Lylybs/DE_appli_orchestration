FROM node:alpine
WORKDIR "/DE_jenkins"

COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]
