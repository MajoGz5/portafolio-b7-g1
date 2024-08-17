
let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2100)
  .typeString('Majo Gómez')
  .pauseFor(300)
  .deleteAll()
  .typeString('Dibujante proyectista')
  .pauseFor(1000)
  .start();