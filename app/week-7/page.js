import GoBackComponent from "../_components/go-back-component";
import ItemList from "./item-list";
import MealIdea from "./meal-idea";

export default function Week4Page() {
  return (
    <main className="">
      <div className="">

        <ItemList />
        <div>
        <h1>Meal ideas</h1>
        <MealIdea />


        </div>

      </div>

      <GoBackComponent />
    </main>
  );
}
