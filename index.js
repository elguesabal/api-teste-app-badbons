const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
	res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));