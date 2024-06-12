import GoBackComponent from "../_components/go-back-component";
import ItemList from "./item-list";

export default function Week4Page() {
  return (
    <main className="h-screen">
      <div className="m-5">
        <h1 className="text-3xl font-bold mb-3">Shopping List</h1>
        <ItemList />
      </div>

      <GoBackComponent />
    </main>
  );
}
