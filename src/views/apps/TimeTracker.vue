<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Time Tracker</h1>
    <ul>
      <li v-for="entry in entries" :key="entry.id" class="mb-2 p-2 border rounded">
        {{ entry.task }} - {{ entry.hours }} horas
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTimeTracker } from '@/composables/useTimeTracker.js';
const { entries } = useTimeTracker();
</script>
