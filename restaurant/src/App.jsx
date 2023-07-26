import Header from './components/Header'
import Home from './components/Home'
import './App.css'
import Menu from './components/Menu'


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
      <Header/>
        <Home/>        
        <Menu dishes={dishes}/>         
      </div>      
    </>
  )
}

export default App
