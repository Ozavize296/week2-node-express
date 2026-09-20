require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
	console.log(`${req.method} ${req.originalUrl}`);
	next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.send('My Week 2 API!');
});

app.post('/user', (req, res, next) => {
	const { name, email } = req.body || {};

	if (!name || !email) {
		const error = new Error('name and email are required');
		error.status = 400;
		return next(error);
	}

	res.send(`Hello, ${name}!`);
});

app.get('/user/:id', (req, res) => {
	res.send(`User ${req.params.id} profile`);
});

app.use((error, req, res, next) => {
	if (res.headersSent) {
		return next(error);
	}

	const status = error.status || 500;
	res.status(status).send(status === 400 ? error.message : 'Internal Server Error');
});

if (require.main === module) {
	app.listen(port, () => {
		console.log(`Server running at http://localhost:${port}`);
	});
}

module.exports = app;
