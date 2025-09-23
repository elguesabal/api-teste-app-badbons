## Documentação da seção Perfil

Este documento descreve exclusivamente as requisições relacionadas às funcionalidades de perfil do usuário realizado pelo aplicativo.



### Salva a imagem de perfil do usuário.
```https
  PATCH /upload-photo-profile
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
PATCH /upload-photo-profile
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

### Parâmetros de Query
| Parâmetro  | Tipo     | Obrigatório | Descrição                             |
|------------|----------|-------------|---------------------------------------|
| `page`     | `string` | Sim         | Número do grupo de partidas.          |

---

### Respostas
| Código | Descrição                                                          |
|--------|--------------------------------------------------------------------|
| `200`  | A API retorna o hitórico de partidas.                              |
| `401`  | Token expirado ou inválido.                                        |

---

### Exemplo de Requisição
```https
GET /game-history?page=1
Authorization: Bearer 12345
```

### Exemplo de Resposta (status 200)
```https
HTTP/1.1 200 OK
Content-Type: application/json

{
	pagination: {
		nextPage: true,
		totalPages: 2
	},
	data: [
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
}
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

### Parâmetros de Query
| Parâmetro  | Tipo     | Obrigatório | Descrição                              |
|------------|----------|-------------|----------------------------------------|
| `page`     | `string` | Sim         | Número do grupo de notificações.       |

---

### Respostas
| Código | Descrição                                                          |
|--------|--------------------------------------------------------------------|
| `200`  | A API retorna o hitórico de notificaçõs.                           |
| `401`  | Token expirado ou inválido.                                        |

---

### Exemplo de Requisição
```https
GET /notifications?page=1
Authorization: Bearer 12345
```

### Exemplo de Resposta (status 200)
```https
HTTP/1.1 200 OK
Content-Type: application/json

{
	pagination: {
		nextPage: true,
		totalPages: 2
	},
	data: [
		{
			id: 1,
			viewed: false,
			title: "NDB NEWS",
			time: "10 min",
			message: "Quartas de Final - Vencedor Igor Coelho"
		},
		{
			id: 2,
			viewed: false,
			title: "Torneio Amigo",
			time: "15min",
			message: "Final - Vencedor Natan Roldão"
		},
		{
			id: 3,
			viewed: false,
			title: "Loja BadBons",
			time: "20min",
			message: "Camisas Novas já estão liberadas, confira!"
		},
		{
			id: 4,
			viewed: true,
			title: "Equipe BadBons",
			time: "20min",
			message: "Aula de Reposição para a Tijuca, Dia 10 das 9:00 às 10:00"
		},
		{
			id: 5,
			viewed: false,
			title: "NDB NEWS",
			time: "10 min",
			message: "Quartas de Final - Vencedor Igor Coelho"
		},
		{
			id: 6,
			viewed: false,
			title: "Torneio Amigo",
			time: "15min",
			message: "Final - Vencedor Natan Roldão"
		},
		{
			id: 7,
			viewed: false,
			title: "Loja BadBons",
			time: "20min",
			message: "Camisas Novas já estão liberadas, confira!"
		},
		{
			id: 8,
			viewed: true,
			title: "Equipe BadBons",
			time: "20min",
			message: "Aula de Reposição para a Tijuca, Dia 10 das 9:00 às 10:00"
		},
		{
			id: 9,
			viewed: false,
			title: "NDB NEWS",
			time: "10 min",
			message: "Quartas de Final - Vencedor Igor Coelho"
		},
		{
			id: 10,
			viewed: false,
			title: "Torneio Amigo",
			time: "15min",
			message: "Final - Vencedor Natan Roldão"
		},
		{
			id: 11,
			viewed: false,
			title: "Loja BadBons",
			time: "20min",
			message: "Camisas Novas já estão liberadas, confira!"
		},
		{
			id: 12,
			viewed: true,
			title: "Equipe BadBons",
			time: "20min",
			message: "Aula de Reposição para a Tijuca, Dia 10 das 9:00 às 10:00"
		},
		{
			id: 13,
			viewed: false,
			title: "NDB NEWS",
			time: "10 min",
			message: "Quartas de Final - Vencedor Igor Coelho"
		},
		{
			id: 14,
			viewed: false,
			title: "Torneio Amigo",
			time: "15min",
			message: "Final - Vencedor Natan Roldão"
		},
		{
			id: 15,
			viewed: false,
			title: "Loja BadBons",
			time: "20min",
			message: "Camisas Novas já estão liberadas, confira!"
		}
	]
}
```



---
---
---
---
---



### Rota para buscar uma notificações específica.
```https
  GET /notification
```

---

### Cabeçalhos (Headers)
| Parâmetro       | Tipo     | Obrigatório | Descrição                        |
|-----------------|----------|-------------|----------------------------------|
| `Authorization` | `string` | Sim         | Token do usuário.                |

---

### Parâmetros de Query
| Parâmetro  | Tipo     | Obrigatório | Descrição                              |
|------------|----------|-------------|----------------------------------------|
| `id`       | `string` | Sim         | Id da notificação.                     |

---

### Respostas
| Código | Descrição                                                          |
|--------|--------------------------------------------------------------------|
| `200`  | A API retorna o hitórico de notificaçõs.                           |
| `401`  | Token expirado ou inválido.                                        |
| `404`  | Notificação não encontrada.                                        |

---

### Exemplo de Requisição
```https
GET /notifications?id=3
Authorization: Bearer 12345
```

### Exemplo de Resposta (status 200)
```https
HTTP/1.1 200 OK
Content-Type: application/json

{
	title: "What is Lorem Ipsum? 3",
	text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
```