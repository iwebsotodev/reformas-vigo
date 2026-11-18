// =========================================
// 1. SELECCIÓN DE ELEMENTOS DEL HTML (DOM)
// =========================================

// Busca el formulario en el HTML usando su id y lo guarda en una constante fija
const formulario = document.getElementById("formulario-contacto");

// Busca el párrafo vacío donde mostraremos los avisos de error o de éxito
const mensaje = document.getElementById("mensaje-formulario");


// =========================================
// 2. ESCUCHA DEL EVENTO DE ENVÍO (SUBMIT)
// =========================================

// Deja el navegador vigilando el formulario; el código interno solo se ejecuta al pulsar "Enviar"
formulario.addEventListener("submit", function (evento) {
  
  // Evita que la página se recargue al enviar el formulario (comportamiento por defecto del navegador)
  evento.preventDefault();


  // =========================================
  // 3. LECTURA Y LIMPIEZA DE DATOS ESCRITOS
  // =========================================

  // Lee el texto escrito en el campo "nombre" (.value) y elimina espacios al principio y al final (.trim)
  const nombre = document.getElementById("nombre").value.trim();

  // Lee el correo electrónico escrito y limpia espacios sobrantes en los extremos
  const email = document.getElementById("email").value.trim();

  // Lee la descripción del proyecto en el textarea y limpia espacios sobrantes
  const textoProyecto = document.getElementById("mensaje").value.trim();


  // =========================================
  // 4. VALIDACIÓN DE CAMPOS VACÍOS
  // =========================================

  // Comprueba si el nombre está vacío (=== "") O (||) el email está vacío O el mensaje está vacío
  if (nombre === "" || email === "" || textoProyecto === "") {
    
    // Escribe el texto de aviso dentro del párrafo <p id="mensaje-formulario">
    mensaje.textContent = "Por favor, completa todos los campos correctamente.";
    
    // Cambia el color del texto a rojo (#dc2626) para indicar error
    mensaje.style.color = "#dc2626";
    
    // Pone el texto en negrita
    mensaje.style.fontWeight = "bold";
    
    // Añade 15 píxeles de separación arriba para que no quede pegado al botón
    mensaje.style.marginTop = "15px";
    
    // Detiene la función aquí mismo: no muestra el saludo verde ni borra lo que el usuario ya escribió
    return;
  }


  // =========================================
  // 5. RESPUESTA DE ÉXITO Y LIMPIEZA
  // =========================================

  // Une el saludo con el nombre guardado (+ nombre +) y lo muestra en pantalla
  mensaje.textContent =
    "¡Gracias, " + nombre + "! Hemos recibido tu solicitud. Te contactaremos pronto.";
  
  // Cambia el color del texto a verde (#16a34a) para confirmar el envío correcto
  mensaje.style.color = "#16a34a";
  
  // Pone el texto en negrita
  mensaje.style.fontWeight = "bold";
  
  // Añade 15 píxeles de separación respecto al botón
  mensaje.style.marginTop = "15px";

  // Vacía todos los campos del formulario dejándolo limpio para una nueva consulta
  formulario.reset();
});
