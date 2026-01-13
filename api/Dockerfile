FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

ENV NODE_ENV=production

RUN npm install --production --no-audit --no-fund

COPY . .
  
EXPOSE 3000

RUN addgroup -S app && adduser -S app -G app
USER app

CMD ["node", "api/index.mjs"]

