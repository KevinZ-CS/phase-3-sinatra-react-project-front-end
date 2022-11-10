import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, ListGroup } from 'react-bootstrap';
import { useState } from "react";


function Exercise({ workout, onWorkoutDelete, onUpdateCheck }) {

    const [check, setCheck] = useState(workout.complete)

    function handleDeleteClick() {
        fetch(`http://localhost:9292/exercise/${workout.id}`, {
            method: "DELETE",
          });

        onWorkoutDelete(workout.id)
    }



return (

    <ListGroup.Item variant="success">

    <span className="d-flex list-item"> 
        <Form.Check className="px-2" checked={check} onChange={handleCheckChange}/>
        <span className={check ? "strike" : ''}>{workout.exercise}, Weight: {workout.weight}, Sets: {workout.sets}, Reps/Set: {workout.reps}  </span>
    </span>


    <Button onClick={handleDeleteClick} type="button" variant="danger" className="delete-btn">x</Button>
   

    </ListGroup.Item>


    )
}
export default Exercise