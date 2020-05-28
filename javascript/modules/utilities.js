import listItem from "./ToDos.js"
export default class util{
  deleteItem(id, list) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].idNum == id) {
        list[i] = new listItem;
      }
    }
    return list;
  }
  checkItem(id, list){
    for (var i = 0; i < list.length; i++) {
      if (list[i].idNum == id) {
        if (list[i].completed) {
          list[i].completed = false;
        }
        else
        {
          list[i].completed = true;
        }
      }
    }
    return list;
  }

  stringify(list) {
    var s = "";
    for (var i = 0; i < list.length; i++) {
      var li = list[i];
      if (li.idNum == undefined) {
        continue;
      }
      s += '<section class="todo-item">'
      s += '<input type="checkbox" name="done"'
      s += ' value="' + li.idNum + '"'
      if (li.completed == false) {
        s += '>'
      }
      else {
        s += 'checked>'
      }
      s += li.content;
      s += '<button type="button" name="delete"'
      s += ' value="' + li.idNum + '"'
      s += '>X</button><hr><br></section>'
    }
    return s;
  }
}
