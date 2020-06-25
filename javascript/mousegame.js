import imageFetcher from "./modules/imageFetcher.js";
fetcher = new imageFetcher;
document.getElementById('button').addEventListener('click', function(){
  fetcher.requestImage("yellow+flower");
});
