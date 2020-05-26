import listItem from "./modules/ToDos.js"
import storageManager from "./modules/ls.js"
import util from "./modules/utilities.js"

var utility = new util;
var storage = new storageManager;
const ListName = "TodoList";
var masterList = [];

function showList() {
  var listArea = document.getElementById('listArea')
  listArea.innerHTML = utility.stringify(masterList);
  var buttons = document.getElementsByName('delete')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', utility.deleteItem)
  }
  var checkboxes = document.getElementsByName('done');
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', utility.checkItem)
  }
}

function getList() {
  if (storage.get(ListName) != null) {
    masterList = storage.get(ListName);
    showList();
  }
}
function saveList() {
  storage.put(ListName, masterList);
}

function addItem() {
  var contents = document.getElementById('newTask').value;
  var item = new listItem(Date.now(), contents, false);
  masterList.push(item);
  console.log(masterList);// DEBUG:
  showList();
  saveList();
}
document.body.addEventListener("load", getList())
document.body.addEventListener("unload", saveList())
document.getElementById('addItem').addEventListener("click", addItem)
