import { ChevronUp, ChevronDown } from '../icons';
import { useDispatch } from 'react-redux';
import {
  deleteItem,
  incrementItem,
  decrementItem,
  calculateTotals,
} from '../features/cart/cartSlice';

const CartItem = ({ id, img, title, price, amount }) => {

  const dispatch = useDispatch();

  return (
    <div>
      <article className="cart-item">
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">$ {price}</h4>
          <div
            onClick={() => {
              dispatch(deleteItem(id));
              dispatch(calculateTotals());
            }}
            className="remove-btn"
          >
            remove
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              dispatch(incrementItem(id));
              dispatch(calculateTotals());
            }}
            className="amount-btn"
          >
            <ChevronUp />
          </button>
          <p className="amount">{amount}</p>
          <button
            onClick={() => {
              dispatch(decrementItem(id));
              dispatch(calculateTotals());
            }}
            className="amount-btn"
          >
            <ChevronDown />
          </button>
        </div>
      </article>
    </div>
  );
};

export default CartItem;
