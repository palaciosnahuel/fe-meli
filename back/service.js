const client = require('./client')

const responseHasFilters = (response) => {
    return response.filters.length && response.filters[0].values ? true : false;
}

exports.getProducts = (query, limit) => {
    return client.getProducts(query,limit).then((response => {
        const author = {
            name: 'Nahuel',
            lastname: 'Palacios'
        };

        const categories = responseHasFilters(response) ? response.filters[0].values[0].path_from_root.map(category => category.name) : [];

        const items = response.results.map((item) => {
            return {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: item.price
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping
            }
        });
        return {
            author,
            categories,
            items
        }
    }))
};
