import React, { Component } from 'react';

class ProductList extends Component {

    products = ['Pizza', 'Hamburguer', 'Pastel'];

    render() {
        return (
            <div className="ProductList">
                <h3>ProductList!</h3>
                <div>
                    {this.showProducts()}
                </div>
            </div>
        );
    }

    showProducts = () => {
        return this.products;
    };
}

export default ProductList;