//This script adds three products to the firebase

const { db, collection, addDoc } = require("../config/firebaseConfig");

const addProducts = async (products) => {
  try {
    for (const product of products) {
      const docRef = await addDoc(collection(db, "products"), product);
      console.log("Document written with ID: ", docRef.id);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const products = [
  {
    name: "Product 1",
    price: 19.99,
    description: "Description for Product 1",
    imageURL: "https://example.com/product1.jpg",
  },
  {
    name: "Product 2",
    price: 29.99,
    description: "Description for Product 2",
    imageURL: "https://example.com/product2.jpg",
  },
  {
    name: "Product 3",
    price: 39.99,
    description: "Description for Product 3",
    imageURL: "https://example.com/product3.jpg",
  },
];

addProducts(products);
