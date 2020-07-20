import imageFetcher from "./modules/imageFetcher.js";
import storageManager from "./modules/ls.js"
import Game from "./modules/game.js"
const fetcher = new imageFetcher;
const storage = new storageManager;

let retrieve = async function() { fetcher.requestImage(); }

var matchCounter = 0;
var goal = 0;

function setGoal(string)
{
  goal = 0;
  matchCounter = 0;
  goal = parseInt(window.prompt(string, "10"));
  if (isNaN(goal))
  {
    goal = 10;
  }
}

function updateGoal()
{
  var bar = document.getElementsByClassName('progress-bar')[0];
  var total = (matchCounter / goal) * 100;
  var string = "width: " + total + "%"
  bar.setAttribute("style", string);
  if (matchCounter >= goal)
  {
    setGoal("You did it! Now set a new goal.");
  }
}

function showPictures() {
  var matcher = storage.getImage("match");
  var photos = storage.getImage("option1");
  photos += storage.getImage("option2");
  photos += storage.getImage("option3");
  document.getElementById('matcher').innerHTML = matcher;
  document.getElementById('photoArea').innerHTML = photos;
}

function showResult(result, nextFunction)
{
  var message = document.getElementById('messageCenter');
  var matches = document.getElementById('matchCount');
  if (result)
  {
    message.innerHTML = "<h3>Match! Now the next one.</h3>";
    matchCounter++;
    updateGoal();
    matches.innerHTML = (matchCounter + " out of " + goal);
    retrieve().then((value) =>
    {
      showPictures();
      nextFunction();
    });
  }
  else
  {
    message.innerHTML = "<h3>Try again. You can do it!</h3>"
  }
}

function beginClickGame()
{
  var o1 = document.getElementById('option1');
  var o2 = document.getElementById('option2');
  var o3 = document.getElementById('option3');
  var m = document.getElementsByClassName('matcherPicture')[0];
  var game = new Game(m, o1, o2, o3);
  o1.addEventListener('click', function(){
    let result = game.check(o1);
    showResult(result, beginClickGame);
  });
  o2.addEventListener('click', function(){
    let result = game.check(o2);
    showResult(result, beginClickGame);
  });
  o3.addEventListener('click', function(){
    let result = game.check(o3);
    showResult(result, beginClickGame);
  });
}

function beginDblClickGame()
{
  var o1 = document.getElementById('option1');
  var o2 = document.getElementById('option2');
  var o3 = document.getElementById('option3');
  var m = document.getElementsByClassName('matcherPicture')[0];
  var game = new Game(m, o1, o2, o3);
  o1.addEventListener('dblclick', function(){
    let result = game.check(o1);
    showResult(result, beginDblClickGame);
  });
  o2.addEventListener('dblclick', function(){
    let result = game.check(o2);
    showResult(result, beginDblClickGame);
  });
  o3.addEventListener('dblclick', function(){
    let result = game.check(o3);
    showResult(result, beginDblClickGame);
  });
}

function beginDragGame()
{
  var o1 = document.getElementById('option1');
  var o2 = document.getElementById('option2');
  var o3 = document.getElementById('option3');
  var m = document.getElementsByClassName('matcherPicture')[0];
  var selected = "";
  var game = new Game(m, o1, o2, o3);
  o1.setAttribute('draggable', true);
  o2.setAttribute('draggable', true);
  o3.setAttribute('draggable', true);
  o1.addEventListener('dragstart', function(event){
    selected = this.getAttribute("value");
  });
  o2.addEventListener('dragstart', function(event){
    selected = this.getAttribute("value");
  });
  o3.addEventListener('dragstart', function(event){
    selected = this.getAttribute("value");
  });
  m.addEventListener('dragover', function(event){
      event.preventDefault();
    });
  m.addEventListener('drop', function(event){
    event.preventDefault();
    var optionID = selected;
    var matched = false;
    if (optionID == o1.getAttribute("value"))
    {
      matched = game.check(o1);
    }
    else if (optionID == o2.getAttribute("value"))
    {
      matched = game.check(o2);
    }
    else
    {
      matched = game.check(o3);
    }
    showResult(matched, beginDragGame);
  });
}

document.getElementById('c_button').addEventListener('click', function(){
  matchCounter = 0;
  document.getElementById('matchCount').innerHTML = matchCounter;
  document.getElementById('messageCenter').innerHTML = "Click the match.";
  setGoal("How many matches will you make?");
  updateGoal();
  retrieve().then((value) =>
  {
    showPictures();
    beginClickGame();
  });
});

document.getElementById('dc_button').addEventListener('click', function(){
  matchCounter = 0;
  document.getElementById('matchCount').innerHTML = matchCounter;
  document.getElementById('messageCenter').innerHTML = "Double Click the match.";
  setGoal("How many matches will you make?");
  updateGoal();
  retrieve().then((value) =>
  {
    showPictures();
    beginDblClickGame();
  });
});

document.getElementById('dd_button').addEventListener('click', function(){
  matchCounter = 0;
  document.getElementById('matchCount').innerHTML = matchCounter;
  document.getElementById('messageCenter').innerHTML = "Drag and Drop the match.";
  setGoal("How many matches will you make?");
  updateGoal();
  retrieve().then((value) =>
  {
    showPictures();
    beginDragGame();
  });
});
