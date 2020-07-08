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
    let result = game.click(o1);
    if (result == true) {
      retrieve().then((value) =>
      {
        showPictures();
        beginGame();
      });
    }
  });
  o2.addEventListener('click', function(){
    let result = game.click(o2);
    if (result == true) {
      retrieve().then((value) =>
      {
        showPictures();
        beginGame();
      });
    }
  });
  o3.addEventListener('click', function(){
    let result = game.click(o3);
    if (result == true) {
      retrieve().then((value) =>
      {
        showPictures();
        beginGame();
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
    let result = game.click(o1);
    if (result == true) {
      retrieve().then((value) =>
      {
        showPictures();
        beginGame();
      });
    }
  });
  o2.addEventListener('dblclick', function(){
    let result = game.click(o2);
    if (result == true) {
      retrieve().then((value) =>
      {
        showPictures();
        beginGame();
      });
    }
  });
  o3.addEventListener('dblclick', function(){
    let result = game.click(o3);
    if (result == true) {
      retrieve().then((value) =>
      {
        showPictures();
        beginGame();
      });
    }
  });
}

document.getElementById('button').addEventListener('click', function(){
  retrieve().then((value) =>
  {
    showPictures();
    beginDblClickGame();
  });
});
