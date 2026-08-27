# Todo Client — Angular

Frontend client for a full-stack Todo application built with Angular.

This repository is the client-side application for the Java Spring Boot Todo API.

## Connected backend

Spring Boot API repository:
https://github.com/jackie1santana/java-todo

Local API base:
`http://localhost:8080`

Todo API route:
`http://localhost:8080/api/v1/todos`

## Local frontend

Angular runs locally at:
`http://localhost:4200`

Start the development server with:

```bash
ng serve
```

## Architecture

```text
Angular Todo Client
http://localhost:4200
        |
        | HTTP
        v
Spring Boot Todo API
http://localhost:8080/api/v1/todos
```

## Related project

This frontend is designed to be used together with the Java Spring Boot Todo API:
https://github.com/jackie1santana/java-todo

## Building

```bash
ng build
```

## Tests

```bash
ng test
```
