const sol = document.getElementById('sol');
const montania = document.getElementById('montania');
const suelo = document.getElementById('suelo');
const izquierda = document.getElementById('izquierda');
const derecha = document.getElementById('derecha');
const persona = document.getElementById('persona');
const titulo = document.getElementById('titulo');
const aves = document.getElementById('aves');

window.addEventListener('scroll',()=>{
    const value = window.scrollY;
    sol.style.top = -value * 0.5 + 'px';
    montania.style.right = -value * 0.25 + 'px';
    aves.style.top = -value * 0.6 + 'px';
    aves.style.left = -value * 0.6 + 'px';
    titulo.style.left = -value + 25 +'%';
    izquierda.style.left = -value * 0.6 + 'px';
    derecha.style.right = -value * 0.6 + 'px';
    persona.style.left = value * 0.2 + 'px';
});