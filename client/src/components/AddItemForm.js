import React, { useState } from 'react';
import {Button, Form, FormControl, InputGroup} from 'react-bootstrap';

const AddItemForm = ({ onItemCreate }) => {

 const [newItem, setNewItem] = useState('')
 const onChange = (event) =>{
  setNewItem(event.target.value);
 };

 const onCreate = (event) =>{
  event.preventDefault();
  //Send a POST request to API and add the new item
  // to the item list
  onItemCreate(newItem);
  setNewItem('');
 };

 return (
  <Form onSubmit={onCreate}>
   <InputGroup>
   <FormControl value={newItem} onChange={onChange} type='text' placeholder='New Item'>

   </FormControl>
   
   <Button type='submit' variant='primary' disabled={!newItem.length}>
   Add
  </Button>
   </InputGroup>
  </Form>
 )
};

export default AddItemForm;