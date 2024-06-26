// Add event listener to toggle dark mode
document.getElementById('modeToggle').addEventListener('change', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});
// Apply dark mode on initial page load
applyDarkMode();

function applyDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;

    if (isDarkMode) {
        body.classList.add('dark-mode');
        modeToggle.checked = true;
    } else {
        body.classList.remove('dark-mode');
        modeToggle.checked = false;
    }

}
