FROM node:alpine
WORKDIR "/DE_appli_orchestration/frontend"

COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]
