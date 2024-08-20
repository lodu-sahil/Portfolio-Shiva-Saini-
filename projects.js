document.addEventListener("DOMContentLoaded", () => {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.boxShadow = "0px 0px 20px 5px green";
        });
        item.addEventListener('mouseout', () => {
            item.style.boxShadow = "none";
        });
    });
});