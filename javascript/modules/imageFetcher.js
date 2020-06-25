export default class imageFetcher{
  //free API key, secure to put into client side JS
  requestImage(string)
  {
    var url = "https://pixabay.com/api/?key=17090702-3e1393b7e7a169d0b54bf7628&safesearch=true";
    var search = url + "&q=" + string;
    fetch(search)
      .then(response => response.json())
      .then(data => console.log(data));
      .catch((error) => {
        console.error('Error:', error);
      }
}
