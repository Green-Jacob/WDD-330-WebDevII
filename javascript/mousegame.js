import imageFetcher from "./modules/imageFetcher.js";
document.body.addEventListener('load', function(){
  fetcher = new imageFetcher;
  fetcher.requestImage("yellow+flower");
});
