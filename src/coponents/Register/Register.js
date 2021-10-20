import React, { useState } from 'react';
import './Register.css';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import google from '../../../src/images/social/google-icon-logo.png'
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInWithGoogle, registrationWithEmail, handleCreateAccount } = useAuth();

    const [name, setName] = useState("");
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/services';

    const handleRegistration = () => {
        handleCreateAccount(email, password)
    }
    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    // ------------------------------------------------ //
    const signIn = () => {
        signInWithGoogle()
            .then((result) => {
                setUser(user)
                history.push(redirect_uri)
                console.log(result.user)
            })
            .catch((error) => {
                setError(error.message)
            });
    }
    return (
        <div className='p-4'>
            <div className='d-flex justify-content-center'>
                <Form onSubmit={registrationWithEmail} className='w-25 mt-5'>

                    <h2 style={{ marginBottom: '30px', color: 'blue', fontFamily: 'arial' }}>Sign up</h2>

                    <Form.Group className="mb-2 d-flex" controlId="formBasicEmail">
                        <i className='fas fa-user user-icon'></i>
                        <Form.Control onBlur={handleNameChange} type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-2 d-flex " controlId="formBasicEmail">
                        <i class="fas fa-envelope user-icon"></i>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                        <i class="fas fa-unlock-alt user-icon"></i>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>

                    <p>{error}</p>

                    <p>Already have an account <Link to='/login'>Sign in</Link></p>

                    <div className='d-flex justify-content-between'>
                        <Button
                            onClick={handleRegistration}
                            className='h-25' variant="primary" type="submit">
                            Sign up
                        </Button>

                        <div
                            onClick={signIn}
                            style={{
                                marginRight: '10px', cursor: 'pointer', height: '60px',
                                width: '65px', border: '1px solid gray', borderRadius: '3px',
                                padding: '3px 6px', marginTop: '-7px'
                            }}>
                            <img width='40' height='30' src={google} alt="" />
                            <p>Sign in</p>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;