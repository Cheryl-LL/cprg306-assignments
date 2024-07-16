"use client";

import { useEffect, useState } from "react";

export default function MealIdea({ ingredient }) {
  const [mealDisplay, setMealDisplay] = useState([]);

  async function fetchMealIdeasByIngredient(ingredient) {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );

      if (!res.ok) {
        console.log(`Error: ${response.statusText}`);
      }
      const data = await res.json();
      // return data;
      // use map to map each object as an array
      return data.meals;
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  const loadMealIdeas = async () => {
    const mealData = await fetchMealIdeasByIngredient(ingredient);
    setMealDisplay(mealData);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (

    <div>
      {mealDisplay ? (
        mealDisplay.map((meal) => (
          <div>
            <h2>{meal.strMeal}</h2>
          </div>
        ))
      ) : (
        <p>No meal ideas found.</p>
      )}
    </div>


  );
}
