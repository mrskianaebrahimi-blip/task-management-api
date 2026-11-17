# Authentication

## Overview

Authentication is used to verify the identity of users.

## Authentication Method

This API uses Token-Based Authentication.

## Authorization Header

Clients must send an access token in the request header.

Example:

Authorization: Bearer YOUR_TOKEN

## Security Rules

- Protect private endpoints.
- Validate authentication tokens.
- Reject unauthorized requests.
- Never share access tokens.
