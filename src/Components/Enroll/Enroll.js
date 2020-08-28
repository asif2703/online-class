import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faRegistered } from '@fortawesome/free-solid-svg-icons'
import './Enroll.css';

const Enroll = (props) => {
    //console.log(props);
    const { img, name, Price, email } = props.course;
    return (
        <div className="enroll">
            <div>
                <img src={props.course.image} alt="" />
            </div>
            <div>
                <h4 className="course-name">{name}</h4>
                <p><small>{Price}</small></p>
                <p>{email}</p>
                <br />
                <p className="last-time"><small> 5 September2020 last date</small></p>
                <button        
                 className="add-btn"
                 onClick={() => props.handleAddCourse(props.course)}
                 >
                    <FontAwesomeIcon icon={faRegistered} />Add to Chart</button>
            </div>




        </div>
    );
};

export default Enroll;