FROM node:14.15-alpine as BUILD_IMAGE

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

RUN rm -rf node_modules

RUN yarn install --production --frozen-lockfile

FROM node:14.15-alpine

WORKDIR /hackathon

COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/.env ./.env
COPY --from=BUILD_IMAGE /app/public ./public
COPY --from=BUILD_IMAGE /app/next* ./

EXPOSE 3000
CMD ["yarn", "start"]