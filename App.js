
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Home from './components/Home';



function App() {
  
  return (
    <div >
       <Navbar />
       <Home name=''/>
       <ItemListContainer />       
       
       
    </div>
  );
}

export default App;

