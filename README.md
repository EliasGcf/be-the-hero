<h1 align="center">
  <img src=".github/logo.svg" alt="Be The Hero">
</h1>

<h3 align="center">
  Be The Hero - Connect your NGO with people who want to help you.
</h3>
<!-- E02041 -->
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EliasGcf/be-the-hero?color=%23E02041">

  <a href="https://www.linkedin.com/in/eliasgcf/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-elias%20gabriel-%23E02041">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EliasGcf/be-the-hero?color=%23E02041">
  
  <a href="https://github.com/EliasGcf/be-the-hero/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EliasGcf/be-the-hero?color=%23E02041">
  </a>
  
  <a href="https://github.com/EliasGcf/be-the-hero/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/EliasGcf/be-the-hero?color=%23E02041">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/EliasGcf/be-the-hero?color=%23E02041">
</p>

<p align="center">
  <a href="#%EF%B8%8F-projeto">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=Be%20The%20Hero&uri=https%3A%2F%2Fraw.githubusercontent.com%2FEliasGcf%2Fbe-the-hero%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<img alt="Layout" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585345367/be-the-hero/mockup_uf7cxb.png">

## 🦸‍♀️ About the project

<!-- Com essa aplicação, e por meio do front-end web, as ONGs podem informar sobre seus casos, necessidades e o valor necessário para solucionar o problema. -->
Using the web client, the NGOs can create incidents informing about their needs and the amount to solve the incident.

<!-- A partir dessas informações, e por meio do front-end mobile, pessoas comuns, ou seja, toda a sociedade pode contruibir com um determinado caso e ser o herói de dia para aquela ONG. -->
With this informations and using the mobile client, people can help one or more incidents and be the hero for that NGO.

<!-- É visado por meio da interação entre ONG e comunidade: A ampliação da área de atuação da ONG, o aumento da velocidade e eficácia na resolução dos problemas. -->
The goal of this project is increase the possibility of to help more cases and faster.

<details><summary>Project Layout</summary>
  <img alt="Cadastro" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585335838/be-the-hero/Cadastro_g45xr9.png">
  <img alt="Login" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585335849/be-the-hero/Login_bhx9xu.png">
  <img alt="Cadastro de Caso" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585335831/be-the-hero/Cadastrar_novo_caso_edgbbs.png">
  <img alt="Lista de Casos" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585335843/be-the-hero/Lista_iti7gz.png">
  <img alt="Mobile" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585335852/be-the-hero/mobile_loaoyj.png">
</details>

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Express](https://expressjs.com/pt-br/)
- [Celebrate](https://github.com/arb/celebrate)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [SQLite](https://www.sqlite.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Nodemon](https://nodemon.io/)
- [Sucrase](https://github.com/alangpierce/sucrase)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)
- [React Icons](https://react-icons.netlify.com/#/)
- [UnForm](https://unform.dev/) [💜](https://rocketseat.com.br/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

<!-- ## ![Alt LogoRocketseat](.github/logo-rocketseat.svg) Semana OmniStack

A [Semana OmniStack](https://rocketseat.com.br/week/inscricao/11.0) é um evento 100% online e gratuito, onde a [Rocketseat](https://github.com/rocketseat) junto com seu CTO [Diego Fernandes](https://github.com/diego3g) e mais toda a comunidade, desenvolvem uma aplicação completa, desde o banco de dados, back-end, até o front-end web e mobile, tudo isso utilizando a stack JavaScript, ou seja, Node.js no back-end, ReactJS para web e React Native para mobile. -->

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Expo](https://expo.io/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/EliasGcf/be-the-hero.git && cd be-the-hero
```

**Follow the steps below**

### Backend

```bash
# Starting from the project root folder, go to server folder
$ cd server

# Install the dependencies
$ yarn

# Create the instance of postgreSQL using docker
$ docker run --name bethehero-postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables
$ cp .env.example .env

# Once the services are running, create the database inside of container
$ yarn sequelize db:create

# With the database created, run the migrations
$ yarn sequelize db:migrate

# To finish, run the api service
$ yarn dev

# Well done, project is started!
```

### Web

_Obs.: Before to continue, be sure to have the API running_

```bash
# Starting from the project root folder, go to frontend web folder
$ cd web

# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the client
$ yarn start
```

### Mobile

_Obs.: Before to continue, be sure to have the API running_

```bash
# Starting from the project root folder, go to mobile folder
$ cd mobile

# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the expo service and scan the QR code with Expo Client
$ yarn expo
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork EliasGcf/be-the-hero
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd be-the-hero

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 by Elias Gabriel 👋 [See my linkedin](https://www.linkedin.com/in/eliasgcf/)
