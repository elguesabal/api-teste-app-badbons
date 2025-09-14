import path from "path";
import { fileURLToPath } from "url";

import { versions } from "./versions.js";
/**
 * @author VAMPETA
 * @brief ROTA PING QUE VERIFICA SE A VERSAO DO APP E COMPATIVEL COM A API
 * @method GET
 * @route /ping
 * @param {string} query.version VERSAO DO APP
 * @returns 200 - RESPONDE APENAS COM O STATUS SE A API FOR COMPATIVEL
 * @returns 426 - RESPONDE APENAS COM O STATUS SE A API NAO FOR COMPATIVEL
*/
export function ping(req, res) {
	const { version } = req.query;

	setTimeout(() => res.sendStatus((versions.includes(version)) ? 200 : 426), 2000);
}

import { units } from "./units.js";
/**
 * @author VAMPETA
 * @brief ROTA PARA CONSULTAR OS LOCAIS DE TREINO DISPONIVEIS
 * @method GET
 * @route /training-locations
 * @returns {array} 200 - RESPONDE COM ARRAY DE UNIDADES DISPONIVEIS
*/
export function trainingLocations(req, res) {
	setTimeout(() => res.status(200).json(units), 1000);
}

import { barraDaTijuca, andarai, madureira, bonsucesso, tijuca, guaratiba, lagoa, taquara } from "./times.js";
/**
 * @author VAMPETA
 * @brief ROTA PARA CONSULTAR HORARIOS DISPONIVEIS
 * @method GET
 * @route /timetable-units
 * @param {string[]} query.units ARRAY COM UNIDADES
 * @returns {object[]} 200 - RESPONDE COM ARRAY DE HORARIOS DISPONIVEIS PARA CADA UNIDADE SELECIONADA
*/
export function timetableUnits(req, res) {
	const units = req.query["units[]"];
	const data = [];

	if (units.includes("Barra da Tijuca")) data.push(barraDaTijuca);
	if (units.includes("Andaraí")) data.push(andarai);
	if (units.includes("Madureira")) data.push(madureira);
	if (units.includes("Bonsucesso")) data.push(bonsucesso);
	if (units.includes("Tijuca")) data.push(tijuca);
	if (units.includes("Guaratiba")) data.push(guaratiba);
	if (units.includes("Lagoa")) data.push(lagoa);
	if (units.includes("Taquara")) data.push(taquara);

	setTimeout(() => res.status(200).json(data), 1000);
}

/**
 * @author VAMPETA
 * @brief ROTA DE REGISTRO
 * @method POST
 * @route /register
 * @param {string} body.email EMAIL 
 * @param {string} body.password SENHA
 * @param {string} body.cpf CPF
 * @param {string} body.date DATA DE NASCIMENTO
 * @param {string} body.phone NUMERO DE TELEFONE CELULAR
 * @param {object} body.times UNIDADES E HORARIOS ESCOLHIDOS PARA TREINO
 * @returns 200 - RESPONDE APENAS COM STATUS PARA INFORMAR QUE FOI FEITO O CADASTRO (O TOKEN E ENVIADO NO MOMENTO DO LOGIN)
*/
export function register(req, res) {
	const { email, password, cpf, date, phone, times } = req.body;

	setTimeout(() => res.sendStatus(200), 2000)
}

import { credentials } from "./credentials.js";
/**
 * @author VAMPETA
 * @brief ROTA DE LOGIN
 * @method POST
 * @route /login
 * @param {string} body.login login
 * @param {string} body.password senha
 * @returns {object} 200 - ENVIA O TOKEN DO USUARIO QUE ELE VAI USAR EM REQUISICOES FUTURAS E MAIS OS DADOS DO CLIENTE
 * @returns 401 - MENSAGEM DE ERRO AO TENTAR LOGAR COM LOGIN OU SENHA ERRADA
*/
export function loginCredentials(req, res) {
	const { login, password } = req.body;

	if (login !== "Vampeta" || password !== "123") return (res.sendStatus(401));
	setTimeout(() => res.status(200).send(credentials(req)), 1000);
}

/**
 * @author VAMPETA
 * @brief ROTA QUE LOGA USAND O TOKEN
 * @method POST
 * @route /login-token
 * @param {string} body.token TOKEN DO USUARIO
 * @returns {object} 200 - RESPONDE APENAS COM STATUS PARA INFORMAR QUE O TOKEN AINDA E VALIDO
 * @returns 401 - RESPONDE APENAS COM STATUS PARA INFORMAR QUE O TOKEN NAO E MAIS VALIDO
*/
export function loginToken(req, res) {
	const { token } = req.body;

	if (token !== "12345") return (res.sendStatus(401));
	setTimeout(() => res.sendStatus(200), 1000);
}

/**
 * @author VAMPETA
 * @brief ENVIA UMA IMAGEM DE ACORDO COM O PARAMETRO (FEITA INICIALMENTE PARA FOTO DE PERFIL)
 * @method GET
 * @route /img
 * @param {string} headers.authorization TOKEN DO USUARIO
 * @param {string} param.img NOME DA IMAGEM
 * @returns {file} 200 - RESPONDE ENVIANDO UMA IMAGEM REQUERIDA
 * @returns 401 - RESPONDE APENAS COM STATUS PARA INFORMAR QUE O TOKEN NAO E MAIS VALIDO
 * @returns 404 - RESPONDE APENAS COM STATUS CASO O PARAMETRO "img" NAO SEJA UM NOME DE IMAGEM DISPONIVEL
*/
export function img(req, res) {
	const token = req.headers["authorization"].split(" ")[1];
	const { img } = req.params;

	if (token !== "12345") return (res.sendStatus(401));
	if (img !== "user.jpg") return (res.sendStatus(404));
	res.sendFile(path.join(path.dirname(fileURLToPath(import.meta.url)), "../../img/satoru.jpg"));
}