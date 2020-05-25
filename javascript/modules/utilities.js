export default class util{
  deleteItem() {
    console.log("Button working!");
  }
  checkItem(){
    console.log("Check working!");
  }

  stringify(list) {
    var s = "";
    for (var i = 0; i < list.length; i++) {
      var li = list[i];
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
