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
  var o1 = document.getElementById('option1').value;
  var o2 = document.getElementById('option2').value;
  var o3 = document.getElementById('option3').value;
  var m = document.getElementsByClassName('matcherPicture')[0].value;
  var game = new Game(m., o1, o2, o3);
  o1.addEventListener('click', function(){game.click(o1)});
  o2.addEventListener('click', function(){game.click(o2)});
  o3.addEventListener('click', function(){game.click(o3)});
}

document.getElementById('button').addEventListener('click', function(){
  let retrieve = async function() { fetcher.requestImage(); }
  retrieve().then((value) =>
  {
    showPictures();
    beginGame();
  });
});
