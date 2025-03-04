import React, { useState } from 'react';
import * as Icon from 'react-feather';

const QuantityInput: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="input-counter">
      <span className="minus-btn" onClick={handleDecrease}>
        <Icon.Minus />
      </span>

      <input
        type="text"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
      />

      <span className="plus-btn" onClick={handleIncrease}>
        <Icon.Plus />
      </span>
    </div>
  );
};

export default QuantityInput;
