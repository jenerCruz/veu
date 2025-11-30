import { ref } from 'vue';
import { addProduct, getProducts } from './products.js';

export function useSales() {
  const productList = ref(getProducts());

  const addNewProduct = (product) => {
    addProduct(product);
    productList.value = getProducts();
  };

  return { productList, addNewProduct };
}
