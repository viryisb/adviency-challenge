import React from 'react';

const Item = ({ item, onRemove }) => (
  <li key={item.id}>
    {item.name}
    <button type='button' onClick={() => onRemove(item.id)}>
      Remove
    </button>
  </li>
);
export default Item;
