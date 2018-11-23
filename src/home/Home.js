import React, { Component } from 'react';
import ProductList from '../product-list/ProductList';
import { Container } from 'reactstrap';
import './Home.css';

export default class Home extends Component {

    render() {
        return (
            <div className="Home">
                <Container>
                    <ProductList />
                </Container>
            </div>
        );
    }
}