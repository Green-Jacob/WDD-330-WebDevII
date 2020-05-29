import listItem from "./modules/ToDos.js"
import storageManager from "./modules/ls.js"
import util from "./modules/utilities.js"

var utility = new util;
var storage = new storageManager;
const ListName = "TodoList";
var masterList = [];

//connects the generated buttons and checkboxes to funcitons
function bindItems() {
  var buttons = document.getElementsByName('delete')
  for (var i = 0; i < buttons.length; i++)
  {
    buttons[i].addEventListener('click', function(){
      masterList = utility.deleteItem(this.value, masterList);
      showList(masterList);
      saveList();
    });
  }
  var checkboxes = document.getElementsByName('done');
  for (var i = 0; i < checkboxes.length; i++)
  {
    checkboxes[i].addEventListener('click', function(){
      masterList = utility.checkItem(this.value, masterList);
      showList(masterList);
      saveList();
    });
  }
}

//displays the passed list
function showList(list) {
  var listArea = document.getElementById('listArea')
  listArea.innerHTML = utility.stringify(list);
  bindItems();
  document.getElementById('number_left').innerHTML = utility.countTodo(list);
}

//retrieves list from storage
function getList() {
  if (storage.get(ListName) != null) {
    masterList = storage.get(ListName);
    showList(masterList);
  }
}

//saves list to storage
function saveList() {
  storage.put(ListName, masterList);
}

//adds a todo item to the list
function addItem() {
  var contents = document.getElementById('newTask').value;
  var item = new listItem(Date.now(), contents, false);
  masterList.push(item);
  showList(masterList);
  saveList();
}

//event listeners for the document
document.body.addEventListener("load", getList())
document.body.addEventListener("unload", saveList())
document.getElementById('addItem').addEventListener("click", addItem)
document.getElementById('all').addEventListener("click", function(){
  showList(masterList);
});
document.getElementById('active').addEventListener("click", function(){
  showList(utility.filterActive(masterList));
});
document.getElementById('completed').addEventListener("click", function(){
  showList(utility.filterCompleted(masterList));
});
