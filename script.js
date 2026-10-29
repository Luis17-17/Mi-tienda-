/*
  CONFIGURACIÓN RÁPIDA:
  1) Cambia el número de WhatsApp por el tuyo, con código de país y sin + ni espacios.
     Ejemplo México: 521XXXXXXXXXX (verifica el formato que use tu cuenta).
  2) No uses un número ajeno. Si todavía no tienes número comercial, deja el valor vacío;
     el formulario mostrará un aviso.
*/
const WHATSAPP_NUMBER = ""; // Ejemplo: "521XXXXXXXXXX"
const PRODUCT_NAME = "Producto destacado";

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("interest-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("customer-name").value.trim();
  const question = document.getElementById("customer-question").value;
  const extra = document.getElementById("customer-message").value.trim();

  if (!name) {
    alert("Escribe tu nombre para continuar.");
    return;
  }

  if (!WHATSAPP_NUMBER) {
    alert("La página funciona, pero falta configurar tu número de WhatsApp en script.js. Abre ese archivo y completa WHATSAPP_NUMBER.");
    return;
  }

  const message = [
    "Hola, me interesa: " + PRODUCT_NAME,
    "Mi nombre: " + name,
    "Consulta: " + question,
    extra ? "Mensaje: " + extra : ""
  ].filter(Boolean).join("\n");

  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener,noreferrer");
});
