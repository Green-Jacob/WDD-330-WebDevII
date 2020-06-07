var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/') + 1);//checks the file name
const quiz = [
    ["How many living Apostles prefer their middle name?","2"],
    ["What was President Nelson's occupation?","heart surgeon"],
    ["How many new temples were announced in the April 2020 General Conference?","8"],
    ["Which announced temple was a result of an invitation from the country's government?","Dubai"]
];//for week 2 examples

/*Start of week 1*/
if (filename.localeCompare("examples.html") == 0) {
  function saveStory() {
    var storyName = document.getElementById("story_name").value;
    var storyHTML = document.getElementById('story_editor').value;
    console.log(storyHTML);
    localStorage.setItem(storyName, storyHTML);
  }

  function loadStory() {
    var storyName = document.getElementById('story_name');
    var storyHTML = localStorage.getItem(storyName);
    console.log(storyHTML);
    document.getElementById('story_editor').value = storyHTML;
  }

  function displayStory() {
    var storyHTML = document.getElementById('story_editor').value;
    document.getElementById('story_display').innerHTML = storyHTML;
  }
}

 /*Start of Week 2*/
if (filename.localeCompare("examples_week2.html") == 0) {

  function start(quiz){
      let score = 0;
      // main game loop
      for(const [question,answer] of quiz){
          const response = ask(question);
          check(response,answer);
      }

      // end of main game loop
      gameOver();
      // function declarations
      function ask(question){
          return prompt(question);
      }

      function check(response,answer){
          if(response.toLowerCase() === answer.toLowerCase()){ //ignore the case from the user.
          alert('Correct!');
          score++;
          } else {
          alert(`Wrong! The correct answer was ${answer}`);
          }
      }

      function gameOver(){
          alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
      }
  }

  //Mad libs machine example

  var words = [];
  var i = 0;
  const prompts = [
    "name", "adjective", "small animal"
  ]

  function showResult() {
    let resultText = words[0] + " adopted a(n) " + words[1] + " " + words[2] + ".";
    document.getElementById("result").innerHTML = resultText;
  }

  function getInput() {
    let word = document.getElementById('input').value;
    words.push(word);
    if (i < prompts.length) {
      showNextPrompt();
    }
    else {
      showResult();
    }
  }

  function showNextPrompt() {
    let p = prompts[i];
    let promptText = "Enter a(n) ".concat(p);
    document.getElementById("prompt").innerHTML = promptText;
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
    i++;
  }

  function startMadLibs() {
    i = 0;
    showNextPrompt();
    words = [];
  }
  startMadLibs();
}//end of week 2

 //Start of week 3
if (filename.localeCompare("examples_week3.html") == 0)
{
  //objects containing CSS values
  const obj1 = {
    color: 'red',
    size: '2em',
    font: 'cursive',
    backgroundColor: 'Brown',
    border: 'DarkGreen 3px solid'
  }
  const obj2 = {
    color: 'IndianRed',
    size: '2rem',
    font: 'monospace',
    backgroundColor: 'MediumOrchid',
    border: 'Navy 10px groove'
  }
  const obj3 ={
    color: 'MediumSpringGreen',
    size: '12px',
    font: 'sans=serif',
    backgroundColor: '#66CDAA',
    border: 'Khaki 5px dotted'
  }
  const obj4 ={
    color: 'FA8072',
    size: '25px',
    font: 'sans=serif',
    backgroundColor: 'rgb(240,248,255)',
    border: 'Teal 7px dashed'
  }

  //array of the CSS objects
  var objects = [obj1, obj2, obj3, obj4];
  //returns an object from the array at random index
  function randObj() {
    let num = Math.floor(Math.random() * 4);
    return objects[num];
  }
  //each CSS property is assigned a new value from a random object
  function newStyle(element) {
    element.style['color'] = randObj().color;
    element.style['font-size'] = randObj().size;
    element.style.fontFamily = randObj().font;
    element.style.backgroundColor = randObj().backgroundColor;
    element.style.border = randObj().border;
    }
  //eventListeners registered
  document.getElementById('clickMe').addEventListener("click", function(){
    newStyle(document.getElementById('clickMe'));
  });
  document.getElementById('doubleClickMe').addEventListener("dblclick", function(){
    newStyle(document.getElementById('doubleClickMe'));
  });
  document.getElementById('mouseOverMe').addEventListener("mouseover", function(){
    newStyle(document.getElementById('mouseOverMe'));
  });
}//end of week 3

//Start of week 4
if (filename.localeCompare("examples_week4.html") == 0)
{

  var racers = [];
  var i = 0;

  function showRacers(){
    let pList = "";
    for (var i = 0; i < racers.length; i++) {
      pList += racers[i].display();
    }
    document.getElementById("racerList").innerHTML = pList;
  }

  function addRacer() {
    var form = document.getElementsByTagName('form')[0];
    let racer = new Racer();
    racer.name = form.racerName.value;
    racer.gender = form.racerGender.value;
    racer.race = form.race.value;
    racer.idNum = 100 + i;
    racers[i] = racer;
    i++;
    showRacers();
  }
  document.getElementById('addRacer').addEventListener('click', addRacer);
}//end week 4

//begin week 5
if (filename.localeCompare("examples_week5.html") == 0){
  console.log("This is a log.");
  var string = "This is a string variable passed to console."
  console.log(string);
  console.log("Now call the function testDebug()");
  function testDebug() {
    var i = Math.floor(Math.random() * 100);
    //now check the variable then continue
    debugger;
    console.log(i);
  }
}//end week 5

//begin week 7
if (filename.localeCompare("examples_week7.html") == 0){
  function showReponse(obj) {
    if (obj == null) {
      return;
    }
    else
    {
      var str = "<h2>Weather in " + obj.name + ", " + obj.sys.country + "</h2>";
      str += "Current Temperature:</br>";
      str += "Temperature " + obj.main.temp + "</br>";
      str += "Humidity " + obj.main.humidity + "</br>"
      str += "Feels like " + obj.main.feels_like + "</br><hr>";
      str += "Current Weather:</br>";
      str += "Conditions: " + obj.weather[0].description + "</br>"
      str += "Wind: " + obj.wind.speed + " mph </br>"
      document.getElementById('response').innerHTML = str;
    }
  }

  function convert(json) {
    var obj = JSON.parse(json);
    console.log(obj);
    showReponse(obj);
  }

  function getWeather(search) {
    //This API key is for a completely free service which has no billing information
    //Zero risk in putting it in this file.
    var url = "https://api.openweathermap.org/data/2.5/weather?APPID=6b208c0783e3933802dae752c93278a8"
    if (isNaN(search)) {
      url += "&q=" + search +"&units=imperial"
    }
    else {
      url += "&zip=" + search +"&units=imperial"
    }
    fetch(url)
    .then((response) => {
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then( response => response.text() )
    .then(text => convert(text))
    .catch( error => document.getElementById('response').innerHTML = "Not found. Try again." )
  }

  document.getElementById('find').addEventListener("click", function(){
    getWeather(document.getElementById('search').value);
  });
}
