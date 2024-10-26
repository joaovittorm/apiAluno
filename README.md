
# API RESTful de Alunos

Este projeto é uma API RESTful criada com [Express.js](https://expressjs.com/), que permite gerenciar uma entidade de alunos. Ele inclui operações CRUD (Create, Read, Update, Delete) para a entidade `Aluno`, utilizando armazenamento em memória para simular um banco de dados. O objetivo é consolidar conceitos de HTTP, métodos REST e desenvolvimento de APIs.

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) (geralmente incluído com o Node.js)

## 🚀 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/api-aluno.git
   cd api-aluno
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## 📂 Estrutura do Projeto

```bash
api-aluno
├── app.js                  # Arquivo principal do aplicativo
└── routes
    └── alunoRoutes.js      # Definições das rotas para a entidade Aluno
```

## 💻 Executando o Projeto

Para iniciar o servidor localmente, use o comando:

```bash
node app.js
```

O servidor estará em execução em [http://localhost:3000](http://localhost:3000).

## 📖 Endpoints da API

### Criar um novo aluno

- **Rota**: `POST /alunos`
- **Descrição**: Cria um novo aluno.
- **Corpo da Requisição**:
  ```json
  {
    "nome": "Nome do Aluno",
    "email": "email@dominio.com",
    "nome_curso": "Nome do Curso"
  }
  ```
- **Resposta de Sucesso**:
  - **Status**: `201 Created`
  - **Exemplo**:
    ```json
    {
      "id": 1,
      "nome": "Nome do Aluno",
      "email": "email@dominio.com",
      "nome_curso": "Nome do Curso"
    }
    ```

### Listar todos os alunos

- **Rota**: `GET /alunos`
- **Descrição**: Retorna uma lista com todos os alunos.
- **Resposta de Sucesso**:
  - **Status**: `200 OK`
  - **Exemplo**:
    ```json
    [
      {
        "id": 1,
        "nome": "Nome do Aluno",
        "email": "email@dominio.com",
        "nome_curso": "Nome do Curso"
      }
    ]
    ```

### Buscar um aluno específico

- **Rota**: `GET /alunos/:id`
- **Descrição**: Retorna os dados de um aluno específico pelo ID.
- **Parâmetro**: `id` do aluno
- **Resposta de Sucesso**:
  - **Status**: `200 OK`
- **Resposta de Erro**:
  - **Status**: `404 Not Found`
  - **Exemplo**:
    ```json
    { "message": "Aluno não encontrado" }
    ```

### Atualizar um aluno

- **Rota**: `PUT /alunos/:id`
- **Descrição**: Atualiza as informações de um aluno pelo ID.
- **Parâmetro**: `id` do aluno
- **Corpo da Requisição**:
  ```json
  {
    "nome": "Novo Nome do Aluno",
    "email": "novoemail@dominio.com",
    "nome_curso": "Novo Nome do Curso"
  }
  ```
- **Resposta de Sucesso**:
  - **Status**: `200 OK`
  - **Exemplo**:
    ```json
    {
      "id": 1,
      "nome": "Novo Nome do Aluno",
      "email": "novoemail@dominio.com",
      "nome_curso": "Novo Nome do Curso"
    }
    ```
- **Resposta de Erro**:
  - **Status**: `404 Not Found`
  - **Exemplo**:
    ```json
    { "message": "Aluno não encontrado" }
    ```

### Excluir um aluno

- **Rota**: `DELETE /alunos/:id`
- **Descrição**: Exclui um aluno específico pelo ID.
- **Parâmetro**: `id` do aluno
- **Resposta de Sucesso**:
  - **Status**: `200 OK`
  - **Exemplo**:
    ```json
    { "message": "Aluno excluído com sucesso" }
    ```
- **Resposta de Erro**:
  - **Status**: `404 Not Found`
  - **Exemplo**:
    ```json
    { "message": "Aluno não encontrado" }
    ```

## 🧪 Testando a API

A API pode ser testada usando ferramentas como [Postman](https://www.postman.com/) ou [curl](https://curl.se/). Para testar, basta enviar requisições HTTP para os endpoints detalhados acima.

Exemplo de teste com `curl`:
```bash
curl -X POST http://localhost:3000/alunos -H "Content-Type: application/json" -d '{"nome":"Maria Silva","email":"maria@exemplo.com","nome_curso":"Matemática"}'
```
