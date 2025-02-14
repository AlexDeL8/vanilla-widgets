const likeButton = document.getElementById('likeButton')
const buttonHeart = document.getElementById('buttonHeart')

likeButton.addEventListener('click', () => {
    if(likeButton.classList.contains('loading')) {
        return
    }
    
    likeButton.classList.add('loading')
    buttonHeart.innerText = '...'

    // Immitate a network call that takes a bit before registering the like
    setTimeout(() => {
        likeButton.classList.remove('loading')
        if(likeButton.classList.contains('unliked')) {
            likeButton.classList.remove('unliked')
            likeButton.classList.add('liked')
        } else if(likeButton.classList.contains('liked')) {
            likeButton.classList.remove('liked')
            likeButton.classList.add('unliked')
        }
        buttonHeart.innerText = "♥"

    }, 1000)
})