## Projeto Blogs API

### Sumário

1. [Objetivo do projeto](#objetivo-do-projeto)
2. [Tecnologia Utilizadas](#tecnologia-utilizadas)
3. [Tabelas Criadas](#tabelas-criadas)
4. [Instruções para baixar e rodar o projeto](#instruções-para-baixar-e-rodar-o-projeto)
5. [Comandos do Sequelize](#comandos-do-sequelize)

---

### Objetivo do projeto

Desenvolver uma API de posts de blog com funções CRUD(Create, Read, Update, Delete). Utilizando o ORM (mapeamento objeto-relacional) com sequelize e criando endpoints conectados ao banco de dados, segundo os princípios do REST.

---

### Tecnologia Utilizadas

- `Node.js`
- `Express.js`
- `Sequelize`

---

### Tabelas Criadas

- `Users`
Tabela para os usuários que desejam se cadastrar na aplicação.
- `Categories`
Tabela de Categorias para os Posts.
- `BlogPosts`
tabela de Posts, guardando todas as informações dos posts realizados.
- `PostsCategories`
Tabela relacionando posts com as categorias.

---

### Instruções para baixar e rodar o projeto

1. Clone o repositório
`git clone git@github.com:gabrielanebbia/project-blogs-api.git`

2. Entre na pasta do repositório clonado
`cd project-blogs-api`

3. Instale as dependências
`npm install`

4. Rodar o projeto
`npm start`

---

### Comandos do Sequelize

- Dropa o banco
`npx sequelize-cli db:drop`
- Cria o banco e gera as tabelas
`npx sequelize-cli db:create && npx sequelize-cli db:migrate`
- Insere dados na tabela
`npx sequelize-cli db:seed:all`
