
# Activity 5 – CI/CD Pipeline

## 1. What is CI/CD?

CI/CD is a process that automates software integration, testing, and delivery.

- **Continuous Integration (CI):** Automatically checks and tests code changes.
- **Continuous Delivery/Deployment (CD):** Prepares or deploys the application after successful tests.

## 2. CI/CD Pipeline Flow

The following diagram shows the main stages of a CI/CD pipeline.

```text
+-----------------------------+
| Developer Pushes Code       |
| to GitHub                   |
+-----------------------------+
              |
              v
+-----------------------------+
| Checkout Source Code        |
+-----------------------------+
              |
              v
+-----------------------------+
| Install Dependencies        |
+-----------------------------+
              |
              v
+-----------------------------+
| Build Docker Image          |
+-----------------------------+
              |
              v
+-----------------------------+
| Run Automated Tests         |
+-----------------------------+
              |
              v
       +---------------+
       | Tests Passed? |
       +---------------+
          /       \
        Yes        No
         |          |
         v          v
+---------------+  +----------------+
| Deploy        |  | Stop Pipeline  |
| Application   |  +----------------+
+---------------+          |
                           v
                  +----------------+
                  | Report Errors  |
                  +----------------+
                           |
                           v
                  +----------------+
                  | Fix Code       |
                  +----------------+
                           |
                           v
                  +----------------+
                  | Push Code Again|
                  +----------------+
```

## 3. Pipeline Stages

1. **Push Code:** The developer uploads code changes to GitHub.
2. **Checkout:** The pipeline retrieves the latest source code.
3. **Install Dependencies:** Required packages and libraries are installed.
4. **Build Docker Image:** Docker builds an image using the Dockerfile.
5. **Run Tests:** Automated tests check the application.
6. **Decision:** The pipeline checks whether all tests have passed.
7. **Deploy:** If all tests pass, the application can be deployed.

## 4. Pipeline Result

The pipeline automates testing and helps detect errors before deployment. It improves software quality, increases development speed, and reduces manual work.

A successful pipeline means that the code has passed the required checks and is ready for deployment.

## 5. Test Failure Stage

The test failure occurs during the **Run Automated Tests** stage.

If one or more tests fail:

1. The test stage reports a failure.
2. The CI/CD pipeline stops.
3. The deployment stage is skipped.
4. Error logs are generated and reported to the developer.
5. The developer fixes the problem and pushes the updated code.
6. The pipeline runs again.

### Example

If the `/api/tasks` endpoint returns an incorrect response, the related test fails. The pipeline stops and the application is not deployed until the problem is fixed.

## 6. Benefits of CI/CD

- **Faster Development:** Automates repetitive development tasks.
- **Better Software Quality:** Detects errors early.
- **Less Manual Work:** Reduces manual testing and deployment.
- **Continuous Feedback:** Developers receive quick reports about code problems.
- **Reliable Deployment:** Helps prevent faulty code from reaching production.

## 7. Conclusion

The CI/CD pipeline is an important part of modern software development. It automates code integration, testing, and deployment.

The test stage prevents faulty code from reaching production. It ensures that only code that passes the required tests proceeds to deployment. As a result, CI/CD improves software quality, saves time, and makes the development process more reliable.

