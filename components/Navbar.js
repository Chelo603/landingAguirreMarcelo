import './Navbar.css';
import CartWidget from './CartWidget';


function Navbar() {
  return (
    <header className="navbar" >
 <button> home </button>
 <p> nosotros </p>
 <a src='#'> articulos </a>
 <a src='#'> adopciones </a>
 <a src='#'> consejos </a>
  <a src='#'> contactos </a>  
  <CartWidget />
         </header>
  );
}

export default Navbar;
