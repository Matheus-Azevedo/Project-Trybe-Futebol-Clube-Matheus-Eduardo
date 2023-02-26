# Trybe Futebol Clube
### Autor: Matheus Eduardo de Sousa Azevedo

Este projeto foi desenvolvido por mim e faz parte do acervo de atividades executadas na escola de programação Trybe. A formação ao longo de 1 ano em Desenvolvimento Web desta instituição  conta com mais de 1.500 horas de aulas e aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais. Tudo voltado totalmente para o mercado de trabalho com intuito de entregar um profissional adequado para a realidade atual. 

# Sobre o projeto

O Trybe Futebol Clube (TFC) é um site informativo sobre partidas e classificações de futebol. Neste projeto, foi desenvolvido um back-end dockerizado utilizando modelagem de dados através do Sequelize e implementando regras de negócio para popular adequadamente a tabela disponível no front-end.

## Funcionalidades

-   Cadastro e autenticação de usuários
-   Criação, atualização e exclusão de times e jogadores
-   Criação de partidas e atualização dos resultados
-   Listagem de times, jogadores e partidas

## Requisitos

-   Node.js v14.15.1 ou superior
-   NPM ou Yarn
-   Docker
-   Docker Compose

## Instalação

1.  Clone o repositório

`git clone git@github.com:Matheus-Azevedo/Project-Trybe-Futebol-Clube-Matheus-Eduardo.git` 

2.  Instale as dependências

`cd tfc/backend
npm install` 

3.  Crie o arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

`JWT_SECRET=jwt_secret` 

`APP_PORT=3001` 

`DB_USER=seu_user` 

`DB_PASS=sua_senha` 

`DB_HOST=localhost` 

`DB_PORT=3002` 

4.  Execute o docker-compose para criar o banco de dados

`docker-compose up -d` 

5.  Execute as migrações para criar as tabelas no banco de dados

6.  Execute os testes

`npm run test` 

7.  Inicie o servidor

`npm run start` 

## API Endpoints

-   `/login` - Autenticar usuário
-   `/teams` - Listar times e criar novo time
-   `/teams/:id` - Atualizar e excluir time
-   `/matches` - Listar partidas e criar nova partida
-   `/matches/:id` - Atualizar e excluir partida
-   `/leaderboard` - Tabela com o resultado de todos os times
-   `/leaderboard/away` - Tabela com o placar dos times visitantes
-   `/leaderboard/home` - Tabela com o placar dos times da casa

## Contribuição

Contribuições são sempre bem-vindas! Sinta-se livre para abrir uma issue ou um pull request.
