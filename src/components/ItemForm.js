import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce")

  function settingValue(e){
    setItemName(e.target.value)
    // console.log(e.target.value)
  }

  function settingSelect(e) {
    setItemCategory(e.target.value);
    // console.log(e.target.value)
  }

  function submitevent(e){
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem)
    console.log(newItem);
    setItemName("")
  }

  return (
    <form onSubmit={submitevent} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={settingValue} value={itemName}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={settingSelect}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
