const https = require('https');
var async = require('async');
const { create } = require('domain');

const responseHasFilters = (response) => {
    return response.filters.length && response.filters[0].values ? true : false;
}

const newPromise = (url) => {
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

const author = {
    name: 'Nahuel',
    lastname: 'Palacios'
};

const createItem = (item)=> { 
    return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: item.price
            },
            picture: item.thumbnail,
            condition: item.condition === "new" ? "Nuevo" : item.condition == "used" ? "Usado" : "",
            free_shipping: item.shipping.free_shipping,
            address: { 
                state_name: item.address.state_name,
                city_name: item.address.city_name
            }
    }
}



exports.getProducts = (query, limit = 30) => {
    return newPromise(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${limit}`).then((response => {
        const categories = responseHasFilters(response) ? response.filters[0].values[0].path_from_root.map(category => category.name) : [];
        const items = response.results.map((item) => {
            return createItem(item);
        });
        return {author,categories,items }
    }))
};

const getProductDescription =  (id) => {
    return newPromise(`https://api.mercadolibre.com/items/${id}/description`).then((response)=>{
        return response.plain_text 
    }); 
};

const getProductItem =  (id) => {
    return newPromise(`https://api.mercadolibre.com/items/${id}`).then((response)=>{
        return createItem(response)
    });
}


exports.getProduct = (id) => {
    return Promise.all([getProductItem(id)]).then( (responseItem, responseDesc) =>{
        let item = responseItem[0];
        return  {author,item} ;
    });
};


