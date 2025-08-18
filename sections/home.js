const listQua = {
	teacher: "Marcos",
	address: "Rua a Número 1",
	start: "8:10",
	end: "10:10",
	confirmedPresence: true,
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
 * @brief ROTA QUE RETORNA OS DADOS DO CLIENTE
 * @route /presence-list
 * @returns {object} 200 - REPONDE COM A LISTA DE ALUNOS CONFIRMADOS PARA IR AO TREINO E ALGUMAS OUTRAS INFORMACOES DENTRO DO OBJETO
 * @returns 401 - REPONDE APENAS COM O STATUS SE O TOKEN FOR INVALIDO
*/
export function presenceList(req, res) {
	const authHeader = req.headers["authorization"];
	const token = authHeader.split(" ")[1];
	const day = req.query.day;

	if (token === "12345") {
		if (day === "Qua") {
			res.status(200).json(listQua);
		} else if (day === "Qui") {
			res.status(200).json(listQui);
		} else if (day === "Sab") {
			res.status(200).json(listSab);
		}
	} else {
		res.sendStatus(401);
	}
}