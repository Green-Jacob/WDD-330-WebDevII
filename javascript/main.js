import listItem from "./modules/ToDos.js"
import storageManager from "./modules/ls.js"
import util from "./modules/utilities.js"

var utility = new util;
var storage = new storageManager;
const ListName = "TodoList";
var masterList = [];

function bindItems() {
  var buttons = document.getElementsByName('delete')
  for (var i = 0; i < buttons.length; i++)
  {
    buttons[i].addEventListener('click', function(){
      masterList = utility.deleteItem(this.value, masterList);
      showList();
      saveList();
    });
  }
  var checkboxes = document.getElementsByName('done');
  for (var i = 0; i < checkboxes.length; i++)
  {
    checkboxes[i].addEventListener('click', function(){
      masterList = utility.checkItem(this.value, masterList);
      showList();
      saveList();
    });
  }
}

function showFilteredList(list)
{
  var listArea = document.getElementById('listArea')
  listArea.innerHTML = utility.stringify(list);
  bindItems();
}

function showList() {
  var listArea = document.getElementById('listArea')
  listArea.innerHTML = utility.stringify(masterList);
  bindItems();
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
  showList();
  saveList();
}
document.body.addEventListener("load", getList())
document.body.addEventListener("unload", saveList())
document.getElementById('addItem').addEventListener("click", addItem)
