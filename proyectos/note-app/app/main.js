const btnGuardar = document.getElementById('btnGuardar')
const btnAgregar = document.getElementById('btnAgregar')
const btnCancelar = document.getElementById('btnCancelar')
const inputTitulo = document.getElementById('titulo')
const inputDetalles = document.getElementById('detalles')
const campoNuevaNota = document.getElementById('campoNuevaNota')
const divNotasGuardadas = document.getElementById('divNotasGuardadas')

function Nota(titulo, detalles) {
    this.titulo = titulo,
    this.detalles = detalles;
}

function divCreator(nota){
    const divNota = document.createElement('div');
    divNota.classList.add('nota');

    const tituloNota = document.createElement('h3');
    const botonBorrarNota = document.createElement('button')
    botonBorrarNota.classList.add('boton-borrar-nota')
    const detallesNota = document.createElement('p');
    
    tituloNota.innerText = nota.titulo;
    botonBorrarNota.innerText = ' X '
    detallesNota.innerText = nota.detalles;
    
    divNota.appendChild(tituloNota);
    divNota.appendChild(botonBorrarNota)
    divNota.appendChild(detallesNota);
    divNotasGuardadas.appendChild(divNota);
    
    botonBorrarNota.addEventListener('click', (e)=>{
        if(window.confirm('Desea borrar la nota?')){
            e.target.parentElement.remove()
        };
        console.log('Nota borrada')
    })
}

btnGuardar.addEventListener('click', (e)=>{
    e.preventDefault();
    let nota = new Nota(inputTitulo.value, inputDetalles.value);
    inputTitulo.value = '';
    inputDetalles.value = '';
    divCreator(nota);
})

btnAgregar.addEventListener('click', ()=>{
    btnAgregar.classList.toggle('oculto');
    campoNuevaNota.classList.toggle('desplegar');
    campoNuevaNota.classList.toggle('contraer');
})

btnCancelar.addEventListener('click', (e)=>{
    e.preventDefault();
    btnAgregar.classList.toggle('oculto');
    campoNuevaNota.classList.toggle('desplegar');
    campoNuevaNota.classList.toggle('contraer');
})
