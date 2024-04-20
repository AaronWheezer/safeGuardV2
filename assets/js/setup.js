//on domcontentload
//onload page
window.addEventListener('load', () => {
    fillBar();
});

function fillBar() {
    const fill = document.querySelector('.fill');
    const loadButton = document.querySelector('.load-btn');
    fill.style.width = '100%';
    loadButton.setAttribute('disabled', 'disabled');
    setTimeout(() => {
        //refere to home page
        window.location.href = 'index.html';
    }, 3000);
  }