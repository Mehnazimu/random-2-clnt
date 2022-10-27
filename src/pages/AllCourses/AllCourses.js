import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const AllCourses = ({ course }) => {

    console.log(course)
    const { id, title, image_url, description } = course

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={`/course/${id}`}><Button variant="primary">Check Out</Button></Link>
            </Card.Body>
        </Card>

    );
};

export default AllCourses;