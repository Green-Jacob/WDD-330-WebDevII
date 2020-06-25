export default class imageFetcher{
  //free API key, secure to put into client side JS
  var url = "https://pixabay.com/api/?key=17090702-3e1393b7e7a169d0b54bf7628&safesearch=true";
  requestImage(string)
  {
    var search = url + "&q=" + string;
    fetch(search)
      .then(response => response.json())
      .then(data => console.log(data);)
  }
}
