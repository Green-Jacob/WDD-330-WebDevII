class storageManager {

  put(key, value) {
    window.localStorage.setItem(key, value);
  }

  get(key) {
    return (window.localStorage.getItem(key));
  }
}
