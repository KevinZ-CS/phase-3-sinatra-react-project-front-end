import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function EachCategory({ category, onDeleteCategory }) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/${category.id}`, {
            method: "DELETE",
          });

          onDeleteCategory(category.id)
    }


    return (
        <ListGroup.Item variant="success">
       
        <Link style={{textDecoration: 'none'}} to={`/${category.category}/${category.id}`} ><h3 className="text-center">{category.category}</h3></Link> 
        <Button variant="danger" className="delete-category" onClick={handleDeleteClick} size='sm'>X</Button>
    
    
        </ListGroup.Item>
    )
}

export default EachCategory