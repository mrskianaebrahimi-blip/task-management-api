
# Activity 5 – Docker and CI/CD

## 1. Relationship Between Docker and CI/CD

Docker and CI/CD work together to make software development and delivery easier.

Docker packages the application and its dependencies into an image. The CI/CD pipeline can build this image and run automated tests inside a container.

This ensures that the application runs in a consistent environment.

## 2. Docker in the Pipeline

1. The developer pushes code to GitHub.
2. The CI/CD system reads the Dockerfile.
3. Docker builds a new image.
4. A container is created from the image.
5. Automated tests run inside the container.
6. If all tests pass, the application can be deployed.

## 3. Test Failure Stage

The test failure stage happens during the **Run Automated Tests** step.

If one or more tests fail:

- The pipeline stops.
- The deployment stage is skipped.
- Error messages and test logs are reported.
- The developer fixes the problem and pushes the updated code.
- The pipeline runs again.

## 4. Benefits of Using Docker in CI/CD

- Consistent testing environment.
- Easier application deployment.
- Fewer environment-related errors.
- Better portability.
- Faster and more reliable development workflow.

## Conclusion

Docker provides a consistent environment for building and running applications, while CI/CD automates testing and delivery. Together, they improve software quality and make deployment more reliable.
