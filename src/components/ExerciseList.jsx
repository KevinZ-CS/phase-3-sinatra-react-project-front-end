import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Card, ListGroup, Form, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Exercise from "./Exercise";

function ExerciseList() {

    const [workouts, setWorkouts] = useState([]);
    const [exercise, setExercise] = useState('');
    const [weight, setWeight] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const { category, id } = useParams();

    



    return (
     
    <Container className="py-4">
        <Row>
          <div className="col-md-2"></div>
        <Card className="col-md-8">
            <Card.Header className="h2 bg-white">Workout: {category}</Card.Header>
    
        <Card.Body>
     
        <ListGroup>
            {workouts.map((workout) => <Exercise workout={workout} key={workout.id} onWorkoutDelete={handleDeleteWorkout} onUpdateCheck={handleUpdateWorkout} /> )}
        </ListGroup>
           
    <Form className="d-flex" onSubmit={handleSubmitTask} >
         
         <Form.Group className="task-input px-2">
                     <label>Add Exercise:</label>
                 <Form.Control 
                 type="text"
                 autoFocus
                 autoComplete="off"
                 onChange={(e) => setExercise(e.target.value)}
                 value={exercise}
                 />
                  <label>Add Weight:</label>
                  <Form.Control 
                 type="text"
                 autoFocus
                 autoComplete="off"
                 onChange={(e) => setWeight(e.target.value)}
                 value={weight}
                 />
                   <label>Add Sets:</label>
                  <Form.Control 
                 type="text"
                 autoFocus
                 autoComplete="off"
                 onChange={(e) => setSets(e.target.value)}
                 value={sets}
                 />
                  <label>Add Reps/Set:</label>
                  <Form.Control 
                 type="text"
                 autoFocus
                 autoComplete="off"
                 onChange={(e) => setReps(e.target.value)}
                 value={reps}
                 />
         </Form.Group>
    
    
         <Col className="mt-4 col-md-2">
         <Button type='submit' className="add-to-list-btn">Add</Button>
         </Col>
    
     </Form>
     <Link to="/" >Back</Link>
    
    
        </Card.Body>
        </Card>
        </Row>
    </Container>
    

    )}

export default ExerciseList