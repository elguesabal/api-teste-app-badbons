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

app.get("/training-locations", (req, res) => {
	res.status(200).json(["Barra da Tijuca", "Andaraí", "Madureira", "Bonsucesso", "Tijuca", "Guaratiba", "Lagoa", "Taquara"]);
});

app.get("/timetable-units", (req, res) => {
	const units = req.query["units[]"];
	const data = [];

	if (units.includes("Barra da Tijuca")) data.push({ unit: "Barra da Tijuca", address: "Rua Opnião Liberal, 315", classes: [{ day: "Segunda", start: "8:00", end: "9:30" }, { day: "Terça", start: "9:30", end: "11:00" }, { day: "Sabado", start: "11:00", end: "13:30" }, { day: "Segunda", start: "8:00", end: "9:30" }, { day: "Terça", start: "9:30", end: "11:00" }, { day: "Sabado", start: "11:00", end: "13:30" }] });
	if (units.includes("Andaraí")) data.push({ unit: "Andaraí", address: "Rua Opnião Liberal, 315", classes: [{ day: "Sabado", start: "8:00", end: "9:30" }, { day: "Quinta", start: "9:30", end: "11:00" }, { day: "Quinta", start: "11:00", end: "13:30" }] });
	if (units.includes("Madureira")) data.push({ unit: "Madureira", address: "Rua Opnião Liberal, 315", classes: [{ day: "Sabado", start: "8:00", end: "9:30" }, { day: "Quinta", start: "9:30", end: "11:00" }, { day: "Quinta", start: "11:00", end: "13:30" }] });
	if (units.includes("Bonsucesso")) data.push({ unit: "Bonsucesso", address: "Rua Opnião Liberal, 315", classes: [{ day: "Quarta", start: "8:00", end: "9:30" }, { day: "Quarta", start: "9:30", end: "11:00" }, { day: "Quarta", start: "11:00", end: "13:30" }] });
	if (units.includes("Tijuca")) data.push({ unit: "Tijuca", address: "Rua Opnião Liberal, 315", classes: [{ day: "Segunda", start: "8:00", end: "9:30" }, { day: "Terça", start: "9:30", end: "11:00" }, { day: "Sabado", start: "11:00", end: "13:30" }, { day: "Segunda", start: "8:00", end: "9:30" }, { day: "Terça", start: "9:30", end: "11:00" }, { day: "Sabado", start: "11:00", end: "13:30" }] });
	if (units.includes("Guaratiba")) data.push({ unit: "Guaratiba", address: "Rua Opnião Liberal, 315", classes: [{ day: "Quarta", start: "8:00", end: "9:30" }, { day: "Quarta", start: "9:30", end: "11:00" }, { day: "Quarta", start: "11:00", end: "13:30" }] });
	if (units.includes("Lagoa")) data.push({ unit: "Lagoa", address: "Rua Opnião Liberal, 315", classes: [{ day: "Sabado", start: "8:00", end: "9:30" }, { day: "Sabado", start: "9:30", end: "11:00" }, { day: "Sabado", start: "11:00", end: "13:30" }] });
	if (units.includes("Taquara")) data.push({ unit: "Taquara", address: "Rua Opnião Liberal, 315", classes: [{ day: "Segunda", start: "8:00", end: "9:30" }, { day: "Terça", start: "9:30", end: "11:00" }, { day: "Sabado", start: "11:00", end: "13:30" }, { day: "Segunda", start: "8:00", end: "9:30" }, { day: "Terça", start: "9:30", end: "11:00" }, { day: "Sabado", start: "11:00", end: "13:30" }] });

	res.status(200).json(data);
});

app.listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));