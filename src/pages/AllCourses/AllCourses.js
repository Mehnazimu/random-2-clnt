import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AllCourses = ({ course }) => {

    console.log(course)
    const { title, image_url, description } = course

    return (
        <Card className='d-grid col-md-2 col-sm-1' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    );
};

export default AllCourses;