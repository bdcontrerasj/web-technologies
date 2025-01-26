import product1 from './assets/products/jacket1.png';
import product2 from './assets/products/jacket2.png';
import product3 from './assets/products/jacket3.png';
import product4 from './assets/products/jacket4.png';
import product5 from './assets/products/jacket5.png';

export const PRODUCTS = [

    {
        id:1,
        productName: "Jacket",
        price: 89.0,
        productImage: product1,
        reviews:[{
            id:1,
            comment: "First comment",
            username:"admin1",
            image: product1
        }]
    },

    {
        id:2,
        productName: "Jacket",
        price: 129.0,
        productImage: product2,
    },

    {
        id:3,
        productName: "Jacket",
        price: 179.0,
        productImage: product3,
    },

    {
        id:4,
        productName: "Jacket",
        price: 99.0,
        productImage: product4,
    },

    {
        id:5,
        productName: "Jacket",
        price: 299.0,
        productImage: product5,
    }
 

    
];