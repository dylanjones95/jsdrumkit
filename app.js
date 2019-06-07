const boom = new Audio('sounds/boom.wav')
const clap = new Audio('sounds/clap.wav')
const hihat = new Audio('sounds/hihat.wav')
const kick = new Audio('sounds/kick.wav')
const openhat = new Audio('sounds/openhat.wav')
const ride = new Audio('sounds/ride.wav')
const snare = new Audio('sounds/snare.wav')
const tink = new Audio('sounds/tink.wav')
const tom = new Audio('sounds/tom.wav')

// Play drum by keyboard press
document.addEventListener("keypress", ()=> {
    if (event.code == 'KeyG') {
       boom.load(), boom.play()
    } else if (event.code == 'KeyA') {
       clap.load(), clap.play()
    } else if (event.code == 'KeyS') {
       hihat.load(), hihat.play()
    } else if (event.code == 'KeyD') {
       kick.load(), kick.play()
    } else if (event.code == 'KeyF') {
       openhat.load(), openhat.play()
    } else if (event.code == 'KeyH') {
       ride.load(), ride.play()
    } else if (event.code == 'KeyJ') {
       snare.load(), snare.play()
    } else if (event.code == 'KeyL') {
       tink.load(), tink.play()
    } else if (event.code == 'KeyK') {
       tom.load(), tom.play()
    } else {
        return false
    }
})  


// Play drum by click
document.getElementById("boom").addEventListener("click", ()=> {
    boom.load(), boom.play()
    })
        
document.getElementById("clap").addEventListener("click", ()=> {
    clap.load(), clap.play()
    })

document.getElementById("hihat").addEventListener("click", ()=> {
    hihat.load(), hihat.play()
    })

document.getElementById("kick").addEventListener("click", ()=> {
    kick.load(), kick.play()
    })       
                        
document.getElementById("openhat").addEventListener("click", ()=> {
    openhat.load(), openhat.play()
    })    

document.getElementById("ride").addEventListener("click", ()=> {
    ride.load(), ride.play()
    })    

document.getElementById("snare").addEventListener("click", ()=> {
    snare.load(), snare.play()
    }) 

document.getElementById("tink").addEventListener("click", ()=> {
    tink.load(), tink.play()
    }) 

document.getElementById("tom").addEventListener("click", ()=> {
    tom.load(), tom.play()
    }) 