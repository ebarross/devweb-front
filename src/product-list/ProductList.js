import React, { Component } from 'react';
import ProductDetail from '../product-detail/ProductDetail';
import './ProductList.css';

class ProductList extends Component {

    render() {
        const products = [
            {
                name: 'Pizza pequena',
                description: '4 fatias',
                value: 18.0
            },
            {
                name: 'Pizza média',
                description: '6 fatias',
                value: 25.0
            },
            {
                name: 'Pizza grande',
                description: '8 fatias',
                value: 30.0
            }
        ];

        const productsDetails = products.map((product, index) => {
            return (
                <ProductDetail key={index} product={product} />
            );
        });

        return (
            <div className="ProductList">
                <h3>Products:</h3>
                <div>
                    {productsDetails}
                </div>
            </div>
        );
        /* return (
            <div className="ProductList">
                <h3>Products:</h3>
                <div>
                    <ProductDetail product={products[0]} />
                    <ProductDetail product={products[1]} />
                    <ProductDetail product={products[2]} />
                </div>
            </div>
        ); */
    }
}

export default ProductList;