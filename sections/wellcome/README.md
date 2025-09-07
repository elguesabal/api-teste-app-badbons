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
| Código | Descrição                                                                 |
|--------|---------------------------------------------------------------------------|
| `200`  | O servidor está acessível e a versão do app é **compatível** com a API.   |
| `426`  | O servidor está acessível, mas a versão do app é **incompatível**.        |

---

### Exemplo de Requisição
```https
GET /ping?version=1.0.1
```

### Exemplo de Resposta (200 OK)
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
| Código | Descrição                                                                 |
|--------|---------------------------------------------------------------------------|
| `200`  | A API retorna um array contendo os bairros disponíveis para treino.       |

---

### Exemplo de Requisição
```https
GET /training-locations
```

### Exemplo de Resposta (200 OK)
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