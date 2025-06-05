const contenedor = document.getElementById('contenedorDinamico');
const cambiarContenidoBtn = document.getElementById('cambiarContenidoBtn');
const crearElementoBtn = document.getElementById('crearElementoBtn');
const cambiarEstiloBtn= document.getElementById('cambiarEstiloBtn');

cambiarContenidoBtn.addEventListener('click',function(){
    const parrafo = contenedor.querySelector('p');
    if (parrafo) {
        parrafo.textContent = 'El contenido de este parrafo ha sido modificado';
        console.log('Contenido de parrafo cambiado');
    }else{
        contenedor.innerHTML = '<p> Parrafo insertado y creado desde JS</p>'
    }
});

crearElementoBtn.addEventListener('click', function(){
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = 'Este es un parrafo creado dinamicamente';
    nuevoParrafo.style.color = 'purple';
    nuevoParrafo.style.fontWeight = 'bold';
    contenedor.appendChild(nuevoParrafo);
    console.log('Parrafo añadido dinamicamente');
});

const textoOriginal = contenedor.textContent; 
const idOriginal = contenedor.id;
let estiloOriginal = true;

cambiarEstiloBtn.addEventListener('click',()=>{
    if (estiloOriginal){
        contenedor.textContent = 'Se ha cambiado el estilo.';
        contenedor.style.fontStyle = 'italic';
        contenedor.id = '';
        contenedor.classList.toggle('estiloNuevo');
        estiloOriginal = false;
    }
    else {
        contenedor.textContent = textoOriginal;
        contenedor.style.fontStyle = 'normal';
        contenedor.id = idOriginal;
        contenedor.classList.remove('estiloNuevo');
        estiloOriginal = true;
    }
});



