let songIndex = 1;
let audioElement = new Audio('photes/songs/1.mp3');
let masterPlay = document.getElementById('play');
let myProgreesBar = document.getElementById('myprogressbar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItem'))


let song = [
    {songName:"Warriyo - Mortals [NCS Release)",filePath:"photes/songs/1.mp3",coverPath:"photes/covers/1.jpg"},
    {songName:"Cielo - Huma-Huma",filePath:"photes/songs/2.mp3",coverPath:"photes/covers/2.jpg"},
    {songName:"DEAF KEV - Invincible [NCS Release]-320k",filePath:"photes/songs/3.mp3",coverPath:"photes/covers/3.jpg"},
    {songName:"Different Heaven & EH!DE - My Heart [NCS Release]",filePath:"photes/songs/4.mp3",coverPath:"photes/covers/4.jpg"},
    {songName:"Janji-Heroes-Tonight-feat-Johnning-NCS-Release",filePath:"photoes/songs/5.mp3",coverPath:"photes/covers/5.jpg"},
    {songName:"Rabba - Salam-e-lshq",filePath:"photes/songs/6.mp3",coverPath:"photes/covers/6.jpg"},
    {songName:"Sakhiyaan - Salam-e-lshq",filePath:"photes/songs/7.mp3",coverPath:"photes/covers/7.jpg"},
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
audioElement.addEventListener('timeupdate',()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgreesBar.value = progress;
})
myProgreesBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgreesBar.value*audioElement.duration)/100;
})
songItems.forEach((element ,i )=> {
    element.getElementsByTagName('img')[0].src=song[i].coverPath;
    element.getElementsByClassName('songName')[0].innertext=song[i].songName;
});
const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.innerHTML='play_circle'
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        audioElement.src = `photes/songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        e.target.innerHTML = 'pause_circle';
        masterPlay.innerHTML = 'pause_circle';
        gif.style.opacity = 1;
    });
  });
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `photes/songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    e.target.innerHTML = 'pause_circle';
    masterPlay.innerHTML = 'pause_circle';
    gif.style.opacity = 1;
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `photes/songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    e.target.innerHTML = 'pause_circle';
    masterPlay.innerHTML = 'pause_circle';
    gif.style.opacity = 1;
})