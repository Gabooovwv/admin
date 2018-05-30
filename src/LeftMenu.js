import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';

const LeftMenu = () => {
    return (
        <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <Nav vertical>
                    <NavItem>
                        <NavLink href="#">User</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">User Group</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">System</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Rights</NavLink>
                    </NavItem>
                </Nav>

            </div>
        </Nav>
    );
};

export default LeftMenu;