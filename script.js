let songs = [
    { songName: "Khamoshiyan", filePath: "songs/1.mp3", coverPath: "img/5.jpg" },
    { songName: "Dil Jhoom", filePath: "songs\2.mp3", coverPath: "img/1.jpg" },
    { songName: "Mere Mahiye Jinna Sona", filePath: "songs/3.mp3", coverPath: "img/2.jpg" },
    { songName: "Cupid", filePath: "songs/4.mp3", coverPath: "img/3.jpg" },
    { songName: "Hawayein", filePath: "songs/5.mp3", coverPath: "img/4.jpg" },
    { songName: "Tum Tak", filePath: "songs/6.mp3", coverPath: "img/5.jpg" },
    { songName: "Mere Mahiye Jinna Sona", filePath: "songs/3.mp3", coverPath: "img/6.jpg" },
    { songName: "Cupid", filePath: "songs/4.mp3", coverPath: "img/4.jpg" },
]
let songIndex = 0;
let masterplay = document.getElementById("masterplay");
let gif = document.getElementById("gif");
let mastersongname = document.getElementById("masterSongName");
let progressbar = document.getElementById("progressbar");
let audioEle = new Audio("songs/1.mp3");
let songsItem = Array.from(document.getElementsByClassName("songitem"));

songsItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerHTML = songs[i].songName;
});



masterplay.addEventListener('click', () => {
    if (audioEle.paused || audioEle.currentTime <= 0) {
        audioEle.play();
        ele = document.getElementById(`${songIndex}`);
        ele.classList.remove("fa-play-circle");
        ele.classList.add("fa-pause-circle");
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } else {
        audioEle.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});
audioEle.addEventListener("timeupdate", () => {
    progress = parseInt((audioEle.currentTime / audioEle.duration) * 100);
    progressbar.value = progress;
})

progressbar.addEventListener("change", () => {
    audioEle.currentTime = (progressbar.value * audioEle.duration / 100);
})

function makeAllPlay() {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        songIndex = parseInt(e.target.id);
        makeAllPlay();
        mastersongname.innerText = songs[songIndex].songName;
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioEle.src = `songs/${songIndex+1}.mp3`;
        audioEle.currentTime = 0;
        gif.style.opacity = 1;
        audioEle.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
    })
})
document.getElementById("forward").addEventListener("click", () => {
    if (songIndex > 7) {
        songIndex = 0;
    } else songIndex += 1;
    makeAllPlay();
    audioEle.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioEle.currentTime = 0;
    audioEle.play();
    gif.style.opacity = 1;
    ele = document.getElementById(`${songIndex}`);
    ele.classList.remove("fa-play-circle");
    ele.classList.add("fa-pause-circle");
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
})
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else songIndex -= 1;
    makeAllPlay();
    audioEle.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioEle.currentTime = 0;
    audioEle.play();
    ele = document.getElementById(`${songIndex}`);
    ele.classList.remove("fa-play-circle");
    ele.classList.add("fa-pause-circle");
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
})