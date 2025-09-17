## Documentação de login/cadastro

Este documento descreve exclusivamente as requisições relacionadas às funcionalidades de login, cadastro de usuários e ao ping inicial realizado pelo aplicativo.



### Verifica se o servidor está acessível e se a versão do aplicativo é compatível com a API.
```https
  GET /ping
```

---

### Parâmetros de Query
| Parâmetro  | Tipo     | Obrigatório | Descrição                              |
|------------|----------|-------------|----------------------------------------|
| `version`  | `string` | Sim         | Versão atual do aplicativo.            |

---

### Respostas
| Código | Descrição                                                           |
|--------|---------------------------------------------------------------------|
| `200`  | O servidor está acessível e a versão do app é compatível com a API. |
| `426`  | O servidor está acessível, mas a versão do app é incompatível.      |

---

### Exemplo de Requisição
```https
GET /ping?version=1.0.1
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



### Informa quais sao os bairros disponiveis para treinar.
```https
  GET /training-locations
```

---

### Respostas
| Código | Descrição                                                           |
|--------|---------------------------------------------------------------------|
| `200`  | A API retorna um array contendo os bairros disponíveis para treino. |

---

### Exemplo de Requisição
```https
GET /training-locations
```

### Exemplo de Resposta (status 200)
```https
HTTP/1.1 200 OK
Content-Type: application/json

[
    "Barra da Tijuca",
    "Andaraí",
    "Madureira",
    "Bonsucesso",
    "Tijuca",
    "Guaratiba",
    "Lagoa",
    "Taquara"
]
```



---
---
---
---
---



### Rota para consultar os horarios disponiveis em cada unidade.
```https
  GET /timetable-units
```

---

### Parâmetros de Query
| Parâmetro  | Tipo     | Obrigatório | Descrição                                  |
|------------|----------|-------------|--------------------------------------------|
| `units[]`  | `array`  | Sim         | Array de unidades requerida.               |

---

### Respostas
| Código | Descrição                                                               |
|--------|-------------------------------------------------------------------------|
| `200`  | Retorna um array de objetos com os informações das unidades requeridas. |

---

### Exemplo de Requisição
```https
GET /timetable-units?units[]=Bonsucesso&units[]=Madureira
```

### Exemplo de Resposta (status 200)
```https
HTTP/1.1 200 OK
Content-Type: application/json

[
	{
		unit: "Madureira",
		address: "Rua Opnião Liberal, 315",
		classes: [
			{
				day: "Sabado",
				start: "8:00",
				end: "9:30"
			},
			{
				day: "Quinta",
				start: "9:30",
				end: "11:00"
			},
			{
				day: "Quinta",
				start: "11:00",
				end: "13:30"
			}
		]
	},
	{
		unit: "Bonsucesso",
		address: "Rua Opnião Liberal, 315",
		classes: [
			{
				day: "Quarta",
				start: "8:00",
				end: "9:30"
			},
			{
				day: "Quarta",
				start: "9:30",
				end: "11:00"
			},
			{
				day: "Quarta",
				start: "11:00",
				end: "13:30"
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



### Rota para finalizar o registro.
```https
  POST /register
```

---

### Parâmetros do Body
| Parâmetro  | Tipo     | Obrigatório | Descrição                                 |
|------------|----------|-------------|-------------------------------------------|
| `email`    | `string` | Sim         | E-mail.                                   |
| `password` | `string` | Sim         | Senha de acesso.                          |
| `cpf`      | `string` | Sim         | CPF.                                      |
| `date`     | `string` | Sim         | Data de nascimento.                       |
| `phone`    | `string` | Sim         | Número de telefone celular.               |
| `times`    | `object` | Sim         | Objeto com unidades e horários de treino. |

---

### Respostas
| Código | Descrição                                                              |
|--------|------------------------------------------------------------------------|
| `200`  | O cadastro foi feito com sucesso.                                      |

---

### Exemplo de Requisição
```https
POST /register
Content-Type: application/json

{
    email: "email@dominio.com",
    password: "123",
    cpf: "1234567",
    date: "01/01/2000",
    phone: "21 999999999",
    times: {
        Madureira: [
            { day: "Quinta", start: "9:30", end: "11:00" }
        ],
        Bonsucesso: [
            { day: "Quarta", start: "8:00", end: "9:30" }
        ]
    }
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



### Rota de login.
```https
  POST /login
```

---

### Parâmetros do Body
| Parâmetro  | Tipo     | Obrigatório | Descrição                             |
|------------|----------|-------------|---------------------------------------|
| `login`    | `string` | Sim         | Login do usuário.                     |
| `password` | `string` | Sim         | Senha de acesso.                      |

---

### Respostas
| Código | Descrição                                                          |
|--------|--------------------------------------------------------------------|
| `200`  | Login bem-sucedido.                                                |
| `401`  | Senha ou login inválidos.                                          |

---

### Exemplo de Requisição
```https
POST /login
Content-Type: application/json

{
    login: "login",
    password: "123"
}
```

### Exemplo de Resposta (status 200)
```https
HTTP/1.1 200 OK

{
    token: "12345",
    photo: "https://api-teste-app-badbons.vercel.app/img/user.jpg",
    name: "Satoru Gojo",
    email: "soladordesukuna@ryomen.com",
    cpf: "Cancelado",
    date: "07/12/1989",
    phone: "(00) 00000-0000",
    units: ["Shibuya", "Shinjuku", "Fukutoshin"],
    times: {
        Madureira: [
            { day: "Quinta", start: "18:00", end: "19:30" },
            { day: "Sabado", start: "9:00", end: "10:30" }
        ],
        Bonsucesso: [
            { day: "Quarta", start: "18:00", end: "20:00" }
        ]
    }
}
```



---
---
---
---
---



### Rota de login via token.
```https
  POST /login-token
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
| `200`  | Login bem-sucedido.                                                |
| `401`  | Token expirado ou inválido.                                        |

---

### Exemplo de Requisição
```https
POST /login-token
Authorization: Bearer 12345
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



### Rota para baixar a imagem de perfil do usuário.
```https
  GET /img/:img
```

---

### Cabeçalhos (Headers)
| Parâmetro       | Tipo     | Obrigatório | Descrição                        |
|-----------------|----------|-------------|----------------------------------|
| `Authorization` | `string` | Sim         | Token do usuário.                |

---

### Parâmetros de Rota (Path Params)
| Parâmetro  | Tipo     | Obrigatório | Descrição                             |
|------------|----------|-------------|---------------------------------------|
| `img`      | `string` | Sim         | Imagem que o usuário quer baixar.     |

---

### Respostas
| Código | Descrição                                                          |
|--------|--------------------------------------------------------------------|
| `200`  | Imagem encontrada.                                                 |
| `401`  | Token expirado ou inválido.                                        |
| `404`  | Imagem não encontrada.                                             |

---

### Exemplo de Requisição
```https
GET /img/user.jpg
Authorization: Bearer 12345
```

### Exemplo de Resposta (status 200)
```https
HTTP/1.1 200 OK
Content-Type: image/jpg

(binary image data)
```