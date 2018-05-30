require('./script.js');

import React from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import LeftMenu from './LeftMenu';
import Main from './Main';

const App = () => {
    return (
        <div>
            <Navbar className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <NavbarBrand className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Admin</NavbarBrand>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <Nav className="navbar-nav px-3" navbar>
                    <NavItem className="nav-item text-nowrap">
                        <NavLink href="/components/">Logout</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <div className="container-fluid">
                <div className="row">
                    <LeftMenu />
                    <Main />
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));