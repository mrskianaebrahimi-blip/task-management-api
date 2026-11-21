
# Activity 5 – Docker and CI/CD

## 1. Relationship Between Docker and CI/CD

Docker and CI/CD work together to make software development and delivery easier.

Docker packages the application and its dependencies into an image. The CI/CD pipeline can build this image and run automated tests inside a container.

This ensures that the application runs in a consistent environment across different systems.

## 2. Docker in the Pipeline

1. The developer pushes code to GitHub.
2. The CI/CD system reads the Dockerfile.
3. Docker builds a new image.
4. A container is created from the image.
5. Automated tests run inside the container.
6. If all tests pass, the application can be deployed.

## 3. Docker Workflow Diagram

The following diagram illustrates how Docker works in a CI/CD pipeline.

```text
Developer Pushes Code
          |
          v
     GitHub Repository
          |
          v
     Read Dockerfile
          |
          v
     Build Docker Image
          |
          v
    Create Container
          |
          v
    Run Automated Tests
          |
          v
      Tests Passed?
       /       \
     Yes        No
      |          |
      v          v
   Deploy      Stop Pipeline
 Application       |
                   v
              Report Errors
```

## 4. Test Failure Stage

The test failure stage happens during the **Run Automated Tests** step.

If one or more tests fail:

- The pipeline stops.
- The deployment stage is skipped.
- Error messages and test logs are reported.
- The developer fixes the problem and pushes the updated code.
- The pipeline runs again.

## 5. Benefits of Using Docker in CI/CD

- **Consistent Testing Environment:** Applications run in the same environment.
- **Easier Deployment:** Docker containers simplify application deployment.
- **Fewer Errors:** Reduces environment-related problems.
- **Portability:** Containers can run on different systems.
- **Faster Workflow:** Automates building, testing, and delivery.

## 6. Example of Docker in CI/CD

Imagine a developer creates a Task Management API application.

The developer pushes the code to GitHub. The CI/CD pipeline uses the Dockerfile to build an image and creates a container.

Automated tests check whether the API endpoints work correctly.

If all tests pass, the application proceeds to deployment. If a test fails, the pipeline stops and reports the error to the developer.

## Conclusion

Docker provides a consistent environment for building and running applications, while CI/CD automates testing and delivery.

Together, they improve software quality, reduce development errors, and make application deployment faster and more reliable.

