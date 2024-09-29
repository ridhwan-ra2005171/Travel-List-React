import React, {useState} from "react";
import Item from "./Item"

export default function PackingList({ 
    items, 
    onDeleteItem, 
    onToggleItem, 
    onClearList 
}) {
    const [sortBy, setSortBy] = useState("default");
    let sortedItems;
  
    //sort by the original input
    if (sortBy === "default") sortedItems = items;
  
    //we sort alphabetically [Alphabetical Sorting]
    if (sortBy === "description")
      sortedItems = items
        .slice() // copy of the items array is created using .slice()
        .sort((a, b) => a.description.localeCompare(b.description)); //compares two strings 
  
        //we put the unpacked at the start
    if (sortBy === "packed")
      sortedItems = items
        .slice() //copy of the items array is created using
        .sort((a, b) => Number(a.packed) - Number(b.packed)); //converts the packed values to numbers (true (packed) becomes 1 and false (unpacked) becomes 0), so false (unpacked) items are placed first, and true (packed) items are placed later in the sorted array.

        console.log(sortedItems);
        console.log(items);
  
    return (
      <div className="list">
        <ul>
          {/* <h3>Packing List</h3> */}
          {sortedItems.map((item) => (
            <Item 
            item={item} 
            key={item.id} 
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            />
          ))}
        </ul>
        {/* below is the filter */}
      <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Sort by default order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={onClearList}>Clear list</button>
        </div>
      </div>
      
    );
  }

