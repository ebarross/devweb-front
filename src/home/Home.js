import React, { Component } from 'react';
import ProductList from '../product-list/ProductList';
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <ProductList />
            </div>
        );
    }
}

export default Home;