# MTSD Laboratory work 3

This is a simple Full-stack application created for laboratory work of the topic "Containerization"<br/>
It's an online store, where you can "buy" different products.<br/>
Follow <a href="https://mtsd-lab3.pp.ua" target="_blank">this link</a> to visit this store

## Development

1. Install yarn
    ```shell
   npm install turbo --global
   corepack enable
   ```
2. Install dependencies of the project:
    ```shell
    yarn install
    ```
3. Build utils:
   ```shell
   npx turbo build --filter=@mtsd-lab3/utils
   ```
4. Follow instructions of the desired part of the app:
    - [Backend](./api/README.md#development)
    - [Frontend](./web/README.md#development)

## Deployment

To deploy your own version of this app you need *Docker* to be installed on your machine.<br/>

1. Create `.env` files for each part of the app, you can see examples in [api directory](./api)<br/>
2. Change paths of the `.env` files, volumes and port mappings for your needs in
   a [docker-compose file](./docker-compose.yaml)
3. Start docker compose
    ```shell
    docker compose up -d
    ```
4. Web part of the application you can deploy on <a href="https://vercel.com" target="_blank">Vercel</a>
