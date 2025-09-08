const listQua = {
	teacher: "Marcos",
	address: "Rua a Número 1",
	start: "8:10",
	end: "10:10",
	confirmedPresence: false,
	confirmedStudents: ["Natan do Egito", "Alexandre de Oliveira", "Aluno", "Aluno", "Aluno", "Aluno", "Aluno", "Aluno", "Aluno", "Aluno"]
};
const listQui = {
	teacher: "Marcos",
	address: "Rua a Número 1",
	start: "8:10",
	end: "10:10",
	confirmedPresence: true,
	confirmedStudents: ["Jose", "vampeta", "42"]
};
const listSab = {
	teacher: "Kuppis Kanno",
	address: "Rua Top Lane t2",
	start: "0:00",
	end: "00:01",
	confirmedPresence: true,
	confirmedStudents: ["Slark", "Axe", "Keeper", "Lion", "Anti Mage", "Zeus", "Sniper", "Pudge", "Juggernaut", "Enigma"]
};

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
	const authHeader = req.headers["authorization"];
	const token = authHeader.split(" ")[1];
	const { presence } = req.body;

	if (token !== "12345") return (res.sendStatus(401));
	setTimeout(() => res.sendStatus(200), 1000);
}

/**
 * @author VAMPETA
 * @brief ROTA QUE RETORNA A LISTA DE PRESENCA
 * @method POST
 * @route /presence-list
 * @param {string} headers.authorization TOKEN DO USUARIO
 * @param {string} queri.day DIA QUE O USUARIO ESTA CONSULTANDO
 * @returns {object} 200 - REPONDE COM A LISTA DE ALUNOS CONFIRMADOS PARA IR AO TREINO E ALGUMAS OUTRAS INFORMACOES DENTRO DO OBJETO
 * @returns 401 - REPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
*/
export function presenceList(req, res) {
	const authHeader = req.headers["authorization"];
	const token = authHeader.split(" ")[1];
	const day = req.query.day;

	if (token !== "12345") return (res.sendStatus(401));
	if (day === "Qua") res.status(200).json(listQua);
	if (day === "Qui") res.status(200).json(listQui);
	if (day === "Sab") setTimeout(() => res.status(200).json(listSab), 2000);
}