import imageFetcher from "./modules/imageFetcher.js";
const fetcher = new imageFetcher;
document.getElementById('button').addEventListener('click', function(){
  fetcher.requestImage("yellow+flower", document.getElementById('photoArea'))
});
