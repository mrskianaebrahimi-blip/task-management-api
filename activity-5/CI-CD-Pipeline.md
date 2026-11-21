
# Activity 5 – CI/CD Pipeline

## 1. What is CI/CD?

CI/CD is a process that automates software integration, testing, and delivery.

- **Continuous Integration (CI):** Automatically checks and tests code changes.
- **Continuous Delivery/Deployment (CD):** Prepares or deploys the application after successful tests.

## 2. CI/CD Pipeline Flow

The following diagram shows the main stages of a CI/CD pipeline, from pushing code to GitHub to deploying the application.

``` mermaid
flowchart TD
    A[Developer Pushes Code to GitHub] --> B[Checkout Source Code]
    B --> C[Install Dependencies]
    C --> D[Build Docker Image]
    D --> E[Run Automated Tests]
    E --> F{Tests Passed?}
    F -->|Yes| G[Deploy Application]
    F -->|No| H[Stop Pipeline]
    H --> I[Generate Error Logs]
    I --> J[Report Errors to Developer]
    J --> K[Fix Code]
    K --> L[Push Updated Code to GitHub]
    L --> A
```

### How the Pipeline Works

The pipeline starts when a developer pushes new code to GitHub. The CI/CD system automatically retrieves the source code, installs the required dependencies, builds a Docker image, and runs automated tests.

If all tests pass, the application proceeds to deployment. If any test fails, the pipeline stops, generates error logs, and reports the problem to the developer. After fixing the code, the developer pushes the updated version and the pipeline starts again.

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

