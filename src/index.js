import loadHome from './home.js';
import Loadabout from './about.js';
const content = document.getElementById('content');
const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');


homeButton.addEventListener('click', (e)=>{
content.innerHTML= "";
loadHome();
});

aboutButton.addEventListener('click', (e)=>{
    content.innerHTML= "";

    Loadabout();
});

console.log('hi');

