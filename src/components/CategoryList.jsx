import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Card, ListGroup, Form, Col, Button, FormGroup } from 'react-bootstrap';
import { useState, useEffect } from "react";
import EachCategory from "./EachCategory";

function CategoryList() {

    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');

    useEffect(() => {
        fetch("http://localhost:9292/")
        .then((r) => r.json())
        .then((data) => setCategories(data))
        },[]);




return (
    <Container className="py-4">
        <Row>
        <div className="col-md-3"></div>
        <Card className="col-md-6">
        <Card.Header className="h2 bg-white">Workout Planner:</Card.Header>

        <ListGroup>
        {categories.map((category) => <EachCategory category={category} key={category.id} onDeleteCategory={handleDeleteCategory} />)}
        </ListGroup>
            
        <Card.Body>
    
        <Form className="d-flex" onSubmit={handleSubmitCategory} >
        
        <Form.Group className="task-input px-2">
                    <label>Workout Category:</label>
                <Form.Control 
                type="text"
                autoFocus
                autoComplete="off"
                onChange={(e) => setNewCategory(e.target.value)}
                value={newCategory}
                /> 
        </Form.Group>

        <Col className="mt-4 col-md-2">
        <Button type='submit' className="add-to-list-btn">Add</Button>
        </Col>

        </Form>

        </Card.Body>
        </Card>
        </Row>
    </Container>

)}

export default CategoryList