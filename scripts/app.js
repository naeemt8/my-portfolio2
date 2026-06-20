const project = document.querySelector('.project');
const pervBtn = document.getElementById('pervBtn');
const nextBtn = document.getElementById('nextBtn');
const projectImg = document.getElementById('projectImg');
const projectText = document.getElementById('projectText');

const projectsList = [
    {imgSrc: 'images/weather-project.png',text: 'A weather app fetching real-time data through external APIs', hrefLink: '#'},
    {imgSrc: 'images/dictionary-project.png',text: 'A dictionary app using API integration to provide word meanings', hrefLink: '#'}
];

let currentProject = 0;


pervBtn.addEventListener('click', () =>{
    console.log('perv');
    if (currentProject == 0){
        currentProject = projectsList.length-1;
    }else{
        currentProject -= 1; 
    }
    console.log('current = ', currentProject);
    showPervproject();

});
nextBtn.addEventListener('click', () =>{
    console.log('next');
    if (currentProject == projectsList.length-1){
        currentProject = 0;
    }else{
        currentProject += 1; 
    }
    console.log('current = ', currentProject);
    showNextproject();
});

function showNextproject(){

    project.classList.remove('animate-next', 'animate-perv');

    // برای اینکه دوباره animation اجرا شود
    void project.offsetWidth;


    projectImg.src = projectsList[currentProject].imgSrc;
    projectText.innerHTML = projectsList[currentProject].text;
    project.href = projectsList[currentProject].hrefLink;


    project.classList.add('animate-next');

}
function showPervproject(){

    project.classList.remove('animate-next', 'animate-perv');

    // برای اینکه دوباره animation اجرا شود
    void project.offsetWidth;

    projectImg.src = projectsList[currentProject].imgSrc;
    projectText.innerHTML = projectsList[currentProject].text;
    project.href = projectsList[currentProject].hrefLink;

    project.classList.add('animate-perv');
}


import { CircularProgress } from "../circular-progress/circular-progress.js";

window.customElements.define('cicular-progress', CircularProgress);