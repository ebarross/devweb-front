import React, { Component } from 'react';
import './ProductDetail.css';

class ProductDetail extends Component {

    name = this.props.product.name;
    description = this.props.product.description;
    value = this.props.product.value;

    render() {
        return (
            <div className="product">
                <h4>{this.name}</h4>
                <p className="description">{this.description}</p>
                <p className="value">R$ {this.value}</p>
            </div>
        );
    }
}

export default ProductDetail;