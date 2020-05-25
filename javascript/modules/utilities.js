export default class util{
  deleteItem() {
    console.log("Button working!");
  }
  checkItem(){
    console.log("Check working!");
  }

  stringify(list) {
    var s = "";
    forEach((list, i) => {
      s += '<section class="todo-item">'
      s += '<input type="checkbox" name="done" value=""'
      if (i.completed == false) {
        s += '>'
      }
      else {
        s += 'checked>'
      }
      s += i.content;
      s += '<button type="button" name="delete">X</button><hr><br></section>'
    });
    return s;
  }
}
