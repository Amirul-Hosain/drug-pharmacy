import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, signOutWithGoogle } = useAuth();
    console.log(user)
    return (
        <div>
            <Navbar bg="dark" expand="lg" className='navbar-light'>
                <div className='header-container w-100 ms-5 '>
                    <div>
                        <img width='100' height='60' src={logo} alt="" />
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Link className='header-detail' to='/home'>Home</Link>
                            <Link className='header-detail' to='/services'>Services</Link>
                            <Link className='header-detail' to='/contact'>Contact</Link>
                            <Link className='header-detail' to='/about'>About us</Link>

                            <div style={{ marginLeft: '200px', display: 'flex' }}>
                                {
                                    user.photoURL && <img width='60' height='60'
                                        style={{ borderRadius: '50%' }}
                                        src={user.photoURL} alt="" />
                                }
                                <p className='header-detail'>{user.displayName}</p>
                                {
                                    user.email ? <Link className='signin-out'
                                        onClick={signOutWithGoogle}
                                        to='/login'>Log out <i class="fas fa-sign-in-alt"></i>
                                    </Link>
                                        :
                                        <Link className='signin-out'
                                            to='/login'>Login <i class="fas fa-sign-in-alt"></i>
                                        </Link>
                                }
                            </div>
                        </Navbar.Collapse>
                    </div>
                </div>
            </Navbar>
        </div >
    );
};

export default Header;