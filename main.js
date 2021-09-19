/*Desafío Arrays*/

const products = [
    {id: 1, product: 'mixPetalos', price: 800},
    {id: 2, product: 'sahumeriosArt', price: 300},
    {id: 3, product: 'sahumeriosPS', price: 250}
];

products.push({ id: 4, product: 'bombas', price: 350});
console.log(products);

const filtrar = products.filter((e) => e.price < 400);
console.log(filtrar);


