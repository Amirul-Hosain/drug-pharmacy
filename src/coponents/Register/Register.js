import React, { useState } from 'react';
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

                    <h2>Sign up</h2>

                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Control onBlur={handleNameChange} type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
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
                                marginRight: '30px', cursor: 'pointer', height: '60px',
                                width: '65px', border: '1px solid gray', borderRadius: '3px',
                                padding: '3px 4px', marginTop: '-7px'
                            }}>
                            <img width='40' height='30' src={google} alt="" />
                            <p>Google</p>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;