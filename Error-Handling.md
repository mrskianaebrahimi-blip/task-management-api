# Error Handling

## HTTP Error Codes

| Status Code | Meaning | Description |
|---|---|---|
| 400 | Bad Request | Invalid request |
| 401 | Unauthorized | Authentication required |
| 403 | Forbidden | Access denied |
| 404 | Not Found | Resource not found |
| 500 | Internal Server Error | Server error |

## Error Response Example

{
  "error": true,
  "message": "Task not found",
  "status": 404
}

## Error Handling Rules

- Validate all incoming requests.
- Return appropriate HTTP status codes.
- Provide clear error messages.
- Handle server errors properly.
