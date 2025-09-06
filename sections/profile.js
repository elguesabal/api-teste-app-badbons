/**
 * @author VAMPETA
 * @brief ROTA QUE SALVA A NOVA FOTO DE PERFIL DO CLIENTE
 * @route /upload-photo-profile
 * @returns 200 - REPONDE APENAS COM O STATUS
 * @returns 401 - REPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
*/
export function uploadPhotoProfile(req, res) {
	const authHeader = req.headers["authorization"];
	const token = authHeader.split(" ")[1];
	// const img = req.file; // COMENTANDO ESSE TRECHO DO CODIGO PQ O VERCEL NAO ME DA PERMISSAO DE ESCRITA

	if (token === "12345") {
		// if (img) {
			setTimeout(() => {
				res.sendStatus(200);
			}, 2000);
		// }
	} else {
		res.sendStatus(401);
	}
}

/**
 * @author VAMPETA
 * @brief ROTA QUE TROCA O EMAIL DO USUARIO
 * @route /swap-email
 * @returns 200 - REPONDE APENAS COM O STATUS
 * @returns 401 - REPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
 * @returns 403 - REPONDE APENAS COM O STATUS SE O TOKEN FOR VALIDO MAS A SENHA INFORMADA ESTEJA ERRADA
*/
export function swapEmail(req, res) {
	const authHeader = req.headers["authorization"];
	const token = authHeader.split(" ")[1];
	const { newEmail, password } = req.body;

	if (token !== "12345") return (res.sendStatus(401));
	if (password !== "123") return (res.sendStatus(403));
	setTimeout(() => res.sendStatus(200), 1000);
}

/**
 * @author VAMPETA
 * @brief ROTA QUE TROCA A SENHA DO USUARIO
 * @route /swap-password
 * @returns 200 - REPONDE APENAS COM O STATUS
 * @returns 401 - REPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
 * @returns 403 - REPONDE APENAS COM O STATUS SE O TOKEN FOR VALIDO MAS A SENHA INFORMADA ESTEJA ERRADA
*/
export function swapPassword(req, res) {
	const authHeader = req.headers["authorization"];
	const token = authHeader.split(" ")[1];
	const { newPassword, password } = req.body;

	if (token !== "12345") return (res.sendStatus(401));
	if (password !== "123") return (res.sendStatus(403));
	setTimeout(() => res.sendStatus(200), 1000);
}

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
 * @route /game-history
 * @returns {object} 200 - REPONDE COM O HISTORICO DE PARTIDAS DO USUARIO
 * @returns 401 - REPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
*/
export function gameHistory(req, res) {
	const authHeader = req.headers["authorization"];
	const token = authHeader.split(" ")[1];

	if (token !== "12345") return (res.sendStatus(401));
	setTimeout(() => res.status(200).json(events), 2000);
}