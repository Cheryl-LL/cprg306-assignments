"use client"

import { useState } from "react";
import ItemForm from "./form";

export default function NewItem() {
    return (

        <div>
                <h1 className="m-5 text-xl font-bold">New Item</h1>
                <div className="m-5">
                <ItemForm />
                </div>

        </div>

    );
}