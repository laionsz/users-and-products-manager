# Gerenciador de Usuários e Produtos - API NestJS

Esta é uma API RESTful desenvolvida com o framework [NestJS](https://nestjs.com/) e escrita em TypeScript. O objetivo deste projeto é aplicar os conhecimentos adquiridos no curso de criação de APIs da [Alura](https://www.alura.com.br/).

## 🗂️ Índice
- [Funcionalidades](#funcionalidades)
- [Rotas da API](#rotas-da-api)
- [Como Usar](#como-usar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Melhorias Planejadas](#melhorias-planejadas)

## ✨ Funcionalidades
- CRUD de usuários e produtos.
- Validação de dados utilizando a biblioteca `class-validator`.
- Controle de unicidade para emails no cadastro de usuários.
- IDs gerados automaticamente para usuários e produtos.
- Verificação da existência de recursos pelo ID informado.

## 📚 Rotas da API
### Usuários
- **POST /usuarios**: Cria um novo usuário.
  - Exemplo de corpo da requisição:
    ```json
    {
      "nome": "João Silva",
      "email": "joao.silva@email.com",
      "senha": "123456"
    }
    ```
- **GET /usuarios/:id**: Obtém os detalhes de um usuário.
- **PUT /usuarios/:id**: Atualiza as informações de um usuário existente.
- **DELETE /usuarios/:id**: Remove um usuário pelo ID.

### Produtos
- **POST /produtos**: Cria um novo produto.
  - Exemplo de corpo da requisição:
    ```json
    {
      "nome": "Cadeira Gamer",
      "categoria": "Móveis",
      "quantidade": 10,
      "preco": 1500
    }
    ```
- **GET /produtos/:id**: Obtém os detalhes de um produto.
- **PUT /produtos/:id**: Atualiza as informações de um produto existente.
- **DELETE /produtos/:id**: Remove um produto pelo ID.

## 😊 Considerações Finais
Este é meu primeiro projeto de API, criado com o objetivo de consolidar os conhecimentos adquiridos. Apesar de simples, é um ponto de partida para projetos mais avançados no futuro. Posteriormente, pretendo adicionar um banco de dados e criptografia de senha.

## 🚀 Como Usar
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/users-and-products-manager.git
