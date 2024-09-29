import React, {useState} from "react";

function Form({ onAddItems }) {
    //creating a controlled element, look at the 'value' and 'onchange'
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(e) {
      console.log(e);
  
      //we dont want to reload
      e.preventDefault();
      if (!description) return; //if there is no description return immediately
  
      //creating the new item
      const newItem = { description, quantity, packed: false, id: Date.now() };
      console.log("newItem:", newItem);
      onAddItems(newItem);
  
      setQuantity(1); //resetting after submitted
      setDescription("");
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What to pack for the trip?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>ADD</button>
      </form>
    );
  }
  
  export default Form