
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CartWidget = () => {
  
  return (
    <div className="cart-widget">      
      <FontAwesomeIcon icon="fa-light fa-cart-plus" />
      <div className="qty-display">0</div>
    </div>
  );
};

export default CartWidget;