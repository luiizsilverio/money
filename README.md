<table>
  <tr>
    <td><img src="https://github.com/luiizsilverio/money/blob/main/money-web/src/assets/logo.png" /></td>
    <td><h1>JORNADA JS</h1></td>
  </tr>
</table>

## Conteúdo
* [Sobre a aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Screenshots](#camera_flash-screenshots)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre a aplicação
Aplicação desenvolvida durante o evento __Jornada JS__, promovido pela __Dev Point__.<br />
Durante o evento de 4 dias e mais de 10 horas, foram desenvolvidas 3 aplicações: uma API em Node, uma aplicação React e um App em React Native. <br />
A aplicação web e mobile permitem cadastrar despesas, além de listar e totalizar as despesas.<br />
A aplicação Node utiliza banco de dados SQLite.<br />
<br />

## :hammer_and_wrench: Tecnologias
* Back-end
  * __Node.js__
  * __Prisma ORM__ com __SQLite__
* Front-end
  * __React__
  * __Axios__ para acessar a API
* Mobile
  * __React Native__ + __Expo__
  * __React Navigation__ para rotas
  * __Axios__ para acessar a API
<br />

## :car: Iniciando a aplicação
Baixe o repositório com git clone e acesse a pasta _money_.
```bash
$ git clone https://github.com/luiizsilverio/money
```
* Back-end
  * Acesse a pasta __money-api__
  * Renomeie o arquivo __.env.example__ para __.env__
```bash
$ cd money-api
$ npm install
$ npm start
```
* Front-end
  * Acesse a pasta __money-web__
  * Altere o IP da baseURL no arquivo _src/services/api.js_
```bash
$ cd ..
$ cd money-web
$ npm install
$ npm start
```
* Mobile
  * Acesse a pasta __money-mobile__
  * Altere o IP da baseURL no arquivo _src/services/api.js_
```bash
$ cd ..
$ cd money-mobile
$ npm install
$ npm start
```


## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/money/blob/main/money-web/src/assets/banner-telas.png)

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luiz-s-de-oliveira-6b6067210)
[![E-mail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:luiiz.silverio@gmail.com)
