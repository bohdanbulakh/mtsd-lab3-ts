FROM node:22.15.0-bullseye-slim AS alpine

RUN npm install turbo --global
RUN corepack enable

WORKDIR /app

COPY . .

RUN yarn install --immutable
RUN npx prisma generate --schema api/prisma/schema.prisma
RUN turbo build --filter=api
RUN yarn workspaces focus --all --production

ARG PORT=3000
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD node api/dist/main
