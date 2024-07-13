const base64ToFormData = (base64: string) => {
  const binaryString = window.atob(base64.split(',')[1]);
  const length = binaryString.length;
  const binaryArray = new Uint8Array(length);

  for (let i = 0; i < length; i++) {
    binaryArray[i] = binaryString.charCodeAt(i);
  }

  const blob = new Blob([binaryArray], { type: 'image/jpeg' });

  const formData = new FormData();
  formData.append('image', blob, 'image.jpg');
  return formData;
};

export default base64ToFormData;
