/**
 * @author VAMPETA
 * @brief ROTA PING
 * @route /ping
 * @returns {object} 200 - REPONDE COM UM ARRAY DE VERSOES DO APP COMPATIVEIS COM A API
*/
export function ping(req, res) {
	res.status(200).send({ versions: ["1.0.0", "1.0.1", "1.0.2"] });
}

/**
 * @author VAMPETA
 * @brief ROTA PARA CONSULTAR OS LOCAIS DE TREINO DISPONIVEIS
 * @route /training-locations
 * @returns {array} 200 - RESPONDE COM ARRAY DE UNIDADES DISPONIVEIS
*/
export function trainingLocations(req, res) {
	res.status(200).json(["Barra da Tijuca", "Andaraí", "Madureira", "Bonsucesso", "Tijuca", "Guaratiba", "Lagoa", "Taquara"]);
}

/**
 * @author VAMPETA
 * @brief ROTA PARA CONSULTAR HORARIOS DISPONIVEIS
 * @route /timetable-units
 * @returns {object} 200 - RESPONDE COM ARRAY DE HORARIOS DISPONIVEIS PARA CADA UNIDADE SELECIONADA
*/
export function timetableUnits(req, res) {
	const units = req.query["units[]"];
	const data = [];

	if (units.includes("Barra da Tijuca")) data.push({ unit: "Barra da Tijuca", address: "Rua Opnião Liberal, 315", classes: [{ day: "Segunda", start: "8:00", end: "9:30" }, { day: "Terça", start: "9:30", end: "11:00" }, { day: "Sabado", start: "11:00", end: "13:30" }, { day: "Segunda", start: "8:00", end: "9:30" }, { day: "Terça", start: "9:30", end: "11:00" }, { day: "Sabado", start: "11:00", end: "13:30" }] });
	if (units.includes("Andaraí")) data.push({ unit: "Andaraí", address: "Rua Opnião Liberal, 315", classes: [{ day: "Sabado", start: "8:00", end: "9:30" }, { day: "Quinta", start: "9:30", end: "11:00" }, { day: "Quinta", start: "11:00", end: "13:30" }] });
	if (units.includes("Madureira")) data.push({ unit: "Madureira", address: "Rua Opnião Liberal, 315", classes: [{ day: "Sabado", start: "8:00", end: "9:30" }, { day: "Quinta", start: "9:30", end: "11:00" }, { day: "Quinta", start: "11:00", end: "13:30" }] });
	if (units.includes("Bonsucesso")) data.push({ unit: "Bonsucesso", address: "Rua Opnião Liberal, 315", classes: [{ day: "Quarta", start: "8:00", end: "9:30" }, { day: "Quarta", start: "9:30", end: "11:00" }, { day: "Quarta", start: "11:00", end: "13:30" }] });
	if (units.includes("Tijuca")) data.push({ unit: "Tijuca", address: "Rua Opnião Liberal, 315", classes: [{ day: "Segunda", start: "8:00", end: "9:30" }, { day: "Terça", start: "9:30", end: "11:00" }, { day: "Sabado", start: "11:00", end: "13:30" }, { day: "Segunda", start: "8:00", end: "9:30" }, { day: "Terça", start: "9:30", end: "11:00" }, { day: "Sabado", start: "11:00", end: "13:30" }] });
	if (units.includes("Guaratiba")) data.push({ unit: "Guaratiba", address: "Rua Opnião Liberal, 315", classes: [{ day: "Quarta", start: "8:00", end: "9:30" }, { day: "Quarta", start: "9:30", end: "11:00" }, { day: "Quarta", start: "11:00", end: "13:30" }] });
	if (units.includes("Lagoa")) data.push({ unit: "Lagoa", address: "Rua Opnião Liberal, 315", classes: [{ day: "Sabado", start: "8:00", end: "9:30" }, { day: "Sabado", start: "9:30", end: "11:00" }, { day: "Sabado", start: "11:00", end: "13:30" }] });
	if (units.includes("Taquara")) data.push({ unit: "Taquara", address: "Rua Opnião Liberal, 315", classes: [{ day: "Segunda", start: "8:00", end: "9:30" }, { day: "Terça", start: "9:30", end: "11:00" }, { day: "Sabado", start: "11:00", end: "13:30" }, { day: "Segunda", start: "8:00", end: "9:30" }, { day: "Terça", start: "9:30", end: "11:00" }, { day: "Sabado", start: "11:00", end: "13:30" }] });

	res.status(200).json(data);
}

/**
 * @author VAMPETA
 * @brief ROTA DE REGISTRO
 * @route /register
 * @returns {object} 200 - RESPONDE APENAS COM STATUS 200 PARA INFORMAR QUE FOI FEITO O CADASTRO (O TOKEN E ENVIADO NO MOMENTO DO LOGIN)
*/
export function register(req, res) {
	res.sendStatus(200);
}

/**
 * @author VAMPETA
 * @brief ROTA DE LOGIN
 * @route /login
 * @returns {object} 200 - ENVIA O TOKEN DO USUARIO QUE ELE VAI USAR EM REQUISICOES FUTURAS
 * @returns {object} 401 - MENSAGEM DE ERRO AO TENTAR LOGAR COM LOGIN OU SENHA ERRADA
*/
export function loginCredentials(req, res) {
	const { login, password } = req.body;

	if (login === "Vampeta" && password === "123") {
		res.status(200).send({
			token: "12345",
			photo: "https://ovicio.com.br/wp-content/uploads/2023/09/20230921-jujutsu-kaisen-gojo-555x555.jpg",
			name: "Satoru Gojo",
			email: "soladordesukuna@ryomen.com",
			cpf: "Cancelado",
			date: "07/12/1989",
			phone: "(00) 00000-0000",
			// units: [""],
			// times: [""]
		});
	} else {
		res.status(401).send({ message: "Credenciais inválidas!" });
	}
}

/**
 * @author VAMPETA
 * @brief ROTA QUE LOGA USAND O TOKEN
 * @route /login-token
 * @returns {object} 200 - RESPONDE APENAS COM STATUS 200 PARA INFORMAR QUE O TOKEN AINDA E VALIDO
 * @returns {object} 401 - RESPONDE APENAS COM STATUS 200 PARA INFORMAR QUE O TOKEN NAO E MAIS VALIDO
 * @warning NO FUTURO ESSA ROTA DEVE RETORNAR INFORMACOES DO USUARIO (OU NAO VAMOS VER NO DESENVOLVER DO APP)
*/
export function loginToken(req, res) {
	const { token } = req.body;

	if (token === "12345") {
		res.sendStatus(200);
	} else {
		res.sendStatus(401);
	}
}