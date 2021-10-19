import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, signOutWithGoogle } = useAuth();
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <div className='header-detail w-100 ms-5 '>
                    <div style={{ marginLeft: '50px' }}>
                        <img width='100' height='60' src={logo} alt="" />
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink className='header-detail' to='/home'>Home</NavLink>
                                <NavLink className='header-detail' to='/services'>Services</NavLink>
                                <NavLink className='header-detail' to='/contact'>Contact</NavLink>
                                <NavLink className='header-detail' to='/about'>About us</NavLink>

                                <div style={{ marginLeft: '200px', display: 'flex' }}>
                                    {
                                        user.email && <img width='70' height='70'
                                            style={{ borderRadius: '50%' }}
                                            src={user.photoURL} alt="" />
                                    }
                                    <p className='header-detail'>{user.displayName}</p>
                                    {
                                        user.email ? <NavLink className='signin-out' onClick={signOutWithGoogle} to='/login'>Log out</NavLink>
                                            :
                                            <NavLink className='signin-out' to='/login'>Login</NavLink>
                                    }
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </div>
            </Navbar>
        </div >
    );
};

export default Header;