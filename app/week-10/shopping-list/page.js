"use client"

import { useState, useEffect } from "react";
import GoBackComponent from "../../_components/go-back-component";
import { useUserAuth } from "../utils/auth-context";
import ItemList from "./item-list";
import MealIdea from "./meal-idea";
import { getItems, addItem } from "../services/shopping-list-service";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [items, setItems] = useState([]);

  const handleMealClick = (ingredient) => {
    const correctIngredient = ingredient.replace(/,.*/, "").replace(/\s*[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, "").trim();
    setSelectedIngredient(correctIngredient);
  };

  useEffect(() => {
    const loadItems = async () => {
      if (user) {
        try {
          const itemsList = await getItems(user.uid);
          setItems(itemsList);
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      }
    };

    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      try {
        const itemId = await addItem(user.uid, newItem);
        setItems((prevItems) => [...prevItems, { ...newItem, id: itemId }]);
      } catch (error) {
        console.error('Error adding item:', error);
      }
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <div className="m-5">
            <ItemList items={items} onMealClick={handleMealClick} onAddItem={handleAddItem} />
            <h2 className="text-lg font-bold">Meal ideas</h2>
            <div>
              <MealIdea ingredient={selectedIngredient} />
            </div>
          </div>
          <GoBackComponent />
        </div>
      ) : (
        <div>
          <button className="p-2 rounded-sm bg-blue-500 text-white hover:bg-blue-400">Sign In</button>
        </div>
      )}
    </div>
  );
}