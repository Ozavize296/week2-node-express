# Week 2 Express API

## Run locally

```bash
npm install
npm start
```

The server runs on the port in `.env` (default `3000`).

## Endpoints

- `GET /` serves the static HTML page containing `My Week 2 API!`.
- `POST /user` accepts `{ "name": "Ada", "email": "ada@example.com" }` and returns `Hello, Ada!`.
- `GET /user/:id` returns `User [id] profile`.
- Missing `name` or `email` in `POST /user` returns `400`.

## Test with curl

```bash
curl http://localhost:3000/
curl -X POST http://localhost:3000/user -H "Content-Type: application/json" -d "{\"name\":\"Ada\",\"email\":\"ada@example.com\"}"
curl http://localhost:3000/user/42
curl -i -X POST http://localhost:3000/user -H "Content-Type: application/json" -d "{\"name\":\"Ada\"}"
```
