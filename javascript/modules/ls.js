export default class storageManager {
  put(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  get(key) {
    return (JSON.parse(window.localStorage.getItem(key)));
  }
}
