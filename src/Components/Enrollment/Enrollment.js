import React from 'react';

const Enrollment = (props) => {
    const chart = props.chart;
   console.log(chart);
   let total = 0;
   for (let i = 0; i < chart.length; i++) {
       const course = chart[i];
       total = total + course.Price; 
   }
 

    return (
        <div>
            <h4>Enrollment Summary</h4>
            <p>Items Courses:{chart.length}</p>
            <p>Total Price: {total}</p>
        </div>
    );
};

export default Enrollment;