import React, { Component } from 'react';
import ProductDetails from '../product-details/ProductDetails';
import ProductForm from '../product-form/ProductForm';
import './ProductList.css';
import axios from 'axios';
import API from '../services/api';

const URL = 'http://localhost:8080/product';

export default class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        API.get('/product').then(data => {
            this.setState({ products: data.data });
        }).catch(error => {
            console.log(error);
        });
        /* fetch(URL)
            .then(response => response.json())
            .then(data => this.setState({ products: data })); */
    }

    handleSubmit = product => {
        API.post('/product', {
            name: product.name,
            description: product.description,
            value: product.value
        }).then(response => {
            this.setState({ products: [...this.state.products, response.data] });
            alert('Produto adicionado com sucesso!');
        }).catch(error => {
            // alert('Produto inválido, tente novamente.');
            alert(`Erro: ${error}`);
        });
        /* axios.post(URL, {
            name: product.name,
            description: product.description,
            value: product.value
        }).then(response => {
            this.setState({ products: [...this.state.products, response.data] });
        }).catch(error => {
            // alert('Produto inválido, tente novamente.');
            alert(`Erro: ${error}`);
        }); */
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