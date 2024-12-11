const luckyButton = document.getElementById('lucky-btn');
const googleImage = document.getElementById('google_image');
const message = document.getElementById('message');
const inputSection = document.getElementById('search-input-section');

luckyButton.addEventListener('click', () => {
    if (googleImage.style.display === 'none') {
        googleImage.style.display = 'block';
        message.style.display = 'none';
        inputSection.style.marginTop = '0'; // Reset margin when message is hidden
    } else {
        googleImage.style.display = 'none';
        message.style.display = 'block';
        inputSection.style.marginTop = '80px'; // Add margin when message is displayed
    }
});
