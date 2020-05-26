import listItem from "./ToDos.js"
export default class storageManager {
  put(key, value) {
    var string = "";
    if (Array(value)) {
      for (var i = 0; i < value.length; i++) {
        string += JSON.stringify(value[i]);
      }
    }
    window.localStorage.setItem(key, string);
  }
  get(key) {
    var list = [];
    var string = window.localStorage.getItem(key)
    var obj = JSON.parse(string);
    console.log(obj);
    return (list);
  }
}
