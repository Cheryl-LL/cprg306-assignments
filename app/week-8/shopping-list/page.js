"use client"

import { useState } from "react";
import GoBackComponent from "../../_components/go-back-component";
import { useUserAuth } from "../utils/auth-context";
import ItemList from "./item-list";
import MealIdea from "./meal-idea";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [selectedIngredient, setSelectedIngredient] = useState("");

  const handleMealClick = (ingredient) => {
    const correctIngredient = ingredient.replace(/,.*/, "").replace(/\s*[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, "").trim();
    setSelectedIngredient(correctIngredient);
  };
  
  return (
    <div>
      {user ? (
        <div className="">
          <div className="">
            <ItemList onMealClick={handleMealClick} />
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
