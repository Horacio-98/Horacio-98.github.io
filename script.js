const siBtn = document.getElementById('siBtn');
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', function() {
    const randomPositionX = Math.random() * (window.innerWidth - 100);
    const randomPositionY = Math.random() * (window.innerHeight - 50);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomPositionX + 'px';
    noBtn.style.top = randomPositionY + 'px';
});



siBtn.addEventListener('click', function() {
    const eleccion = siBtn.textContent; // Obtener el texto del botón "Sí"
    mensaje.innerHTML = `¡Muy buena elección tomada! 😜<br>Ya tomaste la decisión de "${eleccion}"<br><br>📸 Favor de enviar foto 📸`;
    mensaje.style.display = 'block';
});

sipBtn.addEventListener('click', function() {
    const eleccion = sipBtn.textContent; // Obtener el texto del botón "Sí"
    mensaje.innerHTML = `¡Muy buena elección tomada! 😜<br>Ya tomaste la decisión de "${eleccion}"<br><br>📸 Favor de enviar foto 📸`;
    mensaje.style.display = 'block';
});
