let loader;
let textLoader;
let loadAnim;

document.addEventListener('DOMContentLoaded', () => {
    loader = document.querySelector('#loader');
    textLoader = document.querySelector('.loadingText');

    let countDots = 0;

    loadAnim = setInterval(() => {
        countDots <= 3 ? countDots++ : countDots = 1; textLoader.innerHTML = 'Загрузка.';
        for (let i = 1; i < countDots - 1; i++) {
            textLoader.innerHTML += '.'
        }
    }, 300);
});

window.addEventListener('load', () => {
    loader.style.opacity = 0;
    root.style.opacity = 1;

    setTimeout(() => {
        loader.style.display = 'none';
        clearInterval(loadAnim);
    }, 500);
});

