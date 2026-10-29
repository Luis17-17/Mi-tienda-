# Página de producto — plantilla gratuita para GitHub Pages

Esta es una página comercial adaptable a celular y computadora. Incluye:
- Presentación de producto y beneficios.
- Precio “por confirmar” para no publicar un precio inventado.
- Preguntas frecuentes y detalles editables.
- Formulario que prepara una consulta en WhatsApp.
- No procesa pagos ni almacena información del cliente.

## Antes de publicarla
1. En `index.html`, cambia `TU TIENDA`, el título, descripción y textos de ejemplo.
2. Sustituye la ilustración provisional por una foto real autorizada. Para hacerlo fácil, guarda una imagen como `producto.jpg` en esta carpeta y reemplaza el bloque `<div class="product-image"...>` por:

   ```html
   <div class="product-image">
     <img src="producto.jpg" alt="Nombre real del producto" style="width:100%;height:100%;object-fit:contain">
   </div>
   ```

   Asegúrate de que el archivo `producto.jpg` se suba también a GitHub.
3. Edita `script.js` y coloca tu número de WhatsApp en `WHATSAPP_NUMBER`, con código de país y sin `+`, espacios ni guiones. Si no quieres usar WhatsApp todavía, deja vacío; el formulario mostrará un aviso.
4. No publiques precio, garantía, tiempos de envío, disponibilidad ni características hasta verificarlos con el proveedor.
5. Añade las políticas de privacidad, compra, envío, cambios y devoluciones que correspondan antes de empezar a recibir pedidos.

## Publicación en GitHub Pages (gratis)
1. Entra a https://github.com e inicia sesión o crea una cuenta.
2. Pulsa **New repository**.
3. Ponle un nombre, por ejemplo `mi-tienda-producto`. Selecciona **Public** y pulsa **Create repository**.
4. En el repositorio, pulsa **Add file → Upload files**.
5. Sube `index.html`, `styles.css`, `script.js` y `README.md` (o arrastra los cuatro archivos).
6. Pulsa **Commit changes**.
7. Abre **Settings → Pages**.
8. En **Build and deployment**, elige **Deploy from a branch**. Selecciona la rama **main** y la carpeta **/(root)**; pulsa **Save**.
9. Espera unos minutos y abre la URL que GitHub muestre en **Settings → Pages**. Normalmente tendrá el formato `https://TU-USUARIO.github.io/mi-tienda-producto/`.
10. Prueba la página desde tu iPhone y desde una computadora. Envía una consulta de prueba antes de compartirla.

## Limitaciones importantes
- GitHub Pages aloja sitios estáticos. Esta plantilla no tiene carrito, inventario, base de datos, pagos ni pedidos automáticos.
- No cuesta alojarla en GitHub Pages con estas condiciones, pero un dominio propio, procesadores de pago, anuncios o servicios externos podrían tener costos o requisitos.
- Para dropshipping, confirma por escrito con el proveedor que permite enviar directamente al cliente final, los costos y tiempos de envío, seguimiento, devoluciones y disponibilidad.
- Evita usar fotos o marcas sin permiso y no prometas resultados que no puedas demostrar.
