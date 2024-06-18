export default function ItemCard({foodItem}) {
    const {name, quantity, category} = foodItem;
  
    return (
      <div>
            <main>
              <div className="text-red-300 bg-slate-800 border border-cyan-100 mt-3 p-3 max-w-md">
                <p>Name: {name}</p>
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
              </div>
          </main>
      </div>  
    );
  }
  