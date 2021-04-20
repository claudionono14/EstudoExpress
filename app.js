//chamando o módulo express
const { response } = require('express');
const express = require('express');

//executando o express
const app = express();

//criando lista de usuários
let usuarios = [
    {
        nome: 'Claudio',
        Sobrenome: 'Carvalho'
    }
]


//Criando rotas
//Rota GET (http://localhost:3000/home)
app.get('/home', (request, response) => {
    return response.send('Olá mundo') //O return não é obrigatório
}); /* Esta rota vai fazer com que o método HTTP GET seja utilizado,
indo buscar uma informação no servidor. Neste caso, quando damos um GET
no caminha /home, ele vai retornar a frase "OLÁ MUNDO"*/

//Criando rota para a lista de usuários
//(http://localhost:3000/usuarios)
app.get('/usuarios', (request, response) => {
    return response.json(usuarios);//O método .JSON converte um objeto literal em um objeto JSON.
});


//iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});
/* No terminal você tem que iniciar o nodemon para que o servidor fiquei rodando. O comando é NPM START.
Agora deixe o servidor rodando em um terminal e abra outro para executar as demais operações*/

