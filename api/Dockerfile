FROM node:22-alpine AS alpine

RUN npm install turbo --global
RUN corepack enable

WORKDIR /app

COPY . .

RUN yarn install --immutable
RUN npx prisma generate --schema api/prisma/schema.prisma
RUN turbo build --filter=api
RUN yarn workspaces focus --all --production

FROM gcr.io/distroless/nodejs22

WORKDIR /app

COPY --from=alpine /app/api/dist api/dist
COPY --from=alpine /app/node_modules node_modules
COPY --from=alpine /app/utils/dist utils/dist
COPY --from=alpine /app/utils/package.json utils/package.json

ENV PORT=3000
EXPOSE ${PORT}

CMD ["api/dist/main"]
