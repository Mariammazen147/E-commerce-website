import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const productCollectionRef = collection(db, "products");

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(productCollectionRef);
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error("Error fetching products: ", error);
    throw new Error("Failed to fetch products");
  }
};
