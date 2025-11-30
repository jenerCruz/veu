// Lógica para manejar productos
let products = [];

export const addProduct = (product) => {
  products.push(product);
};

export const getProducts = () => {
  return products;
};
