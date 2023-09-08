import './App.css'
import Navbar from './componets/Navbar/Navbar'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'



function App() {
 
const changeText = () => "Fue Clickeado"
  return (
    <div className='container'>
    <Navbar />  
    <ItemListContainer greeting="Bienvenidos a la Tienda Virtual de VINOS PyF"/>
    </div>
    
  
   
  )
}
export default App