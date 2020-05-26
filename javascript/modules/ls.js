import listItem from "./ToDos.js"
export default class storageManager {
  put(key, value) {
    var string = "";
    if (Array(value)) {
      forEach((value, i) => {
        string += JSON.stringify(i);
      });
    }
    window.localStorage.setItem(key, string);
  }
  get(key) {
    var list = [];
    var string = window.localStorage.getItem(key)
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
