import listItem from "./ToDos.js"
export default class storageManager {
  put(key, value) {
    var string = "";
    if (Array(value)) {
      for (var i = 0; i < value.length; i++) {
        string += JSON.stringify(value[i]);
      }
    }
    console.log(string);
    localStorage.setItem(key, string);
  }
  get(key) {
    var list = [];
    var string = localStorage.getItem(key)
    var res = string.split("}");
    if (res.length > 0) {
      for (var i = 0; i < res.length; i++) {
        let li = new listItem;
        let obj = JSON.parse(res[i].concat("}"));
        li.idNum = obj.idNum;
        li.content = obj.content;
        li.completed = obj.completed;
        list.push(li);
      }
      return (list);
    }
  }
}
