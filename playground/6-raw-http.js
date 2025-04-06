const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=1c1f2ec6d6f19ff44179510251d3d09e&query=Mogadishu';

const request = http.request(url, (response) => {
    let data = '';
    
    response.on('data', (chunk) => {
        console.log(chunk);
        data = data + chunk.toString();
    })

    response.on('end', () => {
        const parsed = JSON.parse(data);
        console.log(parsed);
    })

})

request.on('error', (error) => {
    console.log('Error: ', error);
})

request.end();