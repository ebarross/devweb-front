import React, { Component } from 'react';
import ProductList from '../product-list/ProductList';

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <h1>Home!</h1>
                <ProductList></ProductList>
            </div>
        );
    }
}

export default Home;