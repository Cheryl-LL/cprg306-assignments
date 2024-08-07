"use client"
import { useState } from "react";
import GoBackComponent from "../_components/go-back-component";
import ItemList from "./item-list";
import MealIdea from "./meal-idea";

export default function Week7Page() {
  const [selectedIngredient, setSelectedIngredient] = useState("");

  const handleMealClick = (ingredient) => {
    const correctIngredient = ingredient.replace(/,.*/, "").replace(/\s*[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, "").trim();
    setSelectedIngredient(correctIngredient);
  };


  return (
    <main className="">
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
    </main>
  );
}
