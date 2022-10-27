import React, { useContext } from 'react';

import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Card from 'react-bootstrap/Card';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Login = () => {
    const { signIn, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate('/')
            })
            .catch(error => console.log(error))

        console.log(email, password)
    }
    return (
        <div className='container w-50  '>
            <Card >

                <Form className='p-10 ' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='w-25' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <Button onClick={handleGoogleSignIn} className='mb-2 mt-2' variant="outline-primary"><FaGoogle></FaGoogle>Google</Button>
                <Button onClick={handleGithubSignIn} variant="outline-secondary"><FaGithub></FaGithub>Github</Button>{' '}
                <div>
                    <p>Yet Not Registered? Please <Link to='/register'>Register</Link></p>
                </div>

            </Card>
        </div>
    );
};

export default Login;