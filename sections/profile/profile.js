/**
 * @author VAMPETA
 * @brief ROTA QUE SALVA A NOVA FOTO DE PERFIL DO CLIENTE
 * @method PATCH
 * @route /user/update-image
 * @param {string} headers.authorization TOKEN DO USUARIO
 * @param {Express.Multer.File} body.file IMAGEM ENVIADA PELO USUARIO VIA multipart/form-data (NESSE MOMENTO ESSE PARAMETRO NAO ESTA SENDO OBRIGATORIO POR ESTA DESABILITADO)
 * @returns 200 - RESPONDE APENAS COM O STATUS
 * @returns 400 - RESPONDE APENAS COM O STATUS SE O USUARIO NAO MANDAR A IMAGEM
 * @returns 401 - RESPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
*/
export function uploadPhotoProfile(req, res) {
	const token = req.headers["authorization"].split(" ")[1];
	// const img = req.file; // COMENTANDO ESSE TRECHO DO CODIGO PQ O VERCEL NAO ME DA PERMISSAO DE ESCRITA

	if (token !== "12345") return (res.sendStatus(401));
	// if (!img) return (res.sendStatus(400)); // COMENTANDO ESSE TRECHO DO CODIGO PQ O VERCEL NAO ME DA PERMISSAO DE ESCRITA
	setTimeout(() => res.sendStatus(200), 2000);
}

/**
 * @author VAMPETA
 * @brief ROTA QUE TROCA O EMAIL DO USUARIO
 * @method POST
 * @route /swap-email
 * @param {string} headers.authorization TOKEN DO USUARIO
 * @param {string} body.newEmail NOVO EMAIL
 * @param {string} body.password SENHA
 * @returns 200 - RESPONDE APENAS COM O STATUS
 * @returns 401 - RESPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
 * @returns 403 - RESPONDE APENAS COM O STATUS SE O TOKEN FOR VALIDO MAS A SENHA INFORMADA ESTEJA ERRADA
*/
export function swapEmail(req, res) {
	const token = req.headers["authorization"].split(" ")[1];
	const { newEmail, password } = req.body;

	if (token !== "12345") return (res.sendStatus(401));
	if (password !== "123") return (res.sendStatus(403));
	setTimeout(() => res.sendStatus(200), 1000);
}

/**
 * @author VAMPETA
 * @brief ROTA QUE TROCA A SENHA DO USUARIO
 * @method POST
 * @route /swap-password
 * @param {string} headers.authorization TOKEN DO USUARIO
 * @param {string} body.newPassword NOVA SENHA
 * @param {string} body.password SENHA
 * @returns 200 - RESPONDE APENAS COM O STATUS
 * @returns 401 - RESPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
 * @returns 403 - RESPONDE APENAS COM O STATUS SE O TOKEN FOR VALIDO MAS A SENHA INFORMADA ESTEJA ERRADA
*/
export function swapPassword(req, res) {
	const token = req.headers["authorization"].split(" ")[1];
	const { newPassword, password } = req.body;

	if (token !== "12345") return (res.sendStatus(401));
	if (password !== "123") return (res.sendStatus(403));
	setTimeout(() => res.sendStatus(200), 1000);
}

import { events1, events2 } from "./events.js";
/**
 * @author VAMPETA
 * @brief ROTA QUE RETORNA O HITORICO DE PARTIDA
 * @method GET
 * @route /game-history
 * @param {string} headers.authorization TOKEN DO USUARIO
 * @param {number} query.page PAGINA DE PARTIDAS (EXEMPLO: A 1° PAGINA CONTEM AS 15 ULTIMAS PARTIDAS E A 2° PAGINA CONTEM AS PARTIDAS 16 ATE A 30)
 * @returns {object} 200 - REPONDE COM O HISTORICO DE PARTIDAS DO USUARIO
 * @returns 401 - RESPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
*/
export function gameHistory(req, res) {
	const token = req.headers["authorization"].split(" ")[1];
	const { page } = req.query;

	if (token !== "12345") return (res.sendStatus(401));
	if (page === "1") {
		setTimeout(() => res.status(200).json(events1), 1000);
	} else if (page === "2") {
		setTimeout(() => res.status(200).json(events2), 1000);
	} else {
		setTimeout(() => res.status(200).json([]), 1000);
	}
}

import { listNotifications1, listNotifications2 } from "./listNotifications.js";
/**
 * @author VAMPETA
 * @brief ROTA QUE RETORNA AS NOTIFICACOES DO USUARIO
 * @method GET
 * @route /notifications
 * @param {string} headers.authorization TOKEN DO USUARIO
 * @param {number} query.page PAGINA DE NOTIFICACOES (EXEMPLO: A 1° PAGINA CONTEM AS 15 ULTIMAS NOTIFICACOES E A 2° PAGINA CONTEM AS NOTIFICACOES 16 ATE A 30)
 * @returns {object} 200 - REPONDE COM AS NOTIFICACOS DO USUARIOS
 * @returns 401 - RESPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
*/
export function notifications(req, res) {
	const token = req.headers["authorization"].split(" ")[1];
	const { page } = req.query;

	if (token !== "12345") return (res.sendStatus(401));
	if (page === "1") {
		setTimeout(() => res.status(200).json(listNotifications1), 1000);
	} else if (page === "2") {
		setTimeout(() => res.status(200).json(listNotifications2), 1000);
	} else {
		setTimeout(() => res.status(200).json([]), 1000);
	}
}

import { notification1, notification2, notification3, notification4, notification5 } from "./notification.js";
/**
 * @author VAMPETA
 * @brief ROTA QUE BUSCA UMA NOTIFICACAO EXPECIFICA
 * @method GET
 * @route /notification
 * @param {string} headers.authorization TOKEN DO USUARIO
 * @param {number} query.id ID DA NOTIFICACAO
 * @returns {object} 200 - REPONDE COM A NOTIFICACAO REQUERIDA
 * @returns 404 - RESPONDE APENAS COM O STATUS SE A NOTIFICACAO NAO EXISTIR
*/
export function notification(req, res) {
	const token = req.headers["authorization"].split(" ")[1];
	const { id } = req.query;

	if (token !== "12345") return (res.sendStatus(401));
	if (id === "1") return (res.status(200).json(notification1));
	if (id === "2") return (res.status(200).json(notification2));
	if (id === "3") return (res.status(200).json(notification3));
	if (id === "4") return (res.status(200).json(notification4));
	if (id === "5") return (res.status(200).json(notification5));
	setTimeout(() => res.sendStatus(404), 1000);
}