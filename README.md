# Todo Client — Angular

Frontend client for a simple full-stack Todo CRUD application built with Angular.

The purpose of this project is to demonstrate that I can build and connect a frontend and backend application from scratch, send HTTP requests between the two applications, and handle a basic CRUD-style application flow.

The application does **not** use a real database. Todo data is sourced from JSONPlaceholder for demonstration purposes.

## AI note

The application code was written from scratch without AI assistance. The only AI-generated content in this repository is this README.

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
        |
        v
JSONPlaceholder Todo Data
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
