# 🚀 API Teste BadBons

Este repositório documenta todas as rotas da API BadBons, incluindo exemplos de requisição, resposta, autenticação e detalhes técnicos.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Versão](https://img.shields.io/badge/versão-1.0.0-blue)

---

## 📚 Sumário
- [🔐 Login e Cadastro](#-login-e-cadastro)
- [👤 Perfil](#-perfil)
- [🏠 Home](#-home)

---

## 🔐 Login e Cadastro
| Rota                                          | Descrição                                      |
|-----------------------------------------------|------------------------------------------------|
| [`/ping`](sections/wellcome#ping)             | Verifica se a API está online.                 |
| [`/training-locations`](sections/wellcome#training-locations) | Lista locais de treino.        |
| [`/timetable-units`](sections/wellcome#timetable-units) | Mostra horários de treino.           |
| [`/register`](sections/wellcome#register)     | Cria uma nova conta.                           |
| [`/login`](sections/wellcome#login)           | Login do usuário.                              |
| [`/credentials`](sections/wellcome#credentials) | Credenciais do usuário.                      |
| [`/login-token`](sections/wellcome#login-token) | Login usando token.                          |
| [`/img/:img`](sections/wellcome#img)          | Retorna imagem pelo nome.                      |

---

## 👤 Perfil
| Rota                                          | Descrição                                      |
|-----------------------------------------------|------------------------------------------------|
| [`/upload-photo-profile`](sections/profile#upload-photo-profile) | Upload da foto de perfil.   |
| [`/swap-email`](sections/profile#swap-email)  | Alterar e-mail.                                |
| [`/swap-password`](sections/profile#swap-password) | Alterar senha.                            |
| [`/game-history`](sections/profile#game-history) | Histórico de partidas do usuário.           |
| [`/notifications`](sections/profile#notifications) | Notificações do usuário.                  |
| [`/notification`](sections/profile#notification) | Notificação específica.                     |

---

## 🏠 Home
| Rota                                           | Descrição                                      |
|------------------------------------------------|------------------------------------------------|
| [`/presence-student`](sections/home#presence-student) | Registrar presença do aluno.            |
| [`/presence-list`](sections/home#presence-list) | Consultar lista de alunos confirmados.        |