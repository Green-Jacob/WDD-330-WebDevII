function saveStory() {
  var storyName = document.getElementById("story_name").value;
  var storyHTML = document.getElementById('story_editor').value;
  localStorage.setItem(storyName, storyHTML);
}

function loadStory() {
  var storyName = document.getElementById('story_name');
  var storyHTML = localStorage.getItem(storyName);
  document.getElementById('story_editor').value = storyHTML;
}

function displayStory() {
  var storyHTML = document.getElementById('story_editor').value;
  document.getElementById('story_display').innerHTML = storyHTML;
}
