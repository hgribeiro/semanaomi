const express = require('express');

const app = express();

// Métodos HTTP: GET(listar, consulta a alguma inf), POST(criar uma nova informação), PUT(alterar alguma inf da aplicacao), DELETE, que são os metodos do famoso CRUD

// Tipos de parâmetros:

// Query params: request.query (Filtros, ordenação, paginação,...) 90% das vezes apenas no metodo GET, pq n aceita corpo.
// Route params:   request.params (Identificar um recurso na alteração ou remoção) (particamente no PUT e no DELETE)
// Body:



app.delete('/users/:id' , (request, response) =>{
    console.log(request.params);
    return response.json({message: 'Hello world!' });
} );

app.listen(3333);