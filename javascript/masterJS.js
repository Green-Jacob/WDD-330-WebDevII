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

const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

if (document.getElementById('header').value == "week2") { //Make sure it only runs on week 2
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
          if(response === answer){
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
  start(quiz);
}
