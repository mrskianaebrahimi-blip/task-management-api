# Database Design

## Overview

The API uses a database to store users and tasks.

## Users Table

| Field | Type |
|---|---|
| id | Integer |
| name | String |
| email | String |
| password | String |

## Tasks Table

| Field | Type |
|---|---|
| id | Integer |
| title | String |
| description | String |
| completed | Boolean |
| user_id | Integer |

## Relationships

Each user can have multiple tasks.

Each task belongs to one user.

## Data Integrity

- User IDs must be unique.
- Task IDs must be unique.
- Email addresses must be unique.
- Every task must belong to a valid user.
