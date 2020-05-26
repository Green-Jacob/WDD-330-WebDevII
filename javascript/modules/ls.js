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
    console.log(string);
    JSON.parse(string, function(key, value){
      var li = new listItem;
      if (key == "idNum") {
        li.idNum = value;
      }
      if (key == "content") {
        li.content = value;
      }
      if (key == "completed") {
        li.completed = value;
      }
      list.push(li)
    });
    return (list);
  }
}
