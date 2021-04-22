//chamando o módulo express
const { response, request } = require('express'); //Linha incluída pelo VS Code 
const express = require('express');

//executando o express
const app = express();

//Habilitando o uso do json no express, ou seja, o servidor não recebe os dados do usuário
app.use(express.json());

//criando lista de usuários
let usuarios = [
    { nome: 'Claudio', sobrenome: 'Carvalho'}
]


//Criando rotas
//Rota GET (http://localhost:3000/home)
app.get('/home', (request, response) => {
    return response.send('Olá mundo') //O return não é obrigatório
}); /* Esta rota vai fazer com que o método HTTP GET seja utilizado,
indo buscar uma informação no servidor. Neste caso, quando damos um GET
no caminho /home, ele vai retornar a frase "OLÁ MUNDO"*/


//Criando rota para a lista de usuários
//(http://localhost:3000/usuarios)
app.get('/usuarios', (request, response) => {
    return response.json(usuarios);//O método .JSON converte um objeto literal em um objeto JSON.
});


//criando rota POST
app.post('/usuarios', (request, response) => {
    const {nome, sobrenome} = request.body //aplica desestruração pegando o nome e o sobrenome do objeto informado
    
    usuarios.push({nome, sobrenome}); //adiciona o novo objeto no array de usuários
    
    return response.json({nome, sobrenome}); //retorna o objeto que acabou de ser adicionado
});


//criando rota PUT
//(http://localhost:3000/usuarios/claudio)
    app.put('/usuarios/:nome', (request, response) => {
   
    const { nome } = request.params;

   const { sobrenome } = request.body;

   let mudaSobrenome = usuarios.find(function (nomeBuscado) {
       return nomeBuscado.nome === nome
   })

   mudaSobrenome.sobrenome = sobrenome

   return response.json(mudaSobrenome);
});

app.delete('/usuarios/:nome', (request, response) => {
    const { nome } = request.params;
    
    usuarios.splice(usuarios.indexOf(nome),1)
    
    return response.json(usuarios)
})



//iniciando o servidor Express
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});
/* No terminal você tem que iniciar o nodemon para que o servidor fiquei rodando. O comando é NPM START.
Agora deixe o servidor rodando em um terminal e abra outro para executar as demais operações*/

