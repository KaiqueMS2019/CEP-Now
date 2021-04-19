<h1>
    CEP Now
</h1>

## 🔖Sobre

O projeto CEP Now tem como intuito, buscar o CEP e todos os seus dados para o usuario, buscando da lib **Cep-Promise** que contem a API do **Via Cep** e do **Correios**. Após a primeira busca de um determinado CEP, se o mesmo for requisitado novamente, trará do banco de dados MongoDb. Foi utilizado o **Cep-Promise** por já ter a API **Via Cep** tratada, por se mais simples de usar e por não depender de um unico serviço para fazer a  requisição.


---

## 🚀Tecnologias e Libs utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [ReactJS](https://reactjs.org)
- [NodeJs](https://nodejs.org/en/)
- [Cep-Promise](https://www.npmjs.com/package/cep-promise)
- [Bootstrap](https://getbootstrap.com/)
- [MongoDb](https://www.mongodb.com/2)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Robo 3t](https://robomongo.org/)

---

## 📁 Como baixar o projeto

```bash
# Clonar o repositório
$ git clone https://github.com/KaiqueMS2019/CEP-Now.git

# Entrar no diretório
$  cd CEP-NOW

# Instalar as dependências
$  yarn install

# Entrar no diretório do front
$  cd front

# Iniciando o projeto
$  yarn start

# Entrar no diretório do back
$  cd api

# Iniciando o projeto
$  nodemon server.js
