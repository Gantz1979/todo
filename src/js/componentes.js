import '../css/componentes.css';


export const saludar = (nombre) => {

  console.log('Creando etiqueta H1 en el HTML PIN');

  const h1 = document.createElement('h1');
  h1.innerHTML = `Hola tu nombre es: ${nombre}`;

  document.body.append(h1)
}