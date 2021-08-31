const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const input = document.querySelector('#theme-switch-toggle');

input.addEventListener('click', currentTheme);

function currentTheme() {
  body.classList.toggle(Theme.DARK);
  
  localStorage.getItem('theme') ? localStorage.removeItem('theme') :  localStorage.setItem('theme', Theme.DARK);
}

let story = localStorage.getItem('theme');
body.classList.add(story)

if (body.className === Theme.DARK) {
  input.checked = true;
}
