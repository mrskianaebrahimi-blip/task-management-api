
# Activity 4 - Dockerizing Node.js Backend

## Project Description
This project demonstrates how to containerize a simple Node.js backend API using Docker.

## Technologies
- Node.js
- Express.js
- Docker
- Docker Desktop / Docker Engine

## Project Structure
```text
backend-project/
├── src/
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
└── README.md
```

## Build Docker Image
```bash
docker build -t task-management-api .
```

## Run Container
```bash
docker run -d -p 3000:3000 --name task-api-container task-management-api
```

## Check Running Container
```bash
docker ps
```

## Test API
```bash
curl http://localhost:3000/
curl http://localhost:3000/api/tasks
```

## Port Mapping
Host Port: 3000  
Container Port: 3000

## Result
The Docker image was successfully built and the container is running.
The API responds successfully on port 3000.
