
# Activity 5 – Test Cases

## Project: Task Management API

### Test Case 1: Check Server Status
- **Test ID:** TC-01
- **Description:** Check if the API server is running.
- **Method:** GET
- **Endpoint:** `/`
- **Expected Status Code:** 200
- **Expected Result:** The response should be `Task Management API is running!`.
- **Status:** Not Run

### Test Case 2: Get All Tasks
- **Test ID:** TC-02
- **Description:** Retrieve all tasks from the API.
- **Method:** GET
- **Endpoint:** `/api/tasks`
- **Expected Status Code:** 200
- **Expected Result:** A JSON array containing two sample tasks.
- **Status:** Not Run

### Test Case 3: Validate Task Data
- **Test ID:** TC-03
- **Description:** Check the structure of each task.
- **Method:** GET
- **Endpoint:** `/api/tasks`
- **Expected Result:** Each task must contain `id`, `title`, and `completed` fields with appropriate values.
- **Status:** Not Run

### Test Case 4: Check Invalid Endpoint
- **Test ID:** TC-04
- **Description:** Send a request to an endpoint that does not exist.
- **Method:** GET
- **Endpoint:** `/api/invalid`
- **Expected Status Code:** 404
- **Expected Result:** The server should return a Not Found response.
- **Status:** Not Run

### Test Case 5: Check Unsupported HTTP Method
- **Test ID:** TC-05
- **Description:** Send an unsupported POST request to the root endpoint.
- **Method:** POST
- **Endpoint:** `/`
- **Expected Status Code:** 404
- **Expected Result:** The server should return a Not Found response because no POST route is defined.
- **Status:** Not Run

