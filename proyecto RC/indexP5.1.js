// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "El La Estaba Esperando Con Una Flor Amarilla", time: 16 },
  { text: "Ella Lo Estaba Soñando Con La Luz En Su Pupila", time: 24 },
  { text: "Y El Amarillo Del Sol Iluminaba La Esquina", time: 32 },
  { text: "Lo Sentia Tan Sercano", time: 40 },
  { text: "Lo Sentia Desde Niña", time: 41 },
  { text: "Ella Sabia Que El Sabia Que Algun Dia Pasaria", time: 46 },
  { text: "Que Vendria A Buscarla Con Sus Flores Amarillas", time: 51 },
  { text: "No Te Apures, No Detengas", time: 57 },
  { text: "El Instante Del Encuentro", time: 59 },
  { text: "Esta Dicho Que Es Un Hecho", time: 61 },
  { text: "No La Pierdas, No Hay Derecho", time: 63 },
  { text: "No Te Olvides Que La Vida Casi Nunca Esta dormida", time: 65 },
  { text: "En Ese Var Tan Desierto Nos Esperaba El Encuentro", time: 92 },
  { text: "Ella Llego En Limusina", time: 100 },
  { text: "Amarilla, Por Supuesto", time: 103 },
  { text: "El Se Acerco De Repente, La Miro Tan De Frente", time: 108 },
  { text: "Toda Una Vida Soñada Y No  Pudo Decir Nada", time: 116 },
  { text: "Ella Sabia Que El Sabia Que Algun Dia Pasaria", time: 122 },
  { text: "Que Vendria A Buscarla Con Sus Flores Amarillas", time: 127 },
  { text: "No Te Apures, No Detengas", time: 129 },
  { text: "El Instante Del Encuentro", time: 130 },
  { text: "Esta Dicho Que Es Un Hecho", time: 132 },
  { text: "No La Pierdas, No Hay Derecho", time: 133 },
  { text: "No Te Olvides Que La Vida Casi Nunca Esta dormida", time: 135 },
  { text: "Flores Amarillas", time: 150 },
  { text: "Ella Sabia Que El Sabia Que Algun Dia Pasaria", time: 160 },
  { text: "Que Vendria A Buscarla Con Sus Flores Amarillas", time: 163 },
  { text: "No Te Apures, No Detengas", time: 172 },
  { text: "El Instante Del Encuentro", time: 174 },
  { text: "Esta Dicho Que Es Un Hecho", time: 176 },
  { text: "No La Pierdas, No Hay Derecho", time: 178 },
  { text: "No Te Olvides Que La Vida Casi Nunca Esta dormida", time: 180 },
  { text: "Ella Sabia Que El Sabia", time: 188 },
  { text: "El Sabia, Ella Sabia", time: 190 },
  { text: "Que El Sabia, Ella Sabia", time: 192 },
  { text: "Y Se Olvidaron De Sus...", time: 193 },
  { text: "FLORES AMARILLAS...", time: 195 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);