export function getCredentials(req) {
	return ({
		_id: "123",
		foto: `${(req.headers["x-forwarded-proto"] || req.protocol).includes("https") ? "https" : "http"}://${req.get("host")}/img/user.jpg`,
		nome: "Satoru Gojo",
		email: "soladordesukuna@ryomen.com",
		cpf: "Cancelado",
		// cpf: "070.680.938-68",
		dataNascimento: "07/12/1989",
		telefone: "(00) 00000-0000",
		times: {
			Madureira: [
				{ day: "Quinta", start: "18:00", end: "19:30" },
				{ day: "Sabado", start: "9:00", end: "10:30" }
			],
			Bonsucesso: [
				{ day: "Quarta", start: "18:00", end: "20:00" }
			]
		}
	});
}