import GoBackComponent from "../_components/go-back-component";
import ItemList from "./item-list";

export default function Week3Page() {
    return (
        <main>
            <h1 className="text-xl font-bold m-5">Shopping List</h1>
            <ItemList />
            <GoBackComponent />
        </main>
    );
}