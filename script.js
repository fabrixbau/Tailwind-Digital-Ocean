const object = document.querySelector('.object');
let direction = 1; // 1 para mover a la derecha, -1 para mover a la izquierda

object.addEventListener('animationiteration', () => {
  // Cambia la dirección de la animación cuando se reinicia
  direction *= 1;
  object.style.animationDirection = direction === 1 ? 'normal' : 'reverse';
});
