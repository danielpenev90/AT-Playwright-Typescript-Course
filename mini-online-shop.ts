// Steps
// 1.Create an interface Product with the following fields:
// name: string
// price: number
// category: "food" | "clothes" | "electronics"
// 2.Create a type Category with the possible categories (food, clothes, electronics)
// 3.Create an interface Customer with the following fields:
// name: string
// email: string
// cart: Product[] — an array containing the products in the customer’s cart
// 4. Create two example products (e.g., an apple and a T-shirt).
// 5. Create one customer who has both products

type Category = "food" | "clothes" | "electronics";

interface Product {
  name: string;
  price: number;
  category: Category;
}

interface Customer {
  name: string;
  email: string;
  cart: Product[];
}

const apple: Product = { name: "Apple", price: 2, category: "food" };
const tShirt: Product = { name: "T-Shirt", price: 20, category: "clothes" };
const laptop: Product = { name: "Laptop", price: 1000, category: "electronics" };
const headphones: Product = { name: "Headphones", price: 100, category: "electronics" };

const products: Product[] = [apple, tShirt, laptop, headphones];

const customer: Customer = {
  name: "Mladen Petrov",
  email: "mladen@email.com",
  cart: products,
};
// add second customer
const customer2: Customer = {
  name: "Ana Markovic",
  email: "ana@email.com",
  cart: [laptop, headphones],
};

// add function displayCart - display cart customer name and products
function displayCart(customer: Customer) {
  console.log(`Cart for ${customer.name}:`);
  customer.cart.forEach((product) => {
    console.log(`- ${product.name} ($${product.price})`);
  });
}

// add function filterByCategory - receive products and category as parameters and filter the products by given category
function filterByCategory(products: Product[], category: Category): Product[] {
  return products.filter((product) => product.category === category);
}

// add function calculateTotalPrice - receive customer data and combine all products price
function calculateTotalPrice(customer: Customer): number {
  return customer.cart.reduce((total, product) => total + product.price, 0);
}

export {};

