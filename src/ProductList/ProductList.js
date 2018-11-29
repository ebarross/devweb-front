import React, { Component } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import ProductForm from '../ProductForm/ProductForm';
import './ProductList.css';
import axios from 'axios';

const URL = 'http://localhost:8080/product';

export default class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        fetch(URL)
            .then(response => response.json())
            .then(data => this.setState({ products: data }));
    }

    handleSubmit = product => {
        axios.post(URL, {
            name: product.name,
            description: product.description,
            value: product.value
        }).then(response => {
            this.setState({ products: [...this.state.products, response.data] });
        }).catch(error => {
            alert('Produto inválido, tente novamente.');
        });
    }

    render() {
        const { products } = this.state;
        const productsDetails = products.map((product, index) => {
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