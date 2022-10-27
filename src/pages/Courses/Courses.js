import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router';
import AllCourses from '../AllCourses/AllCourses';
import SideNav from '../SideNav/SideNav';

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)

    return (
        <div className='mt-10'>
            <Container>
                <Row>
                    <Col lg='3'>

                        <SideNav></SideNav>

                    </Col>
                    <Col lg='8'>
                        <div className='d-grid col-md-2 col-sm-1'>
                            <h2>course: {courses.length}</h2>
                            {
                                courses.map(course => <AllCourses
                                    key={course.id}
                                    course={course}
                                ></AllCourses>)
                            }
                        </div>


                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Courses;