export default function Item({item}) {
    let {name, quantity, category} = item;
  
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
  