import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { toggle } from '../features/modal/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((store) => store.modal);

  return (
    <div>
      {open ? (
        <aside className="modal-container">
          <div className="modal">
            <h4>Remove all items from your shopping cart </h4>
            <div className="btn-container">
              <button
                className="btn confirm-btn"
                onClick={() => {
                  dispatch(clearCart());
                  dispatch(toggle());
                }}
              >
                Confirm
              </button>
              <button
                className="btn clear-btn"
                onClick={() => {
                  dispatch(toggle());
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </aside>
      ) : (
        ''
      )}
    </div>
  );
};

export default Modal;
