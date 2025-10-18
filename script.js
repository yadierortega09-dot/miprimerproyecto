// Seleccionamos los elementos del DOM
const btnColor = document.getElementById('btnColor');
const btnTexto = document.getElementById('btnTexto');
const btnReset = document.getElementById('btnReset');
const mensaje = document.getElementById('mensaje');

// Cambiar color de fondo
btnColor.addEventListener('click', () => {
  const colores = ['#3498db', '#2ecc71', '#e67e22', '#9b59b6', '#e74c3c'];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
});

// Cambiar el texto del párrafo
btnTexto.addEventListener('click', () => {
  const frases = [
    '¡Hola desde JavaScript!',
    'Cada clic cambia algo nuevo ✨',
    'Estás aprendiendo rápido 💪',
    'Interactividad en acción 🚀',
    '¡Sigue practicando!'
  ];
  mensaje.textContent = frases[Math.floor(Math.random() * frases.length)];
});

// Restaurar estado inicial
btnReset.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
  mensaje.textContent = 'Haz clic en los botones para interactuar con la página.';
});
