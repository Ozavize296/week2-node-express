# Week 2 Express API

## Run locally

```bash
npm install
npm start
```

The server runs on the port in `.env` (default `3000`).

## Endpoints

- `GET /` returns `My Week 2 API!`.
- `POST /user` accepts `{ "name": "GIFT", "email": "ozavizefavouri@gmail.com" }` and returns `Hello, GIFT!`.
- `GET /user/:id` returns `User [id] profile`.
- Missing `name` or `email` in `POST /user` returns `400`.

## Test with curl

```bash
curl http://localhost:3000/
curl -X POST http://localhost:3000/user -H "Content-Type: application/json" -d "{\"name\":\"GIFT\",\"email\":\"ozavizefavouri@gmail.com\"}"
curl http://localhost:3000/user/42
curl -i -X POST http://localhost:3000/user -H "Content-Type: application/json" -d "{\"name\":\"GIFT\"}"
```

In Postman, send the same requests to `http://localhost:3000`: use `GET /`, `POST /user` with a raw JSON body containing the `GIFT` name and email above, and `GET /user/42`.

## GitHub

```bash
git init
git add .
git commit -m "Build week 2 Express API"
git branch -M main
git remote add origin https://github.com/Ozavize296/week2-node-express.git
git push -u origin main
```
