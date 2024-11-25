import React, { useState } from 'react';
import * as Icon from 'react-feather';

const QuantityInput: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="quantity d-flex align-items-center">
        <span>Quantity:</span>

        <div className="input-counter">
          <span className="minus-btn" onClick={handleDecrease}>
            <Icon.Minus />
          </span>

          <input
            type="text"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          />

          <span className="plus-btn" onClick={handleIncrease}>
            <Icon.Plus />
          </span>
        </div>
      </div>
      <button type="submit">Add to Cart</button>

      <button
        type="button"
        className="add-to-wishlist-btn"
        title="Add to Wishlist"
      >
        <Icon.Heart />
      </button>
    </form>
  );
};

export default QuantityInput;
