export default class imageFetcher{
  searches = [
    "yellow+flower",
    "red+car",
    "orange+toy",
    "fruit",
    "fruit+bowl",
    "green+frog",
    "lion",
    "blue+lake",
    "NASA+rocket",
    "brown+bear",
    "panda+black"
  ]
  getData(data, element)
  {
    var string = ""
    for (var i = 0; i < 3; i++) {
      var n = Math.floor(Math.random() * data.hits.length);
      var iURL = data.hits[n].webformatURL;
      string += "<img src='" + iURL + "'alt=''></br>"
    }
    element.innerHTML = string;
  }
  //free API key, secure to put into client side JS
  requestImage(element)
  {
    var url = "https://pixabay.com/api/?key=17090702-3e1393b7e7a169d0b54bf7628&safesearch=true";
    var string = Math.floor(Math.random() * this.searches.length);
    debugger;
    var search = url + "&q=" + string;
    fetch(search)
      .then(response => response.json())
      .then(data => this.getData(data, element))
      .catch((error) => {
        console.log('Error:', error);
      })
  }
}
