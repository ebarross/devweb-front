import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import './ProductDetails.css';

export default class ProductDetails extends Component {

    render() {
        const { name } = this.props.product;
        const { description } = this.props.product;
        const { value } = this.props.product;

        return (
            <Col className="ProductDetails" md={{ size: 6, offset: 3 }}>
                <Row>
                    <Col className="product__img" md="3">

                    </Col>
                    <Col className="product__infos" md="9">
                        <p className="product__name">{name}</p>
                        <p className="product__description">{description}</p>
                        <p className="product__value">R$ {value}</p>
                        <Button className="pedir-btn" color="primary">Pedir</Button>
                    </Col>
                </Row>
            </Col>
        );
    }
}