import React, { Component } from 'react';
import './ProductDetail.css';

class ProductDetail extends Component {

    render() {
        const { name } = this.props.product;
        const { description } = this.props.product;
        const { value } = this.props.product;

        return (
            <div className="product">
                <h4>{name}</h4>
                <p className="description">{description}</p>
                <p className="value">R$ {value}</p>
            </div>
        );
    }
}

export default ProductDetail;