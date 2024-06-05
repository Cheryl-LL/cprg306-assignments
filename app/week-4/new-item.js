"use client"

import { useState } from "react";
import ItemForm from "./form";

export default function NewItem() {

    // const [itemName, setItemName] = useState("");
    //   const [quantity, setQuantity] = useState(0);
    //   const [category, setCategory] = useState();
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    
    //     let newItem = {
    //       name: itemName,
    //       quant: quantity,
    //       cat: category,
    //     };
    
    //     alert(
    //       `${newItem.name} in ${newItem.cat} is added with ${newItem.quant} quantity`
    //     );
    
    //     setItemName("");
    //     setQuantity(0);
    //     setCategory("");
    //   };
    
    //   const handleItemName = (e) => {
    //     setItemName(e.target.value);
    //   };
    
    //   const handleQuantity = (e) => {
    //     setQuantity(e.target.value);
    //   };
    
    //   const handleCategory = (e) => {
    //     setCategory(e.target.value);
    //   };

    return (

        <div>
                <h1 className="m-5 text-xl font-bold">New Item</h1>
                <div className="m-5">
                <ItemForm />
                </div>

        </div>

    );
}