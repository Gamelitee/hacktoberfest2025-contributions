import { useSelector } from "react-redux";

export const AddToCart = () => {
  const cartCount = useSelector((state) => state.cart.value);
  
  return (
    <button 
      className="cart-container" 
      aria-label={`Shopping cart with ${cartCount} items`}
      title="View shopping cart"
    >
      <span className="cart-icon" aria-hidden="true">🛒</span>
      <span className="cart-count" aria-live="polite">{cartCount}</span>
    </button>
  );
};
