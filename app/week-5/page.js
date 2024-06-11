import GoBackComponent from "../_components/go-back-component";
import Item from "./item";

export default function Week4Page() {


    return (
        <main className="h-screen">
            <h1>Shopping List</h1>
            <Item  />
            <GoBackComponent />
        </main>
    );
}