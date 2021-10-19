import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import google from '../../../src/images/social/google-icon-logo.png'
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, registrationWithEmail, handleSignInWithEmail } = useAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoding, setIsLoading] = useState(true);

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/services';

    // sign in with email account
    const handleLogINEmail = () => {
        setIsLoading(true)
        handleSignInWithEmail(email, password)
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri)
                console.log(result.user)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }


    // ---------------- sign in with google ---------------//
    const signIn = () => {
        setIsLoading(true);
        signInWithGoogle()
            .then((result) => {
                setUser(user)
                history.push(redirect_uri)
                console.log(result.user)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div className='p-5'>
            <div className='d-flex justify-content-center'>
                <Form onSubmit={registrationWithEmail} className='w-25 mt-5'>
                    <h2>Sign in</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>

                    <p>Don't have an account? <Link to='/register'>Sign up</Link></p>

                    <p className='text-danger'>{error}</p>

                    <div className='d-flex justify-content-between'>
                        <Button
                            onClick={handleLogINEmail}
                            className='h-25' variant="primary"
                            type="submit">
                            Sign in
                        </Button>

                        <div onClick={signIn}
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

export default Login;