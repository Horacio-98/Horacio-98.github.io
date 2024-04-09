const siBtn = document.getElementById('siBtn');
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', function() {
    const randomPositionX = Math.random() * (window.innerWidth - 100);
    const randomPositionY = Math.random() * (window.innerHeight - 50);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomPositionX + 'px';
    noBtn.style.top = randomPositionY + 'px';
});


function redireccionar(opcion) {
    if (opcion === 'siBtn') {
        window.location.href = 'decision.html?opcion=1';
    } else if (opcion === 'sipBtn') {
        window.location.href = 'decision.html?opcion=2';
    }
}

siBtn.addEventListener('click', function() {
    redireccionar(this.id);
});

sipBtn.addEventListener('click', function() {
    redireccionar(this.id);
});
