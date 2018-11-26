import React, { Component } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import ProductForm from '../ProductForm/ProductForm';
import './ProductList.css';

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
        this.setState({ products: [...this.state.products, product] });
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