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
    console.log(res[0].concat("}"));
    if (!false) {
      for (var i = 0; i < res.length; i++) {
        var str = res[i];
        debugger
        let li = new listItem;
        let obj = JSON.parse(str[i].concat("}"));
        li.idNum = obj.idNum;
        li.content = obj.content;
        li.completed = obj.completed;
        list.push(li);
      }
      return (list);
    }
  }
}
