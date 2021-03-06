const https = require('https');

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
            reject(error);
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
                amount: Math.trunc(item.price),
                decimals: (item.price % 1).toFixed(2).substring(2)
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

const createItemDetail = (item)=> { 
    return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: Math.trunc(item.price),
                decimals: (item.price % 1).toFixed(2).substring(2)
            },
            picture: item.thumbnail,
            condition: item.condition === "new" ? "Nuevo" : item.condition == "used" ? "Usado" : "",
            sold_quantity: item.sold_quantity,
            free_shipping: item.shipping.free_shipping,
            category_id: item.category_id
    }
}

const getProductDescription =  (query) => {
    return newPromise(`https://api.mercadolibre.com/items/${query}/description`).then((response)=>{
        return response.plain_text 
    }); 
};

const getProductCategory =  (query) => {
    return newPromise(`https://api.mercadolibre.com/categories/${query}`).then((response)=>{
        return response;
    });
}

const getProductItem = async (query) => {
    let responseProduct =  createItemDetail(await newPromise(`https://api.mercadolibre.com/items/${query}`));
    let responseCategory = await getProductCategory(responseProduct.category_id);
    responseProduct["category"] = responseCategory.path_from_root.map(category => category.name);
    return responseProduct;
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

exports.getProduct = (query) => {
    return Promise.all([getProductItem(query),getProductDescription(query)]).then( (response) =>{
        let item = response[0];
        item["description"] = response[1];
        return {author,item}
    });
};




