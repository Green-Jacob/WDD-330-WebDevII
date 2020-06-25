import imageFetcher from "./modules/imageFetcher.js";
document.getElementById('button').addEventListener('click', function(){
  fetcher = new imageFetcher;
  fetcher.requestImage("yellow+flower");
});
