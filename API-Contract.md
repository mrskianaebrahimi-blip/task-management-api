# Task Management API

## 1. Project Description
A RESTful API for managing users and their tasks.

## 2. Resources
- Users: Manages user information.
- Tasks: Manages user tasks.

## 3. Users Endpoints

| Endpoint | Method | Status Code |
|---|---|---|
| /users | GET | 200, 500 |
| /users/{id} | GET | 200, 404, 500 |
| /users | POST | 201, 400, 500 |
| /users/{id} | PUT | 200, 400, 404, 500 |
| /users/{id} | DELETE | 204, 404, 500 |

## 4. Tasks Endpoints

| Endpoint | Method | Status Code |
|---|---|---|
| /tasks | GET | 200, 500 |
| /tasks/{id} | GET | 200, 404, 500 |
| /tasks | POST | 201, 400, 500 |
| /tasks/{id} | PUT | 200, 400, 404, 500 |
| /tasks/{id} | DELETE | 204, 404, 500 |

## 5. Architecture Diagram

Client
  |
REST API
  |
Users and Tasks
  |
Database

## 6. HTTP Status Codes
- 200: OK
- 201: Created
- 204: No Content
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error
