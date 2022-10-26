const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const course_details = require('./data/courseDetails.json');

app.get('/', (req, res) => {
    res.send('News API Running');
});

app.get('/course-categories', (req, res) => {
    res.send(courses);
});
app.get('/course-details', (req, res) => {
    res.send(course_details);
});


app.get('/course_details/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course_details.find(c => c.id === id);
    res.send(selectedCourse);
});



app.listen(port, () => {
    console.log('random api is running', port);
})