import React from 'react'
import './Menu.css'

const Menu =(props)=> {
    const listOfDishes = props.dishes.map((dish) => (
      <div key={dish.id}>
        <p>{dish.id} </p>
        <p>Nombre: {dish.name} </p>
        <p>Descripcion: {dish.description} </p>
        <p>Precio: {dish.price}</p>
      </div>
    ));
  
    return (
      <div className="container">
        {listOfDishes}
      </div>
    );
  }
  
export default Menu
