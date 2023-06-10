import { ChevronUp, ChevronDown } from "../icons";

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <div>
      <article className="cart-item">
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">$ {price}</h4>
          <div className="remove-btn">remove</div>
        </div>
        <div>
          <button className="amount-btn">
            <ChevronUp />
          </button>
          <p className="amount">{amount}</p>
          <button className="amount-btn">
            <ChevronDown />
          </button>
        </div>
      </article>
    </div>
  );
};

export default CartItem;
