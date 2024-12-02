window.myLocalStorage = {
  getItem(key) {
    return localStorage.getItem(key);
  },

  setItem(key, value, maxAge) {
    localStorage.setItem(key, value);

    if (maxAge === 0) {
      localStorage.removeItem(key);
    } else if (maxAge > 0) {
      setTimeout(() => {
        localStorage.removeItem(key);
      }, maxAge);
    }
  },

  removeItem(key) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  },
};
