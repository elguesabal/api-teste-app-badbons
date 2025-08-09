const events = [
	{
		event: "Arco de Shibuya",
		games: [
			{
				title: "Final",
				favorite: true,
				player1: { name: "Gojo", points: 21 },
				player2: { name: "Sukuna", points: 23 }
			}
		]
	},
	{
		event: "BadBons Open 1/2024",
		games: [
			{
				title: "Semi-Final",
				favorite: false,
				player1: { name: "Grupo 1", points: "17" },
				player2: { name: "Grupo 2", points: "5" }
			},
			{
				title: "Quarta de Finais",
				favorite: false,
				player1: { name: "Grupo 1", points: "17" },
				player2: { name: "Grupo 2", points: "5" }
			}
		]
	},
	{
		event: "NDB Games 1/2024",
		games: [
			{
				title: "Final",
				favorite: false,
				player1: { name: "Grupo 1", points: "17" },
				player2: { name: "Grupo 2", points: "5" }
			},
			{
				title: "Semi-Final",
				favorite: false,
				player1: { name: "Grupo 1", points: "17" },
				player2: { name: "Grupo 2", points: "5" }
			}
		]
	}
];

/**
 * @author VAMPETA
 * @brief ROTA QUE RETORNA OS DADOS DO CLIENTE
 * @route /credentials
 * @returns {object} 200 - REPONDE COM O HISTORICO DE PARTIDAS DO USUARIO
 * @returns 401 - REPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
*/
export function gameHistory(req, res) {
	const { token } = req.body;

	if (token === "12345") {
		res.status(200).json(events);
	} else {
		res.sendStatus(401);
	}
}