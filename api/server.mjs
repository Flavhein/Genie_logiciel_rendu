import express from "express";

export function createServer() {
	const app = express();

	app.use(express.json());

	app.get("/", (req, res) => {
		res.json({ status: "ok", now: new Date().toISOString() });
	});

	app.get("/feature/:code", (req, res) => {
		const { code } = req.params;
		res.json({ code, enabled: true });
	});

	return app
}
