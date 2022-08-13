import React, {useState, useEffect} from "react";
import axios from "axios";
import AddItemForm from "./AddItemForm";
import Item from "./Item";

const BASE_URL = 'http://localhost:3001/api/items';

const TodoList = () => {
 var [items, setItems] = useState(null);

 useEffect(() => {
  axios
    .get(BASE_URL).then((res) => 
    // console.log(res)
    {setItems(res.data.items)});
 });

  const onItemCreate = async (newItem) => {
    // Send POST request
    await axios.post(BASE_URL, {name: newItem});
    //Update my frontend
    // setItems([...items, {name: newItem, completed: false, id: '1'}])
  }

  const onItemDelete = async (item) => {
    console.log(item.id);
    await axios.delete(BASE_URL, {id: item.id});
    const index = items.findIndex((i) => i.id === item.id);
    setItems([...items.slice(0, index), ...items.slice(index + 1)])
  }

 if (items === null) return <div>loading</div>;

  return (
  <div>
    <AddItemForm onItemCreate={onItemCreate}/>
    {items.map((item) => (
    <Item key={item.id} item={item} onItemDelete={onItemDelete}/>
    ))
    }</div>
    );

}

export default TodoList;