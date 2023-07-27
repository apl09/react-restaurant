import React from 'react'
import './Menu.css'

const Menu =(props)=> {
    const listOfDishes = props.dishes.map((dish) => (
      <li>
        <p>{dish.id} </p>
        <p>Nombre: {dish.name} </p>
        <p>Descripcion: {dish.description} </p>
        <p>Precio: {dish.price}</p>
      </li>
    ));
  
    return (
      <div className="container">
        <ul>{listOfDishes}</ul>
      </div>
    );
  }
  
export default Menu
