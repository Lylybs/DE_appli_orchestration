FROM node:16
WORKDIR "/DE_appli_orchestration/backend"

COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]