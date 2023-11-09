<h1 align="center">TesteIlegra</h1>

<p align="center"><img src="blogdoagi.png" width="100%"/></p>

--------

## Configurando o Ambiente

- [Cypress.io](http://www.cypress.io)

- [Documentação Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

### Requisitos para instalação

- [Node.js](https://nodejs.org/en/)

### Instalação do NPM e instalação do Cypress

Na pasta do projeto abra o terminal ou no VSCode use o Ctrl + ' (aspas simples), e digite os comandos abaixo:

```shell
npm init -y
npm install --yes
npm install cypress@12.17.4 -d
npm i faker-br --dev
```

### Comandos para iniciar o Cypress

#### Iniciar o Cypress no navegador

```shell
   npx cypress open
```

#### Para executar em modo headless

```shell
   npx cypress run
```
