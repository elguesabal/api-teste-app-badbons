/**
 * @author VAMPETA
 * @brief ROTA QUE O CLIENTE DEVE INFORMAR SE ELE VAI AO TREINO OU NAO
 * @method POST
 * @route /presence-student
 * @param {string} headers.authorization TOKEN DO USUARIO
 * @param {boolean} body.presence CONFIRMACAO DE PRESENCA NO TREINO
 * @returns 200 - REPONDE APENAS COM O STATUS
 * @returns 401 - REPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
*/
export function presenceStudent(req, res) {
	const token = req.headers["authorization"].split(" ")[1];
	const { presence } = req.body;

	if (token !== "12345") return (res.sendStatus(401));
	setTimeout(() => res.sendStatus(200), 1000);
}

import { segunda, terca, quarta, quinta, sexta, sabado, domingo } from "./days.js";
/**
 * @author VAMPETA
 * @brief ROTA QUE RETORNA A LISTA DE PRESENCA
 * @method GET
 * @route /presence-list
 * @param {string} headers.authorization TOKEN DO USUARIO
 * @param {string} queri.day DIA QUE O USUARIO ESTA CONSULTANDO
 * @returns {object} 200 - REPONDE COM A LISTA DE ALUNOS CONFIRMADOS PARA IR AO TREINO E ALGUMAS OUTRAS INFORMACOES DENTRO DO OBJETO
 * @returns 401 - REPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
*/
export function presenceList(req, res) {
	const token = req.headers["authorization"].split(" ")[1];
	const { date } = req.query;
	const [day, month, year] = date.split("/");
	const newDate = new Date(`${year}-${month}-${day}`);

	if (token !== "12345") return (res.sendStatus(401));
	if (newDate.getDay() === 2) res.status(200).json(quarta);
	if (newDate.getDay() === 3) res.status(200).json(quinta);
	if (newDate.getDay() === 5) setTimeout(() => res.status(200).json(sabado), 2000);
}

/**
 * @author VAMPETA
 * @brief ROTA QUE INFORMA A QUANTIDADE DE EXERCICIOS FEITOS
 * @method GET
 * @route /user/treinos
 * @param {string} headers.authorization TOKEN DO USUARIO
 * @returns {object} 200 - REPONDE COM O NUMERO DE EXERCICIOS TOTAIS E FEITOS
 * @returns 401 - REPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
*/
export function exercises(req, res) {
	const { authorization } = req.headers;

	if (!authorization || authorization !== "Bearer " + process.env.REFRESH_TOKEN) return (res.sendStatus(401));
	setTimeout(() => res.status(200).json({ treinosTotais: 10, treinosFeitos: 5 }), 2000);
}