console.log("jhatik")
let songItem = 0;
let audioElement = new Audio('photes/songs/1.mp3');
let masterPlay = document.getElementById('play');
let myProgreesBar = document.getElementById('myprogreesbar')
let gif = document.getElementById('gif')

let song = [
    {songName:"Warriyo - Mortals [NCS Release)",filePath:"photes/songs/1.mp3",coverPath:"photes/covers/1.jpg"},
    {songName:"Cielo - Huma-Huma",filePath:"photes/songs/2.mp3",coverPath:"photes/covers/2.jpg"},
    {songName:"DEAF KEV - Invincible [NCS Release]-320k",filePath:"photes/songs/3.mp3",coverPath:"photes/covers/3.jpg"},
    {songName:"Different Heaven & EH!DE - My Heart [NCS Release]",filePath:"photes/songs/4.mp3",coverPath:"photes/covers/4.jpg"},
    {songName:"Janji-Heroes-Tonight-feat-Johnning-NCS-Release",filePath:"photoes/songs/5.mp3",coverPath:"photes/covers/5.jpg"},
    {songName:"Rabba - Salam-e-lshq",filePath:"photes/songs/6.mp3",coverPath:"photes/covers/6.jpg"},
    {songName:"Sakhiyaan - Salam-e-lshq",filePath:"photes/songs/7.mp3",coverPath:"phtoes/covers/7.jpg"},
    {songName:"Bhula Dena - Salam-e-lshq",filePath:"photes/songs/8.mp3",coverPath:"photes/covers/8.jpg"},
    {songName:"Tumhari Kasam - Salam-e-lshq",filePath:"photes/songs/9.mp3",coverPath:"photes/covers/9.jpg"},
    {songName:"Na Jaana - Salam-e-lshq",filePath:"photes/songs/10.mp3",coverPath:"photes/covers/10.jpg"}
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.innerHTML='pause_circle';
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.innerHTML='play_circle';
        gif.style.opacity=0;
    }
})
// myProgreesBar.addEventListener('timeupdate',()=>{

// })