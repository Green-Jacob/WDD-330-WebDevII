import storageManager from "./ls.js"
export default class imageFetcher{
  getData(data, element)
  {
    var storage = new storageManager;
    var string = ""
    var r = Math.floor(Math.random() * 4);
    var n = Math.floor(Math.random() * data.hits.length)
    for (var i = 0; i < 3; i++) {
      var iURL = data.hits[n].webformatURL
      string = "<img src='" + iURL + "'alt=''></br>"
      var option = "option" + (i + 1);
      if (i == r)
      {
        storage.putImage("match", string)
      }
      storage.putImage(option, string)
      var previous = n;                 //make sure we don't get duplicates
      while (previous == n) {
        n = Math.floor(Math.random() * data.hits.length)
      }
    }
  }
  //free API key, secure to put into client side JS
  requestImage()
  {
    const searches = [
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
    var url = "https://pixabay.com/api/?key=17090702-3e1393b7e7a169d0b54bf7628&safesearch=true";
    var string = searches[Math.floor(Math.random() * searches.length)];
    var search = url + "&q=" + string;
    fetch(search)
      .then(response => response.json())
      .then(data => this.getData(data))
      .catch((error) => {
        console.log('Error:', error);
      });
    return "Good.";
  }
}
