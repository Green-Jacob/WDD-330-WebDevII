
//on load grab the array and insert it into the page
import Render from "./render.js"
window.addEventListener("load", () => {
  var render = new Render(document);
  render.showHikeList();
});
