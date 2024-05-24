export default function Item({item}) {
  let {name, quantity, category} = item;

  return (
    <div>
          <main>
            <div className="text-red-300 bg-slate-800 border border-cyan-100 m-5 p-5">
              <p>Name: {name}</p>
              <p>Quantity: {quantity}</p>
              <p>Category: {category}</p>
            </div>
        </main>
    </div>  
  );
}
