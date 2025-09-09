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
	const day = req.query.day;

	if (token !== "12345") return (res.sendStatus(401));
	if (day === "Qua") res.status(200).json(quarta);
	if (day === "Qui") res.status(200).json(quinta);
	if (day === "Sab") setTimeout(() => res.status(200).json(sabado), 2000);
}