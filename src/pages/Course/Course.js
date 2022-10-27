import React from 'react';
import { useLoaderData } from 'react-router';

const Course = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div>
            <h2>single Course</h2>
        </div>
    );
};

export default Course;