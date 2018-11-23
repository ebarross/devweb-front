import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import './ProductForm.css';

export default class ProductForm extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            description: '',
            value: 0
        };

        this.state = this.initialState;
    }

    render() {
        return (
            <Form>
                <Row form>
                    <Col md={{ size: 2, offset: 2 }}>
                        <FormGroup>
                            <Input type="text" placeholder="Nome" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Input type="text" placeholder="Descrição" />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Input type="number" placeholder="Valor" />
                        </FormGroup>
                    </Col>
                    <Col md={1}>
                        <Button className="add-btn" outline color="primary">+</Button>
                    </Col>
                </Row>
            </Form>
        );
    }

}