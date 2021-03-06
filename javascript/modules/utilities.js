import listItem from "./ToDos.js"
export default class util{
  // counts the incomplete items
  countTodo(list)
  {
    var count = 0;
    for (var i = 0; i < list.length; i++)
    {
      if (list[i].completed != undefined)
      {
        if (list[i].completed == false) {
          count++;
        }
      }
    }
    var string = count;
    if (count <= 0) {
      string = "No tasks left"
    }
    else if (count > 1)
    {
      string += " tasks left"
    }
    else
    {
      string += " task left "
    }
    return string;
  }

//removes an item by making it a blank todo object
  deleteItem(id, list) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].idNum == id) {
        list[i] = new listItem;
      }
    }
    return list;
  }

//sets the todo items completed bool
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

//returns a string loaded with HTML elements from the passed array
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
        s += li.content;
        s += '<button type="button" name="delete"'
        s += ' value="' + li.idNum + '"'
        s += '>X</button><hr><br></section>'
      }
      else {
        s += 'checked><s>'
        s += li.content;
        s += '</s><button type="button" name="delete"'
        s += ' value="' + li.idNum + '"'
        s += '>X</button><hr><br></section>'
      }
    }
    return s;
  }

//returns an array of incomplete items
  filterActive(list) {
    var filtered = [];
    var fIndex = 0;
    for (var i = 0; i < list.length; i++) {
      if (list[i].completed != undefined)
      {
        if (list[i].completed == false)
        {
          filtered[fIndex] = list[i];
          fIndex++;
        }
      }
    }
    return filtered;
  }

//returns an array of completed items
  filterCompleted(list) {
    var filtered = [];
    var fIndex = 0;
    for (var i = 0; i < list.length; i++) {
      if (list[i].completed != undefined)
      {
        if (list[i].completed == true)
        {
          filtered[fIndex] = list[i];
          fIndex++;
        }
      }
    }
    return filtered;
  }
}
