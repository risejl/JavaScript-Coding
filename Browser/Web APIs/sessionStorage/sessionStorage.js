function sessionStorageSize() {
  let total = 0;

  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);

    const keySize = new Blob([key]).size;
    const valueSize = new Blob([value]).size;

    total += keySize + valueSize;
  }

  return (total / (1024 * 1024)).toFixed(2);
}
