const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

// Frases divertidas para mostrar cuando haga clic en "Sí"
const frases = [
    "¡Sabía que dirías que sí! 💖",
    "¡Sabía que no podrías resistirte! 😉",
    "¡Estefany, eres mi media naranja! 🍊",
];

noBtn.addEventListener('mouseover', () => {
    // Mueve el botón "No" a una posición aleatoria cuando el mouse se acerca
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    // Selecciona una frase aleatoria del array
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    alert(fraseAleatoria); // Muestra la frase en una alerta
});