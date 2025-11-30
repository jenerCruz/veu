import { ref } from 'vue';
import { addTimeEntry, getTimeEntries } from './timeEntries.js';

export function useTimeTracker() {
  const entries = ref(getTimeEntries());

  const addEntry = (entry) => {
    addTimeEntry(entry);
    entries.value = getTimeEntries();
  };

  return { entries, addEntry };
}
