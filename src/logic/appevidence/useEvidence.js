import { ref } from 'vue';
import { uploadFile, getFiles } from './files.js';

export function useEvidence() {
  const fileList = ref(getFiles());

  const uploadNewFile = (file) => {
    uploadFile(file);
    fileList.value = getFiles();
  };

  return { fileList, uploadNewFile };
}
