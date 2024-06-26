import { useState } from "react";

export default function ItemForm({ closeForm, addItem }) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newItem = {
      name: itemName,
      quantity: quantity,
      category: category,
    };

    addItem(newItem);
    setItemName("");
    setQuantity(1);
    setCategory("produce");
    closeForm();
  };

  const handleItemName = (e) => {
    setItemName(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div
      onClick={closeForm}
      className="h-full w-full absolute flex justify-center items-center bg-gray-950/70"
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className="max-w-md p-4 rounded-md shadow-md bg-white text-black"
      >
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="text-xl font-bold">New Item</h1>
            <input
              //   className={styledInput}
              className="w-full rounded-md mt-5 h-10 border border-indigo-600"
              type="text"
              onChange={handleItemName}
              value={itemName}
              required
              placeholder="Item name"
            />
          </div>
          <div className="flex justify-between">
            <input
              className="w-20 rounded-md mt-5 h-10 border border-indigo-600"
              type="number"
              onChange={handleQuantity}
              value={quantity}
              required
              placeholder="Quantity"
            />

            <div>
              <select
                className="rounded-md mt-5 h-10 border border-indigo-600"
                onChange={handleCategory}
                value={category}
                required
              >
                <option disabled>
                  Category
                </option>
                <option value="produce">Produce</option>
                <option value="diary">Diary</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen">Frozen Foods</option>
                <option value="canned">Canned Goods</option>
                <option value="dry">Dry Goods</option>
                <option value="snack">Snacks</option>
                <option value="house">Household</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <button
            className="bg-blue-400 w-96 hover:bg-blue-700 rounded text-white text-lg mt-5 p-1 active:bg-yellow-300 mb-5"
          >
            +
          </button>
        </form>
      </section>
    </div>
  );
}
