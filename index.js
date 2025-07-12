const express = require("express");
const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
	res.sendStatus(200);
});

app.post("/login", (req, res) => {
	const { login, password } = req.body;

	if (login === "Vampeta" && password === "123") {
		res.status(200).send({ message: "Login bem-sucedido!" });
	} else {
		res.status(401).send({ message: "Credenciais inválidas!" });
	}
});

app.post("/register", (req, res) => {
	res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));