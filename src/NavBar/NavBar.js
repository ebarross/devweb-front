import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './NavBar.css';
import { logout } from '../services/auth';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleLogout() {
        logout();
    }

    render() {
        return (
            <div className="NavBar">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">food pls</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/cart">Carrinho</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/orders">Pedidos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/account">Conta</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login" onClick={this.handleLogout}>Sair</NavLink>
                                {/* <NavLink >Sair</NavLink> */}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}