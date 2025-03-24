// Al cargar la página, detectamos si el sistema prefiere el modo oscuro.
window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  // Si el sistema está en dark mode, establecemos .dark-mode de inicio
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode';
  }
});

// Función para hacer scroll al formulario
function scrollToForm() {
  const formSection = document.getElementById("contact-form-section");
  formSection.scrollIntoView({ behavior: "smooth" });
}

// Toggle manual de modo oscuro / claro
function toggleDarkMode() {
  const body = document.body;
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Light Mode';
  } else {
    darkModeToggle.textContent = 'Dark Mode';
  }
}

/* Cambio de idioma (ES/EN) */
function changeLanguage(lang) {
  if (lang === "es") {
    document.querySelector("header h1").textContent = 
      "BIGDreamers360 | Tu evento integral, sin preocupaciones";
    document.querySelector(".hero-text").innerHTML = 
      "Transformamos grandes ideas en eventos inolvidables. Con más de 10 años " +
      "liderando producciones integrales para marcas internacionales, festivales " +
      "y eventos VIP, somos el partner perfecto que buscas para convertir tu evento " +
      "en un éxito rotundo. Desde logística hasta catering, técnica o mobiliario, " +
      "deja que BIGDreamers360 lo haga realidad.";

    // SOBRE NOSOTROS
    document.getElementById("sobre-nosotros-title").textContent = "Sobre nosotros";
    document.getElementById("sobre-nosotros-text").innerHTML =
      "<strong>BIGDreamers360 | Más de una década creando eventos de éxito</strong><br/><br/>" +
      "Con más de 10 años de experiencia, en BIGDreamers360 trabajamos con pasión " +
      "para ofrecer un servicio integral y personalizado. Hemos colaborado con " +
      "<span class='highlight-darkblue'>clientes de primer nivel como Mallorca Live Festival, Ángel Martín, Lenovo, " +
      "Los 40 Principales, Premios Ondas o los Latin Grammy</span>, " +
      "posicionándonos como referencia en eventos premium " +
      "en España.<br/><br/>" +
      "Nuestro secreto: experiencia, trato cercano y capacidad para ofrecer todos " +
      "los servicios desde un único proveedor, permitiéndote disfrutar plenamente " +
      "de tu evento.";

    // SERVICIOS
    document.getElementById("servicios-title").textContent = "Nuestros servicios";

    // 1. Transportes
    document.getElementById("servicio-transporte-title").textContent = "Transportes";
    document.getElementById("servicio-transporte-text").innerHTML =
      "<span class='highlight-blue'>Desde alquiler de furgonetas sin conductor hasta vuelos privados</span>, " +
      "ofrecemos soluciones personalizadas de transporte en las Islas Baleares, Península Ibérica " +
      "e Islas Canarias. Gestionamos vehículos con conductor (VCT), minibuses, autobuses, " +
      "furgonetas de carga e incluso alquiler de barcos. ¡Moviliza tu evento con BIGDreamers360!";

    // 2. Catering & Hospitality
    document.getElementById("servicio-catering-title").textContent = "Catering & Hospitality";
    document.getElementById("servicio-catering-text").innerHTML =
      "Sorprende a tus invitados con nuestro exclusivo servicio de catering y hospitality: " +
      "cocina propia o in situ, menús fríos o calientes, buffet o servicio a mesa, y " +
      "especialidades internacionales como cocina coreana o china. " +
      "<span class='highlight-bold'>Creamos hospitalities a medida, cuidando cada detalle para superar todas tus expectativas.</span>";

    // 3. Producción Técnica
    document.getElementById("servicio-produccion-title").textContent = "Producción Técnica";
    document.getElementById("servicio-produccion-text").innerHTML =
      "Desde la selección del venue perfecto hasta la producción audiovisual completa " +
      "(sonido, luces y streaming), " +
      "<span class='highlight-orange'>nuestro equipo técnico garantiza eventos visuales y auditivos inolvidables.</span> " +
      "Además, cuidamos todos los detalles de seguridad (PRL). " +
      "Confía en BIGDreamers360 y lleva tu evento al siguiente nivel.";

    // 4. Jefes de Producción y Road Managers
    document.getElementById("servicio-roadmanager-title").textContent = "Jefes de Producción y Road Managers";
    document.getElementById("servicio-roadmanager-text").innerHTML =
      "Nuestro equipo altamente cualificado se encarga de coordinar proveedores, " +
      "elaborar horarios detallados y solucionar cualquier imprevisto antes, " +
      "durante y después del evento. " +
      "<span class='highlight-bold'>Gestionamos invitados y personal con máxima eficiencia para que tú solo " +
      "te preocupes de disfrutar del resultado.</span>";

    // 5. Logística de vuelos y hoteles
    document.getElementById("servicio-logistica-title").textContent = "Logística de vuelos y hoteles";
    document.getElementById("servicio-logistica-text").innerHTML =
      "Gestionamos reservas de vuelos y hoteles, " +
      "<span class='highlight-gold'>ofreciendo acuerdos exclusivos con alojamientos seleccionados</span> " +
      "en Baleares, Península y Canarias para obtener " +
      "siempre los mejores precios y condiciones. Cualquier necesidad específica será " +
      "resuelta con rapidez y precisión.";

    // 6. Alquiler de Mobiliario
    document.getElementById("servicio-alquiler-title").textContent = "Alquiler de Mobiliario";
    document.getElementById("servicio-alquiler-text").innerHTML =
      "Te proporcionamos todo lo necesario en mobiliario y equipamiento: sofás, mesas, " +
      "sillas, muebles especiales, percheros, food trucks, neveras y todo lo que puedas " +
      "imaginar para tu evento o camerinos. " +
      "<span class='highlight-bold'>Entregas rápidas y efectivas adaptadas a cada espacio y necesidad.</span>";

    // NUESTROS CLIENTES
    document.getElementById("clientes-title").textContent = "Nuestros clientes";

    // CONTACTO
    document.getElementById("contacto-title").textContent = "Contáctanos";
    document.getElementById("label-nombre").textContent = "Nombre y Apellidos";
    document.getElementById("label-email").textContent = "Email de contacto";
    document.getElementById("label-telefono").textContent = "Teléfono";
    document.getElementById("label-descripcion").textContent = "Descripción de las necesidades";
    document.getElementById("enviar-button").textContent = "Enviar";

  } else if (lang === "en") {
    document.querySelector("header h1").textContent = 
      "BIGDreamers360 | Your Complete Event Solution, Worry-Free";
    document.querySelector(".hero-text").innerHTML = 
      "We transform big ideas into unforgettable events. With over 10 years leading " +
      "comprehensive productions for international brands, festivals, and VIP events, " +
      "we are the perfect partner to make your event an absolute success. From logistics " +
      "to catering, technical services, or furniture rentals, let BIGDreamers360 bring your vision to life.";

    // About us
    document.getElementById("sobre-nosotros-title").textContent = "About Us";
    document.getElementById("sobre-nosotros-text").innerHTML =
      "<strong>BIGDreamers360 | Over a Decade Creating Successful Events</strong><br/><br/>" +
      "With over 10 years of experience, at BIGDreamers360 we passionately deliver " +
      "comprehensive, personalized services. We have collaborated with " +
      "<span class='highlight-darkblue'>top-tier clients such as Mallorca Live Festival, Ángel Martín, Lenovo, " +
      "Los 40 Principales, Premios Ondas, and the Latin Grammy Awards</span>, positioning ourselves " +
      "as a reference for premium events in Spain.<br/><br/>" +
      "Our secret: experience, personalized attention, and the ability to offer all " +
      "services from a single provider, allowing you to fully enjoy your event.";

    // Services
    document.getElementById("servicios-title").textContent = "Our Services";

    // 1. Transportation
    document.getElementById("servicio-transporte-title").textContent = "Transportation";
    document.getElementById("servicio-transporte-text").innerHTML =
      "<span class='highlight-blue'>From rental vans without drivers to private flights</span>, " +
      "we provide personalized transport solutions in the Balearic Islands, Iberian Peninsula, " +
      "and Canary Islands. We manage chauffeur-driven vehicles (VCT), minibuses, buses, " +
      "cargo vans, and even boat rentals. Mobilize your event with BIGDreamers360!";

    // 2. Catering & Hospitality
    document.getElementById("servicio-catering-title").textContent = "Catering & Hospitality";
    document.getElementById("servicio-catering-text").innerHTML =
      "Surprise your guests with our exclusive catering and hospitality services: " +
      "our own kitchen or on-site cooking, hot and cold menus, buffet or table service, " +
      "and international specialties including Korean and Chinese cuisine. " +
      "<span class='highlight-bold'>We create bespoke hospitality solutions, attending to every detail " +
      "to exceed your expectations.</span>";

    // 3. Technical Production
    document.getElementById("servicio-produccion-title").textContent = "Technical Production";
    document.getElementById("servicio-produccion-text").innerHTML =
      "From selecting the perfect venue to full audiovisual production (sound, lighting, and streaming), " +
      "<span class='highlight-orange'>our technical team ensures visually and acoustically unforgettable events.</span> " +
      "Additionally, we handle all security details (PRL). Trust BIGDreamers360 and elevate your event to the next level.";

    // 4. Production Managers and Road Managers
    document.getElementById("servicio-roadmanager-title").textContent = "Production Managers and Road Managers";
    document.getElementById("servicio-roadmanager-text").innerHTML =
      "Our highly skilled team coordinates suppliers, creates detailed schedules, " +
      "and solves any unforeseen issues before, during, and after the event. " +
      "<span class='highlight-bold'>We efficiently manage guests and personnel so you can simply enjoy the outcome.</span>";

    // 5. Flights and Hotel Logistics
    document.getElementById("servicio-logistica-title").textContent = "Flights and Hotel Logistics";
    document.getElementById("servicio-logistica-text").innerHTML =
      "We manage flight and hotel reservations, " +
      "<span class='highlight-gold'>offering exclusive agreements with selected accommodations</span> " +
      "in the Balearic Islands, Peninsula, and Canary Islands, always securing the best prices " +
      "and conditions. Any specific requirement will be swiftly and precisely addressed.";

    // 6. Furniture Rental
    document.getElementById("servicio-alquiler-title").textContent = "Furniture Rental";
    document.getElementById("servicio-alquiler-text").innerHTML =
      "We provide everything needed in furniture and equipment: sofas, tables, chairs, " +
      "special furniture, clothing racks, food trucks, refrigerators, and anything else " +
      "your event or dressing rooms require. " +
      "<span class='highlight-bold'>Rapid and effective delivery tailored to every space and need.</span>";

    // Our clients
    document.getElementById("clientes-title").textContent = "Our Clients";

    // Contact
    document.getElementById("contacto-title").textContent = "Contact Us";
    document.getElementById("label-nombre").textContent = "Full Name";
    document.getElementById("label-email").textContent = "Email Address";
    document.getElementById("label-telefono").textContent = "Phone";
    document.getElementById("label-descripcion").textContent = "Description of the Needs";
    document.getElementById("enviar-button").textContent = "Send";
  }
}
