"use client";

import { useEffect, useState } from "react";
import itemDataJSON from "../data/items.json";
import Item from "./item";

export default function ItemList() {
const styledButton = "bg-indigo-600 rounded-md px-5 py-1 mx-3 text-white"

  const [itemData, setItemData] = useState([]);


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

  return (
    <div>
      <section className="flex mb-5 py-15 max-w-md">

          <div className="flex-1">
          <label>Sort by:</label>
          <button onClick={() => handleSort('name')} className={styledButton}>Name</button>
          <button onClick={() => handleSort('category')} className={styledButton}>Category</button>
          </div>

        
      </section>

      <section>
        {itemData.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </section>
    </div>
  );
}
