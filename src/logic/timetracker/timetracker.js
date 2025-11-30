// Lógica para manejar entradas de tiempo
let timeEntries = [];

export const addTimeEntry = (entry) => {
  timeEntries.push(entry);
};

export const getTimeEntries = () => {
  return timeEntries;
};
