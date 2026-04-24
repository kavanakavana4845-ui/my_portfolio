console.log("kavana it is working!")
// Step A: grab the button
const themeBtn = document.querySelector('#theme-btn')

// Step B: listen for click
themeBtn.addEventListener('click', function() {

  // Step C: toggle light class on body
  document.body.classList.toggle('light')

  // Step D: change the emoji
  if (document.body.classList.contains('light')) {
    themeBtn.textContent = '☀️'
  } else {
    themeBtn.textContent = '🌙'
  }

})