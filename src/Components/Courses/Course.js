import React, { useState } from 'react';
import { fakeData } from '../../data/fakeData';
import './course.css';
import Enroll from '../Enroll/Enroll';
import Enrollment from '../Enrollment/Enrollment';



const Course = () => {
    const courses = fakeData.slice(0, 18);
    const [Courses, setCourses] = useState(courses);
    const [Chart, setChart] = useState([])

    const handleAddCourse = (course) => {
        const newChart = [...Chart, course];
        setChart(newChart);
    }

    return (
        <div className="Courses-container">
            <div className="Course-container">
                <h2>These courses Three-Month Duration </h2>

                {
                    Courses.map(courses => <Enroll
                        handleAddCourse={handleAddCourse}
                        course={courses}>

                    </Enroll>)
                }

            </div>
            <div className="Cart-container">
                <Enrollment chart={Chart}></Enrollment>
            </div>

        </div>

    );
};

export default Course;