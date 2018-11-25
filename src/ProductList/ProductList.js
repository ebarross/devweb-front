import React, { Component } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import ProductForm from '../ProductForm/ProductForm';
import './ProductList.css';

export default class ProductList extends Component {

    state = {
        products: [
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
        ]
    }

    handleSubmit = product => {
        this.setState({ products: [...this.state.products, product] });
    }

    render() {
        const productsDetails = this.state.products.map((product, index) => {
            return (
                <ProductDetails key={index} product={product} />
            );
        });

        return (
            <div className="ProductList">
                <h3>Produtos:</h3>
                <ProductForm handleSubmit={this.handleSubmit} />
                <div>
                    {productsDetails}
                </div>
            </div>
        );
    }
}