export default class imageFetcher{
  constructor()
  {
    var a = []
  }
  getData(data)
  {
    return data.hits;
  }
  //free API key, secure to put into client side JS
  requestImage(string)
  {
    var url = "https://pixabay.com/api/?key=17090702-3e1393b7e7a169d0b54bf7628&safesearch=true";
    var search = url + "&q=" + string;
    fetch(search)
      .then(response => response.json())
      .then(data => this.a = this.getData(data))
      .catch((error) => {
        console.log('Error:', error);
      })
      console.log(this.a);
  }
}
