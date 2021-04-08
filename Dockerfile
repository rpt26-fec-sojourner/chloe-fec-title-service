FROM node:14

WORKDIR /airbnb-title

ENV PORT 5500

COPY package.json /airbnb-title/package.json

RUN npm install

COPY . /airbnb-title

RUN npm run build

EXPOSE 5500

CMD ["node", "server/index.js"]