// Lógica para manejar archivos
let files = [];

export const uploadFile = (file) => {
  files.push(file);
};

export const getFiles = () => {
  return files;
};
