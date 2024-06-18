"use client";
import { useEffect, useState } from "react";
import ItemForm from "./item-form";
import itemDataJSON from "../data/items.json";
import ItemCard from "./item-card";

export default function ItemList() {
  const styledButton = "bg-indigo-600 rounded-md px-5 py-1 mx-3 text-white";

  const [itemData, setItemData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setItemData(itemDataJSON);
    console.log("useEffect runs");
  }, []);

  const handleSort = (sort) => {
    const sortedData = [...itemData].sort((a, b) => {
      const nameA = a[sort].toUpperCase();
      const nameB = b[sort].toUpperCase();
      return nameA > nameB ? 1 : -1;
    });
    setItemData(sortedData);
  };

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleCreateItem = (newItem) => {
    setItemData([...itemData, newItem]);
    console.log(newItem);
  };

  return (
    <div className="">
      {isOpen && (
        <ItemForm closeForm={handleClose} addItem={handleCreateItem} />
      )}
      <h1 className="text-3xl font-bold mb-3">Shopping List</h1>

      <div className="flex items-center">
        <button
          className="p-2 rounded-sm bg-blue-500 text-white hover:bg-blue-400"
          onClick={handleClick}
        >
          Add New Item
        </button>

        <div className="ml-2">
          <label>Sort by:</label>
          <button onClick={() => handleSort("name")} className={styledButton}>
            Name
          </button>
          <button
            onClick={() => handleSort("category")}
            className={styledButton}
          >
            Category
          </button>
        </div>
      </div>

      <div>
        {itemData.map((item, index) => (
          <ItemCard key={index} foodItem={item} />
        ))}
      </div>
    </div>
  );
}
