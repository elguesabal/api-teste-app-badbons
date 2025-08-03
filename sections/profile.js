// /**
//  * @author VAMPETA
//  * @brief ROTA QUE RETORNA OS DADOS DO CLIENTE
//  * @route /credentials
//  * @returns {object} 200 - REPONDE COM AS CREDENCIAIS DO USUARIO
//  * @returns 401 - REPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
//  * @warning HOJE ENVIA APENAS NOME FOTO DO CLIENTE NOME E UNIDADES
// */
// export function credentials(req, res) {
// 	const { login, password } = req.body;

// 	if (login === "Vampeta" && password === "123") {
// 		res.status(200).send({
// 			photo: "https://ovicio.com.br/wp-content/uploads/2023/09/20230921-jujutsu-kaisen-gojo-555x555.jpg",
// 			name: "Satoru Gojo",
// 			units: ["Shibuya"]
// 		});
// 	} else {
// 		res.sendStatus(401);
// 	}
// }

					// IDEIA DESCONTINUADA