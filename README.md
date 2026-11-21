
# Task Management API

## Introduction

A RESTful API designed to manage users and tasks. This project includes API documentation, a Node.js backend, Docker containerization, test cases, and CI/CD pipeline concepts.

## Features

- Create tasks
- Read tasks
- Update tasks
- Delete tasks
- User management
- Authentication
- Error handling
- Docker containerization
- Test case design
- CI/CD pipeline documentation

## Activity 3 – API Documentation

- [API Contract](API-Contract.md)
- [API Examples](Examples.md)
- [Error Handling](Error-Handling.md)
- [Authentication](Authentication.md)
- [Database Design](Database.md)
- [Testing](Testing.md)
- [Security](Security.md)
- [Changelog](CHANGELOG.md)

## Activity 4 – Dockerized Backend

The backend is developed using Node.js and Express.

### Features

- REST API server
- Dockerfile configuration
- Docker image creation
- Container execution
- Port mapping

Backend files are available in the [backend-project](backend-project/) directory.

### Docker Commands

Build the Docker image:

```bash
docker build -t task-management-api ./backend-project
```

Run the container:

```bash
docker run -d -p 3000:3000 --name task-api-container task-management-api
```

## Activity 5 – Testing and CI/CD

This activity includes test case design, CI/CD pipeline flow, test failure handling, and the relationship between Docker and CI/CD.

### Documentation

- [Test Cases](activity-5/Test-Cases.md)
- [CI/CD Pipeline](activity-5/CI-CD-Pipeline.md)
- [Docker and CI/CD Relationship](activity-5/Docker-CI-CD.md)

## Technologies

- Node.js
- Express.js
- REST API
- HTTP
- JSON
- Docker
- GitHub
- CI/CD

## Project Status

- Activity 3: API Documentation Completed
- Activity 4: Dockerized Backend Completed
- Activity 5: Test Cases and CI/CD Documentation Completed

