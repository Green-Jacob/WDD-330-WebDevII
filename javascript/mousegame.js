import imageFetcher from "./modules/imageFetcher.js";
import storageManager from "./modules/ls.js"
import Game from "./modules/game.js"
const fetcher = new imageFetcher;
const storage = new storageManager;

function showPictures() {
  var matcher = storage.getImage("match");
  var photos = storage.getImage("option1");
  photos += storage.getImage("option2");
  photos += storage.getImage("option3");
  document.getElementById('matcher').innerHTML = matcher;
  document.getElementById('photoArea').innerHTML = photos;
}

function beginGame()
{
  var o1 = document.getElementById('option1');
  var o2 = document.getElementById('option2');
  var o3 = document.getElementById('option3');
  var m = document.getElementsByClassName('matcherPicture')[0];
  var game = new Game(m.value, o1.value, o2.value, o3.value);
  o1.addEventListener('click', function(){game.click(o1.value)});
  o2.addEventListener('click', function(){game.click(o2.value)});
  o3.addEventListener('click', function(){game.click(o3.value)});
}

document.getElementById('button').addEventListener('click', function(){
  let retrieve = async function() { fetcher.requestImage(); }
  retrieve().then((value) =>
  {
    showPictures();
    beginGame();
  });
});
