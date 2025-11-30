import { ref, onMounted } from 'vue';
import { fetchTimeEntries } from '@/api/timetracker.js';

export function useTimeTracker() {
  const entries = ref([]);

  onMounted(async () => {
    entries.value = await fetchTimeEntries();
  });

  return { entries };
}
