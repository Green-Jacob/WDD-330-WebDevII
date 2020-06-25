export default class imageFetcher{
  getData(data, element)
  {
    var string = ""
    for (var i = 0; i < 3; i++) {
      var i = Math.floor(Math.random() * data.hits.length);
      var iURL = data.hits[i].webformatURL;
      string += "<img src='" + iURL + "'alt=''></br>"
    }
    element.innerHTML = string;
  }
  //free API key, secure to put into client side JS
  requestImage(string, element)
  {
    var url = "https://pixabay.com/api/?key=17090702-3e1393b7e7a169d0b54bf7628&safesearch=true";
    var search = url + "&q=" + string;
    fetch(search)
      .then(response => response.json())
      .then(data => this.getData(data, element))
      .catch((error) => {
        console.log('Error:', error);
      })
  }
}
