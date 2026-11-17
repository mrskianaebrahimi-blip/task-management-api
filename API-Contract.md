# Task Management API

## 1. Overview
A RESTful API for managing users and tasks.

## 2. Resources
- Users
- Tasks

## 3. Users Endpoints

| Method | Endpoint | Description | Status Code |
|---|---|---|---|
| GET | /users | Get all users | 200 |
| GET | /users/{id} | Get user by ID | 200 |
| POST | /users | Create user | 201 |
| PUT | /users/{id} | Update user | 200 |
| DELETE | /users/{id} | Delete user | 204 |

## 4. Tasks Endpoints

| Method | Endpoint | Description | Status Code |
|---|---|---|---|
| GET | /tasks | Get all tasks | 200 |
| GET | /tasks/{id} | Get task by ID | 200 |
| POST | /tasks | Create task | 201 |
| PUT | /tasks/{id} | Update task | 200 |
| DELETE | /tasks/{id} | Delete task | 204 |

## 5. Architecture

Client → REST API → Database

## 6. Response Format
All responses use JSON format. Server Error
