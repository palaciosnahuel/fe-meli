const https = require('https');

requestPromise = (url) => {
    return new Promise((resolve, reject) => {
        let data = '';
        https.get(url, (response) => {
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', () => {
                resolve(JSON.parse(data));
            })
        }).on('error', (error) => {
            console.error(`Error: ${error.message}`)
        });
    })
};

exports.getProducts = (query, limit) => {
    return requestPromise(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${limit}`);
};