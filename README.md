### Running the app

1. Build the node app docker image

```
docker build --no-cache -t sample-node-express-docker-app:1.0.0 .
```

2. Run all the services which includes the previously built node app image above using Docker Compose

```
docker-compose -f docker-compose.yaml --env-file dev.env up -d
```

node server should now be running on localhost:3000

3. To shutdown the app

```
docker-compose -f docker-compose.yaml --env-file dev.env down
```

### Testing the connection between app container & database container

1. Make an API call to POST `/seed/payments` to insert/seed payment documents on mongodb
2. Test retrieval by calling API GET `/payments`

### Accessing MongoDB Web Interface

In this sample setup, mongo-express is also included in the docker compose services which is a a lightweight web-based administrative interface deployed to manage MongoDB databases interactively. The web-based interface can be access on `localhost:8081`
