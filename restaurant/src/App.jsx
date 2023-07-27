import Header from './components/header/Header'
import Home from './components/Home/Home'
import './App.css'
import Menu from './components/Menu/Menu'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reserve from './components/Reserve/Reserve'



const dishes = [
  {
    id:1,
    name:'Macarrones Boloñesa',
    description:'Muy ricos',
    price:10
  },
  {
    id:2,
    name:'Pizza Casaera',
    description:'Como la de Casa Tarradellas pero mas cara',
    price:20
  },
  {
    id:3,
    name:'Patatas Bravas',
    description:'Nunca pueden faltar en ningun restaurante',
    price:15
  }
]


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu dishes={dishes} />} />
             <Route path="/reserve" element={<Reserve />} /> 
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
