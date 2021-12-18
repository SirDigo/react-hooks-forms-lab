import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItems, setSearchedItems] = useState("")
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchedItems(event.target.value)
  }

  function onItemFormSubmit(newItem){
    setItems([...items, newItem])
  }

  const itemsToDisplay = items.filter((item) => {
    if (searchedItems.length > 0) {
      return item.name.toLowerCase().includes(searchedItems.toLowerCase());
    } 
    else if (selectedCategory === "All" || searchedItems.length <= 0) return true;
    else {
      return item.category === selectedCategory;
    }
  });


  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
