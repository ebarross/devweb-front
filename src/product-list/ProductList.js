import React, { Component } from 'react';
import ProductDetail from '../product-detail/ProductDetail';
import './ProductList.css';

class ProductList extends Component {

    products = [
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

    render() {
        return (
            <div className="ProductList">
                <h3>Products:</h3>
                <div>
                    <ProductDetail product={this.products[0]}/>
                    <ProductDetail product={this.products[1]}/>
                    <ProductDetail product={this.products[2]}/>
                </div>
            </div>
        );
    }
}

export default ProductList;