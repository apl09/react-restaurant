import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reserve.css"

 const Reserve = () => {
  const initialState = {
    name: "",
    date: "",
    time: ""
  };

  const [data, setData] = useState(initialState);  
  const [btnDisabled, setBtnDisabled] = useState(true);  
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
   

  const handleInputChange = (event) => {
    
    if (data.name.length <= 3) {
        setMessage("Name must be at least 3 characters");
        setBtnDisabled(true);
      } else {        
        setMessage(null);
        setBtnDisabled(false);
      }
    setData({
      ...data, 
      [event.target.name]: event.target.value,
    });
  };

  const clearForm = () => {
    setData(initialState);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    localStorage.setItem('menu', JSON.stringify(data));          
    clearForm();
    setMessage("Congratulations reservation confirmed");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <div className="containerReserve">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={handleInputChange}
          name="name"
          value={data.name} 
        />
        <input
          type="date"
          placeholder="date"
          onChange={handleInputChange}
          name="date"
          value={data.date}
        />
        <input
          type="time"
          placeholder="time"
          onChange={handleInputChange}
          name="time"
          value={data.time}
        />

        <button disabled={btnDisabled} type="submit">
          Send
        </button>
        {message}
      </form>
    </div>
  );
};
 

export default Reserve