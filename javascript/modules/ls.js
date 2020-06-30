import listItem from "./ToDos.js"
export default class storageManager {

//puts the item into local storage
  put(key, value) {
    var string = "";
    if (Array(value)) {
      for (var i = 0; i < value.length; i++) {
        string += JSON.stringify(value[i]);
      }
      localStorage.setItem(key, string);
    }
    else {
      localStorage.setItem(key, value);
    }
  }

//gets an item from local storage
  get(key) {
    var list = [];
    var string = localStorage.getItem(key)
    if (string != null) {
      var res = string.split("}");
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
    else {
      var emptyList = [];
      let newLi = new listItem;
      emptyList.push(newLi);
      return emptyList;
    }
  }
  getImage(key){
    return localStorage.getItem(key);
  }
}
