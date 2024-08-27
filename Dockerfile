FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
# Instala as dependências node
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]

