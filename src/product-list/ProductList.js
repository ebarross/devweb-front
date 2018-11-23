import React, { Component } from 'react';
import ProductDetails from '../product-details/ProductDetails';
import ProductForm from '../product-form/ProductForm';
import './ProductList.css';
import { Button } from 'reactstrap';

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

    render() {

        const productsDetails = this.state.products.map((product, index) => {
            return (
                <ProductDetails key={index} product={product} />
            );
        });

        return (
            <div className="ProductList">
                <h3>Produtos:</h3>
                <ProductForm />
                <div>
                    {productsDetails}
                </div>
                <div className="fab">
                    <Button color="primary" className="fab-btn">+</Button>
                </div>
            </div>
        );
    }
}