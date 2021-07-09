

# Mars Rover
This is a full-stack MERN application intended to be built using docker and docker-compose.

## Requirements
Make sure your enviroment is equiped with [Node.js](https://nodejs.org/en/), [MongoDB](https://www.mongodb.com/) as well as [Docker](https://docs.docker.com/) and Docker-Compose. 

## Build
Everything set with the requirements? Run the following code on your terminal to build a docker image:
```
docker-compose build
```
Next, run:
```
docker-compose up
```
This will start the application. 

## Stopping the application

You can use the following code on your terminal in order to:
- Stop the application
```
docker-compose stop
```
- Stop the app as well as remove all containers
 ```
docker-compose down --volumes
```

