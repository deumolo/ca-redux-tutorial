import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const amount = cart.amount;

  return (
    <nav>
      <div className="nav-center navbar">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount} </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
