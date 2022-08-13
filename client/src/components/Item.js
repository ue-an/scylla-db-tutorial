import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Item = ({ item, onItemDelete }) => {

 const onDelete = () => {
  onItemDelete(item);
 }

 return (
  <Row>
   <Col xs={10}>{item.name}</Col>
   <Col>
   <Button variant="link" onClick={onDelete}>
    <i className="fa fa-remove text-danger"/>
   </Button>
   </Col>
  </Row>
 )
}

export default Item;