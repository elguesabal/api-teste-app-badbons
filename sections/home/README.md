## Documentação da seção Home

Este documento descreve exclusivamente as requisições relacionadas às funcionalidades da aba home realizado pelo aplicativo.



### Salva a informação se o aluno irá ao treino.
```https
  PATCH /presence-student
```

---

### Cabeçalhos (Headers)
| Parâmetro       | Tipo     | Obrigatório | Descrição                        |
|-----------------|----------|-------------|----------------------------------|
| `Authorization` | `string` | Sim         | Token do usuário.                |

---

### Parâmetros do Body
| Parâmetro  | Tipo      | Obrigatório | Descrição                            |
|------------|-----------|-------------|--------------------------------------|
| `presence` | `boolean` | Sim         | Confirmação de presença.             |
| `date`     | `string`  | Sim         | Data do treino.                      |

---

### Respostas
| Código | Descrição                                                          |
|--------|--------------------------------------------------------------------|
| `204`  | Confirmação de presença feita com sucesso.                         |
| `400`  | Confirmação de presença inválida.                                  |
| `401`  | Token expirado ou inválido.                                        |
| `409`  | O status de presença é igual ao da requisição.                     |

---

### Exemplo de Requisição
```https
PATCH /presence-student
Authorization: Bearer 12345
Content-Type: application/json

{
    presence: true
}
```

### Exemplo de Resposta (status 200)
```https
HTTP/1.1 204
```



---
---
---
---
---



### Consulta a lista de alunos confirmados para o treino.
```https
  GET /presence-list
```

---

### Cabeçalhos (Headers)
| Parâmetro       | Tipo     | Obrigatório | Descrição                        |
|-----------------|----------|-------------|----------------------------------|
| `Authorization` | `string` | Sim         | Token do usuário.                |

---

### Parâmetros de Query
| Parâmetro     | Tipo     | Obrigatório | Descrição                          |
|---------------|----------|-------------|------------------------------------|
| `date`        | `string` | Sim         | Data a ser consultada.             |

---

### Respostas
| Código | Descrição                                                          |
|--------|--------------------------------------------------------------------|
| `200`  | Retorna um objeto com informaçõs do treino.                        |
| `400`  | Data não enviada, não padrão de data ou contem algum outro erro.   |
| `401`  | Token expirado ou inválido.                                        |
| `404`  | Sem treino na data enviada.                                        |

---

### Exemplo de Requisição
```https
GET /presence-list?date=20/09/2025
Authorization: Bearer 12345
```

### Exemplo de Resposta (status 200)
```https
HTTP/1.1 200
Content-Type: application/json

{
	teacher: "Kuppis Kanno",
	address: "Rua Top Lane t2",
	start: "0:00",
	end: "00:01",
	confirmedPresence: true,
	confirmedStudents: ["Slark", "Axe", "Keeper", "Lion", "Anti Mage", "Zeus", "Sniper", "Pudge", "Juggernaut", "Enigma"]
}
```



---
---
---
---
---



### Consulta a lista de alunos confirmados para o treino.
```https
  GET /user/treinos
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
| `200`  | Retorna um objeto com informaçõs dos exercícios.                   |
| `401`  | Token expirado ou inválido.                                        |

---

### Exemplo de Requisição
```https
GET /user/treinos
Authorization: Bearer 12345
```

### Exemplo de Resposta (status 200)
```https
HTTP/1.1 200
Content-Type: application/json

{
	treinosTotais: 10,
	treinosFeitos: 5
}
```