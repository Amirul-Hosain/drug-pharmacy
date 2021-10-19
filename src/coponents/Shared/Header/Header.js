import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { Nav, Navbar } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, signOutWithGoogle } = useAuth();
    return (
        <Navbar bg="dark" expand="lg">
            <div className='header-detail'>
                <div>
                    <img width='100' height='60' src={logo} alt="" />
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to='/home'>Home</NavLink>
                            <NavLink to='/services'>Services</NavLink>
                            <p>{user.displayName}</p>
                            {user.email ? <NavLink onClick={signOutWithGoogle} to='/login'>Log out</NavLink>
                                :
                                <NavLink to='/login'>Login</NavLink>}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </div>
        </Navbar>
    );
};

export default Header;