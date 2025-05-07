FROM node:22-slim AS base

RUN npm install turbo --global
RUN corepack enable

WORKDIR /app

COPY . .

RUN yarn install
RUN npx prisma generate --schema api/prisma/schema.prisma
RUN turbo build --filter=api
RUN yarn workspaces focus --all --production

FROM gcr.io/distroless/nodejs22

WORKDIR /app

COPY --from=base /app/api/dist api/dist
COPY --from=base /app/node_modules node_modules
COPY --from=base /app/utils/dist utils/dist
COPY --from=base /app/utils/package.json utils/package.json

ENV PORT=3000
EXPOSE ${PORT}

CMD ["api/dist/main"]
