import React, { Component } from 'react';
import './Login.css';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import axios from 'axios';

const URL = 'http://localhost:8080/auth';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            email: '',
            password: ''
        }

        this.state = this.initialState;
    }

    onChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    onSubmit = () => {
        // logar
        console.log(this.state);
        axios.post(URL, {
            email: this.state.email,
            password: this.state.password
        }
        ).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
        this.setState(this.initialState);
    }

    render() {
        return (
            <div className="Login">
                <div className="login-container">
                    <h3>Login</h3>
                    <Form>
                        <FormGroup>
                            <Input type="email" placeholder="Email" name="email" onChange={this.onChange} required />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" placeholder="Senha" name="password" onChange={this.onChange} required />
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" onClick={this.onSubmit}>Entrar</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}