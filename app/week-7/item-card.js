export default function ItemCard({ foodItem, onClick }) {
  const { name, quantity, category } = foodItem;

  return (
    <div>
      <main>
        <div
          onClick={onClick}
          className="text-red-300 bg-slate-800 border border-cyan-100 mt-3 p-3 max-w-md hover:cursor-pointer"
        >
          <p>Name: {name}</p>
          <p>Quantity: {quantity}</p>
          <p>Category: {category}</p>
        </div>
      </main>
    </div>
  );
}
