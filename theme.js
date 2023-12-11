var currentTheme = 'light-theme';

function toggleTheme() {
    var body = document.body;
    currentTheme = (currentTheme === 'light-theme') ? 'dark-theme' : 'light-theme';
    body.className = currentTheme;
}

document.addEventListener('DOMContentLoaded', function() {
    var themeButton = document.getElementById('theme-button');
    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    }
});
