import React, {useState, useEffect} from 'react';
import './App.css';


function ItemDetails({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  },[]);
  //match wil match

  const [item, setItem] = useState({
    images:{}
  });
  //diff state. item not items. curly brackets not square
  //images is another object  in api, so it has to be defined as an empty object first

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortniteapi.io/v1/items/get?id=${match.params.id}&lang=en`, 
    { headers: {'Authorization': 'b797c03b-cbf3eced-0b87d37b-320495fa'}}); 

    const item = await fetchItem.json();

    console.log(item.item);
    setItem(item.item);
  };



  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.full_size} alt=""/>
    </div>
  );
}


export default ItemDetails;
