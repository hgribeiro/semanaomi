const { Router } = require ('express');
cosnt axios = require('axios');

const routes = Router();


routes.post('/devs' , async(request, response) =>{
    console.log({ github_username } = request.body);

    const response = await axios.get(`https://api.github.com/users/${github_username}`; 


    return response.json({message: 'Hello world!' });
} );


module.exports = routes;
