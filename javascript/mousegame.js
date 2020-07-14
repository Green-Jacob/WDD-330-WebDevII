import imageFetcher from "./modules/imageFetcher.js";
import storageManager from "./modules/ls.js"
import Game from "./modules/game.js"
const fetcher = new imageFetcher;
const storage = new storageManager;

let retrieve = async function() { fetcher.requestImage(); }

function showPictures() {
  var matcher = storage.getImage("match");
  var photos = storage.getImage("option1");
  photos += storage.getImage("option2");
  photos += storage.getImage("option3");
  document.getElementById('matcher').innerHTML = matcher;
  document.getElementById('photoArea').innerHTML = photos;
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
    if (result == true) {
      retrieve().then((value) =>
      {
        showPictures();
        beginClickGame();
      });
    }
  });
  o2.addEventListener('click', function(){
    let result = game.check(o2);
    if (result == true) {
      retrieve().then((value) =>
      {
        showPictures();
        beginClickGame();
      });
    }
  });
  o3.addEventListener('click', function(){
    let result = game.check(o3);
    if (result == true) {
      retrieve().then((value) =>
      {
        showPictures();
        beginClickGame();
      });
    }
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
    if (result == true) {
      retrieve().then((value) =>
      {
        showPictures();
        beginDblClickGame();
      });
    }
  });
  o2.addEventListener('dblclick', function(){
    let result = game.check(o2);
    if (result == true) {
      retrieve().then((value) =>
      {
        showPictures();
        beginDblClickGame();
      });
    }
  });
  o3.addEventListener('dblclick', function(){
    let result = game.check(o3);
    if (result == true) {
      retrieve().then((value) =>
      {
        showPictures();
        beginDblClickGame();
      });
    }
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
    event.preventDefault();
    selected = this.getAttribute("value");
  });
  o2.addEventListener('dragstart', function(event){
    event.preventDefault();
    selected = this.getAttribute("value");
  });
  o3.addEventListener('dragstart', function(event){
    event.preventDefault();
    selected = this.getAttribute("value");
  });
  m.addEventListener('dragover', function(event){
      event.preventDefault();
    });
  m.addEventListener('drop', function(event){
    event.preventDefault();
    var optionID = selected;
    var matched = false;
    if (optionID == o1.value)
    {
      matched = game.check(o1);
    }
    else if (optionID == o2.value)
    {
      matched = game.check(o2);
    }
    else
    {
      matched = game.check(o3);
    }
    debugger;
    if (matched == true)
    {
      retrieve().then((value) =>
      {
        showPictures();
        beginDragGame();
      });
    }
  });
}

document.getElementById('c_button').addEventListener('click', function(){
  retrieve().then((value) =>
  {
    showPictures();
    beginClickGame();
  });
});

document.getElementById('dc_button').addEventListener('click', function(){
  retrieve().then((value) =>
  {
    showPictures();
    beginDblClickGame();
  });
});

document.getElementById('dd_button').addEventListener('click', function(){
  retrieve().then((value) =>
  {
    showPictures();
    beginDragGame();
  });
});
