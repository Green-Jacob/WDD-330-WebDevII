import imageFetcher from "./modules/imageFetcher.js";
const fetcher = new imageFetcher;
document.getElementById('button').addEventListener('click', function(){
  var obj
  fetcher.requestImage("yellow+flower", obj)
  console.log(obj)
});
