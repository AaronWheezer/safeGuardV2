//on domcontentload
document.addEventListener('DOMContentLoaded', () => {
const fill = document.querySelector('.fill');
const loadButton = document.querySelector('.load-btn');
    setTimeout(() => {
    fill.style.width = '100%';
    loadButton.removeAttribute('disabled');
    }, 20000);
});
