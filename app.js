const switchBtn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')
const preloader = document.querySelector('.preloader')

switchBtn.addEventListener('click', function(){
    playPause()
})

window.addEventListener('load', function(){
    preloader.classList.add('hide-preloader')
})

function playPause(){
    if(!switchBtn.classList.contains('slide')){
        switchBtn.classList.add('slide')
        video.pause()
    }else{
        switchBtn.classList.remove('slide')
        video.play()
    }
}
