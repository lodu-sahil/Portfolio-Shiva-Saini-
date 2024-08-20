document.addEventListener("DOMContentLoaded", () => {
    const aboutContent = document.getElementById('about-content');
    
    aboutContent.addEventListener('mouseover', () => {
        aboutContent.style.color = 'lightgreen';
    });
    
    aboutContent.addEventListener('mouseout', () => {
        aboutContent.style.color = '#ccc';
    });
});