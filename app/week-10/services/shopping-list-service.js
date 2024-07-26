import { db } from "../utils/firebase";
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";

// Function to add an item to Firestore
export async function addItem(userId, shoppingItem) {
  try {
    const newShoppingItemReference = collection(db, "users", userId, "items");
    const newShoppingItemPromise = await addDoc(newShoppingItemReference, shoppingItem);
    return newShoppingItemPromise.id;
  } catch (error) {
    console.log('Error adding item:', error);
  }
}

// Function to get items from Firestore
export async function getItems(userId) {
  try {
    const collectionReference = collection(db, "users", userId, "items");
    const querySnapshot = await getDocs(collectionReference);
    let shoppingItemList = [];
    querySnapshot.forEach((doc) => {
      let thisItem = {
        id: doc.id,
        ...doc.data(),
      };
      shoppingItemList.push(thisItem);
    });
    return shoppingItemList;
  } catch (error) {
    console.log('Error fetching items:', error);
  }
}