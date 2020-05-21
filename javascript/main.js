class listItem {
  constructor(i, c, complete) {
    this.idNum = i;
    this.content = c;
    this.completed = complete;
  }
}

import listItem from "./modules/ToDos.js"
import storageManager from "./modules/ls.js"
import util from "./modules/utilities.js"

var utility = new util

function tryClass() {
  var lI = new listItem(12, "Hello World!", true)
  console.log(lI)
}

function showList() {
  var listArea = document.getElementById('listArea')
  var list = ""
  let listItem = '<section class="todo-item"><input type="checkbox" name="done" value="">Task Name here<button type="button" name="delete">X</button><hr><br></section>'
  for (var i = 0; i < 5; i++) {
    list += listItem
  }
  listArea.innerHTML = list;
  var buttons = document.getElementsByName('delete')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', utility.deleteItem)
  }
  var checkboxes = document.getElementsByName('done');
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', utility.checkItem)
  }
}
