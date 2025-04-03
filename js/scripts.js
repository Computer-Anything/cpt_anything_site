// SCRIPTS

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle');
  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
    });
  }
});
