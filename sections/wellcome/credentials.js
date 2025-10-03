export function getCredentials(req) {
	return ({
		photo: `${(req.headers["x-forwarded-proto"] || req.protocol).includes("https") ? "https" : "http"}://${req.get("host")}/img/user.jpg`,
		name: "Satoru Gojo",
		email: "soladordesukuna@ryomen.com",
		cpf: "Cancelado",
		date: "07/12/1989",
		phone: "(00) 00000-0000",
		units: ["Shibuya", "Shinjuku", "Fukutoshin"],
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