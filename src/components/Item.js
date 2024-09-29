import React from "react";
function Item({ item, onToggleItem, onDeleteItem }) {
    //want to delete and cross out items
    return (
      <li>
        <div></div>
        <span
          value={item.packed}
          onClick={() => onToggleItem(item.id)}
          style={item.packed ? { textDecoration: "line-through" } : {}}
        >
          {item.quantity} {item.description}
          <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </span>
      </li>
    );
  }

export default Item