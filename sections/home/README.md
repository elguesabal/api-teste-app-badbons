## Documentação da seção Home

Este documento descreve exclusivamente as requisições relacionadas às funcionalidades da aba home realizado pelo aplicativo.



### Salva a informação se o aluno irá ao treino.
```https
  POST /presence-student
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

---

### Respostas
| Código | Descrição                                                          |
|--------|--------------------------------------------------------------------|
| `200`  | Confirmação de presença feita com sucesso.                         |
| `401`  | Token expirado ou inválido.                                        |

---

### Exemplo de Requisição
```https
POST /presence-student
Authorization: Bearer 12345
Content-Type: application/json

{
    presence: true
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
| `401`  | Token expirado ou inválido.                                        |

---

### Exemplo de Requisição
```https
GET /presence-list?date=20/09/2025
Authorization: Bearer 12345
```

### Exemplo de Resposta (status 200)
```https
HTTP/1.1 200 OK
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
HTTP/1.1 200 OK
Content-Type: application/json

{
	treinosTotais: 10,
	treinosFeitos: 5
}
```