import listItem from "./ToDos.js"
export default class storageManager {
  put(key, value) {
    var string = "";
    if (Array(value)) {
      for (var i = 0; i < value.length; i++) {
        string += JSON.stringify(value[i]);
      }
    }
    localStorage.setItem(key, string);
  }
  get(key) {
    var list = [];
    var string = localStorage.getItem(key)
    var res = string.split("}");
    if (!false) {
      for (var i = 0; i < res.length; i++) {
        var str = (res[i] + "}");
        if (str != "}") {
          let li = new listItem;
          let obj = JSON.parse(str);
          li.idNum = obj.idNum;
          li.content = obj.content;
          li.completed = obj.completed;
          list.push(li);
        }
      }
      return (list);
    }
  }
}
