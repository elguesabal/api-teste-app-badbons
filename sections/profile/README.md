## Documentação da seção Perfil

Este documento descreve exclusivamente as requisições relacionadas às funcionalidades de perfil do usuário realizado pelo aplicativo.



### Salva a imagem de perfil do usuário.
```https
  POST /upload-photo-profile
```

---

### Cabeçalhos (Headers)
| Parâmetro       | Tipo     | Obrigatório | Descrição                        |
|-----------------|----------|-------------|----------------------------------|
| `Authorization` | `string` | Sim         | Token do usuário.                |

---

### Parâmetros do Body
| Parâmetro  | Tipo                  | Obrigatório | Descrição                |
|------------|-----------------------|-------------|--------------------------|
| `file`     | `Express.Multer.File` | Sim         | Foto de perfil.          |

---

### Respostas
| Código | Descrição                                                          |
|--------|--------------------------------------------------------------------|
| `200`  | Imagem salva com sucesso.                                          |
| `400`  | Imagem não enviada (neste momento a api trata isso).               |
| `401`  | Token expirado ou inválido.                                        |

---

### Exemplo de Requisição
```https
POST /upload-photo-profile
Authorization: Bearer 12345
Content-Type: multipart/form-data

(binary image data)
```

### Exemplo de Resposta (status 200)
```https
HTTP/1.1 200 OK
```



---
---
---
---
---



### Rota para trocar o e-mail do usuário.
```https
  POST /swap-email
```

---

### Cabeçalhos (Headers)
| Parâmetro       | Tipo     | Obrigatório | Descrição                        |
|-----------------|----------|-------------|----------------------------------|
| `Authorization` | `string` | Sim         | Token do usuário.                |

---

### Parâmetros do Body
| Parâmetro  | Tipo     | Obrigatório | Descrição                             |
|------------|----------|-------------|---------------------------------------|
| `newEmail` | `string` | Sim         | Novo e-mail.                          |
| `password` | `string` | Sim         | Senha do usuário.                     |

---

### Respostas
| Código | Descrição                                                          |
|--------|--------------------------------------------------------------------|
| `200`  | E-mail trocado com sucesso.                                        |
| `401`  | Token expirado ou inválido.                                        |
| `403`  | Token válido mas senha incorreta.                                  |

---

### Exemplo de Requisição
```https
POST /swap-email
Authorization: Bearer 12345
Content-Type: application/json

{
    newEmail: "email@dominio.com",
    password: "123"
}
```

### Exemplo de Resposta (status 200)
```https
HTTP/1.1 200 OK
```



---
---
---
---
---



### Rota para trocar a senha do usuário.
```https
  POST /swap-password
```

---

### Cabeçalhos (Headers)
| Parâmetro       | Tipo     | Obrigatório | Descrição                        |
|-----------------|----------|-------------|----------------------------------|
| `Authorization` | `string` | Sim         | Token do usuário.                |

---

### Parâmetros do Body
| Parâmetro     | Tipo     | Obrigatório | Descrição                          |
|---------------|----------|-------------|------------------------------------|
| `newPassword` | `string` | Sim         | Nova senha.                        |
| `password`    | `string` | Sim         | Senha do usuário.                  |

---

### Respostas
| Código | Descrição                                                          |
|--------|--------------------------------------------------------------------|
| `200`  | Senha trocada com sucesso.                                         |
| `401`  | Token expirado ou inválido.                                        |
| `403`  | Token válido mas senha incorreta.                                  |

---

### Exemplo de Requisição
```https
POST /swap-password
Authorization: Bearer 12345
Content-Type: application/json

{
    newPassword: "12345",
    password: "123"
}
```

### Exemplo de Resposta (status 200)
```https
HTTP/1.1 200 OK
```



---
---
---
---
---



### Rota para buscar o histórico de partidas do usuário.
```https
  GET /game-history
```

---

### Cabeçalhos (Headers)
| Parâmetro       | Tipo     | Obrigatório | Descrição                        |
|-----------------|----------|-------------|----------------------------------|
| `Authorization` | `string` | Sim         | Token do usuário.                |

---

### Respostas
| Código | Descrição                                                          |
|--------|--------------------------------------------------------------------|
| `200`  | A API retorna o hitórico de partidas.                              |
| `401`  | Token expirado ou inválido.                                        |

---

### Exemplo de Requisição
```https
GET /game-history
Authorization: Bearer 12345
```

### Exemplo de Resposta (status 200)
```https
HTTP/1.1 200 OK
Content-Type: application/json

[
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
				player1: { name: "Grupo 1", points: 17 },
				player2: { name: "Grupo 2", points: 5 }
			},
			{
				title: "Quarta de Finais",
				favorite: false,
				player1: { name: "Grupo 1", points: 17 },
				player2: { name: "Grupo 2", points: 5 }
			}
		]
	},
	{
		event: "NDB Games 1/2024",
		games: [
			{
				title: "Final",
				favorite: false,
				player1: { name: "Grupo 1", points: 17 },
				player2: { name: "Grupo 2", points: 5 }
			},
			{
				title: "Semi-Final",
				favorite: false,
				player1: { name: "Grupo 1", points: 17 },
				player2: { name: "Grupo 2", points: 5 }
			}
		]
	}
]
```



---
---
---
---
---



### Rota para buscar as notificações do usuário.
```https
  GET /notifications
```

---

### Cabeçalhos (Headers)
| Parâmetro       | Tipo     | Obrigatório | Descrição                        |
|-----------------|----------|-------------|----------------------------------|
| `Authorization` | `string` | Sim         | Token do usuário.                |

---

### Respostas
| Código | Descrição                                                          |
|--------|--------------------------------------------------------------------|
| `200`  | A API retorna o hitórico de notificaçõs.                           |
| `401`  | Token expirado ou inválido.                                        |

---

### Exemplo de Requisição
```https
GET /notifications
Authorization: Bearer 12345
```

### Exemplo de Resposta (status 200)
```https
HTTP/1.1 200 OK
Content-Type: application/json

[
	{
		viewed: false,
		title: "NDB NEWS",
		time: "10 min",
		message: "Quartas de Final - Vencedor Igor Coelho"
	},
	{
		viewed: false,
		title: "Torneio Amigo",
		time: "15min",
		message: "Final - Vencedor Natan Roldão"
	},
	{
		viewed: false,
		title: "Loja BadBons",
		time: "20min",
		message: "Camisas Novas já estão liberadas, confira!"
	},
	{
		viewed: true,
		title: "Equipe BadBons",
		time: "20min",
		message: "Aula de Reposição para a Tijuca, Dia 10 das 9:00 às 10:00"
	},
	{
		viewed: false,
		title: "NDB NEWS",
		time: "10 min",
		message: "Quartas de Final - Vencedor Igor Coelho"
	},
	{
		viewed: false,
		title: "Torneio Amigo",
		time: "15min",
		message: "Final - Vencedor Natan Roldão"
	},
	{
		viewed: false,
		title: "Loja BadBons",
		time: "20min",
		message: "Camisas Novas já estão liberadas, confira!"
	},
	{
		viewed: true,
		title: "Equipe BadBons",
		time: "20min",
		message: "Aula de Reposição para a Tijuca, Dia 10 das 9:00 às 10:00"
	}
]
```