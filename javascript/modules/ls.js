export default class storageManager {
  put(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  get(key) {
    var string = window.localStorage.getItem(key)
    return (JSON.parse(string));
  }
}
