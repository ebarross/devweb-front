import React, { Component } from 'react';
import { Form, FormGroup, Input, Row, Col, Button } from 'reactstrap';
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

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        return (
            <Form>
                <Row form>
                    <Col md={{ size: 2, offset: 2 }}>
                        <FormGroup>
                            <Input type="text" placeholder="Nome" name="name" onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Input type="text" placeholder="Descrição" name="description" onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Input type="number" placeholder="Valor" name="value" onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col md={1}>
                        <Button className="add-btn" outline color="primary" onClick={this.submitForm}>+</Button>
                    </Col>
                </Row>
            </Form>
        );
    }

}