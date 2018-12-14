import React, { Component } from 'react';
import ProductList from '../product-list/ProductList';
import { Container } from 'reactstrap';
import NavBar from '../navbar/NavBar';
import './Home.css';

export default class Home extends Component {

    render() {
        return (
            <div className="Home">
                <NavBar />
                <Container>
                    <ProductList />
                </Container>
            </div>
        );
    }
}