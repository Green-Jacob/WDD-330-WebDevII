import imageFetcher from "./modules/imageFetcher.js";
const fetcher = new imageFetcher;
document.getElementById('button').addEventListener('click', function(){
  var obj = []
  obj = fetcher.requestImage("yellow+flower")
  debugger
  console.log(obj);
});
