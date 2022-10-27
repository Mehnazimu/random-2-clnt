
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar bg="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src="https://www.nextgenscience.org/sites/all/themes/ngss/img/accordion_logo.png"
                                width="40"
                                height="40"
                                className="d-inline-block align-top rounded"
                                alt=""
                            />
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <Navbar.Brand> <Link to='/courses'>Unique Learner</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Link className='me-3 ' to='/courses'>Courses</Link>
                        <Link className='me-3 ' to='/faq'>FAQ</Link>
                        <Link className='' to='/blog'>Blog</Link>


                    </Nav>
                    <Nav>
                        <Nav.Link to=''>
                            {
                                user?.uid ?
                                    <>
                                        {/* <img src={user.photoURL} alt="" ></img> */}
                                        <span>{user?.displayName}</span>
                                        <Button className='ms-2' variant="light" onClick={handleLogOut}>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='me-3' to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>

                                    </>
                            }
                        </Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;