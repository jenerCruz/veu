<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Productos</h1>
    <ul>
      <li v-for="product in products" :key="product.id" class="mb-2 p-2 border rounded">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useSales } from '@/composables/useSales.js';
const { products } = useSales();
</script>
