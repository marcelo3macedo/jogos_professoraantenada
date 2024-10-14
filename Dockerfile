FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN chown -R node:node /app

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

USER node

EXPOSE 3000

CMD ["npm", "run", "dev"]
#CMD ["tail", "-f", "/dev/null"]