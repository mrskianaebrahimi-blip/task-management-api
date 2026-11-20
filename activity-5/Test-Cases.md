
# Activity 5 – Test Cases

## Project: Task Management API

### Test Case 1: Check Server Status
- **Test ID:** TC-01
- **Description:** Check if the server is running.
- **Method:** GET
- **Endpoint:** `/`
- **Expected Result:** Server returns HTTP 200 and a success message.
- **Status:** Not Run

### Test Case 2: Get All Tasks
- **Test ID:** TC-02
- **Description:** Retrieve the list of tasks.
- **Method:** GET
- **Endpoint:** `/api/tasks`
- **Expected Result:** Server returns HTTP 200 and a JSON list of tasks.
- **Status:** Not Run

### Test Case 3: Check Task Data Structure
- **Test ID:** TC-03
- **Description:** Check whether each task contains the required fields.
- **Method:** GET
- **Endpoint:** `/api/tasks`
- **Expected Result:** Each task contains the expected information, such as ID and title.
- **Status:** Not Run

### Test Case 4: Check Invalid Endpoint
- **Test ID:** TC-04
- **Description:** Send a request to an endpoint that does not exist.
- **Method:** GET
- **Endpoint:** `/api/invalid`
- **Expected Result:** Server returns HTTP 404 or an appropriate error response.
- **Status:** Not Run

### Test Case 5: Check HTTP Method
- **Test ID:** TC-05
- **Description:** Send a POST request to the root endpoint.
- **Method:** POST
- **Endpoint:** `/`
- **Expected Result:** Server rejects the unsupported request or returns an appropriate error response.
- **Status:** Not Run
