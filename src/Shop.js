import React, {useState, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Shop() {

  //use effect and square brackets, so it will only run when component loads
  useEffect(() => {
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data =
      await fetch("https://fortniteapi.io/v1/items/upcoming?lang=en",
      { headers: {'Authorization': 'b797c03b-cbf3eced-0b87d37b-320495fa'}}
      )
    const items = await data.json();
    console.log(items.items);
    //to collect data in items.items into our useState
    setItems(items.items);
  };



  return (
    <div>
      {items.map(item => (
        <h1 key = {item.id}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

//key = {item.id} warning in dev tools unless key is inserted
export default Shop;
