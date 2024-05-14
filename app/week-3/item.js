import ItemList from "./item-list";

export default function Item() {
    const item = {name, quantity, category};

  return (
    <div>
        <p>{item.name}</p>
        <p>{item.quantity}</p>
        <p>{item.category}</p>
    </div>
  );
}
