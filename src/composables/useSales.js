import { ref, onMounted } from 'vue';
import { fetchProducts } from '@/api/sales.js';

export function useSales() {
  const products = ref([]);

  onMounted(async () => {
    products.value = await fetchProducts();
  });

  return { products };
}
