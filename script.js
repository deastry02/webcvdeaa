const heartsContainer = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';

    // posisi horizontal random
    heart.style.left = Math.random() * 100 + '%';

    // mulai dari atas
    heart.style.top = '-20px';

    // kecepatan jatuh random
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';

    // ukuran random
    heart.style.fontSize = (Math.random() * 15 + 10) + 'px';

    heartsContainer.appendChild(heart);

    // hapus setelah jatuh
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// bikin hujan terus
setInterval(createHeart, 200);