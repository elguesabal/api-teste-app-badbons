import validator from "validator";

let { presenceQuarta, presenceQuinta, presenceSabado } = { presenceQuarta: quarta.confirmedPresence, presenceQuinta: quinta.confirmedPresence, presenceSabado: sabado.confirmedPresence };
/**
 * @author VAMPETA
 * @brief ROTA QUE O CLIENTE DEVE INFORMAR SE ELE VAI AO TREINO OU NAO
 * @method PATCH
 * @route /presence-student
 * @param {string} headers.authorization TOKEN DO USUARIO
 * @param {string} body.date DATA DO TREINO
 * @param {boolean} body.presence CONFIRMACAO DE PRESENCA NO TREINO
 * @returns 204 - REPONDE APENAS COM O STATUS
 * @returns 400 - REPONDE APENAS COM O STATUS SE A CONFIRMACAO DE PRESENCA FOR INVALIDA
 * @returns 401 - REPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
 * @returns 409 - REPONDE APENAS COM O STATUS SE A CONFIRMACAO DE PRESENCA FOR IGUAL A ANTERIOR OU JA PASSOU DA DATA
*/
export function presenceStudent(req, res) {
	const { authorization } = req.headers;
	if (!authorization || authorization !== "Bearer " + process.env.REFRESH_TOKEN) return (res.sendStatus(401));

	if (!req.body) return (res.sendStatus(400));
	const { date, presence } = req.body;
	if (!validator.isDate(date, { format: "DD/MM/YYYY", strictMode: true }) || typeof presence !== "boolean") return (res.sendStatus(400));
	const [day, month, year] = date.split("/");
	const newDate = new Date(year, month - 1, day);
	const dataBR = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
	if (newDate < dataBR) return (res.sendStatus(409));
	if (newDate.getDay() === 3 && presence === presenceQuarta) return (res.sendStatus(409));
	if (newDate.getDay() === 4 && presence === presenceQuinta) return (res.sendStatus(409));
	if (newDate.getDay() === 6 && presence === presenceSabado) return (res.sendStatus(409));
	if (newDate.getDay() === 3) presenceQuarta = presence;
	if (newDate.getDay() === 4) presenceQuinta = presence;
	if (newDate.getDay() === 6) presenceSabado = presence;
	setTimeout(() => res.sendStatus(204), 1000);
}

import { segunda, terca, quarta, quinta, sexta, sabado, domingo } from "./days.js";
/**
 * @author VAMPETA
 * @brief ROTA QUE RETORNA A LISTA DE PRESENCA
 * @method GET
 * @route /presence-list
 * @param {string} headers.authorization TOKEN DO USUARIO
 * @param {string} query.date DIA QUE O USUARIO ESTA CONSULTANDO
 * @returns {object} 200 - REPONDE COM A LISTA DE ALUNOS CONFIRMADOS PARA IR AO TREINO E ALGUMAS OUTRAS INFORMACOES DENTRO DO OBJETO
 * @returns 400 - RESPONDE APENAS COM O STATUS SE A DATA FOR INVALIDA
 * @returns 401 - REPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
 * @returns 404 - REPONDE APENAS COM O STATUS SE NAO OUVER TREINO NESSA DATA
*/
export function presenceList(req, res) {
	const { authorization } = req.headers;
	if (!authorization || authorization !== "Bearer " + process.env.REFRESH_TOKEN) return (res.sendStatus(401));

	const { date } = req.query;
	if (!validator.isDate(date, { format: "DD/MM/YYYY", strictMode: true })) return (res.sendStatus(400));
	const [day, month, year] = date.split("/");
	const newDate = new Date(year, month - 1, day);
	if (newDate.getDay() === 3) return (res.status(200).json(quarta));
	if (newDate.getDay() === 4) return (res.status(200).json(quinta));
	if (newDate.getDay() === 6) return (setTimeout(() => res.status(200).json(sabado), 2000));
	res.sendStatus(404);
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