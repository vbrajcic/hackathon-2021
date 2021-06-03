export const convertFileToBase64 = (file?: File) =>
  new Promise<string | null | ArrayBuffer>((resolve, reject) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    } else {
      resolve(null);
    }
  });
