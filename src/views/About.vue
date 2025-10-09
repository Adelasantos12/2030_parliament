<template>
  <div class="about-container">
    <header class="about-header">
      <h1>Acerca de RSI-Scanner (IHR-LatAm)</h1>
    </header>

    <main class="about-content card">
      <section>
        <h4>¿Qué es RSI-Scanner?</h4>
        <p>
          <strong>RSI-Scanner (IHR-LatAm)</strong> es una herramienta de código abierto diseñada para el análisis automatizado de normas y reformas legales. Su objetivo principal es detectar, versionar y etiquetar cambios en la legislación que implementan o se relacionan con el Reglamento Sanitario Internacional (RSI 2005) en América Latina.
        </p>
        <p>
          Este proyecto transforma el enfoque de la monitorización parlamentaria hacia la vigilancia de la salud pública, proporcionando a investigadores, legisladores y a la sociedad civil una forma de rastrear la implementación de este marco crucial para la seguridad sanitaria mundial.
        </p>
      </section>

      <section>
        <h4>¿Cómo Funciona?</h4>
        <p>
          La aplicación permite a los usuarios subir documentos legales en formato PDF. Una vez cargado, el sistema realiza los siguientes pasos:
        </p>
        <ol>
          <li><strong>Extracción de Texto:</strong> El texto se extrae del PDF, limpiando elementos como encabezados y pies de página para aislar el contenido normativo.</li>
          <li><strong>Segmentación Inteligente:</strong> Usando patrones configurables por país, el sistema segmenta el texto en unidades lógicas (Artículos, Capítulos, Secciones).</li>
          <li><strong>Clasificación Temática:</strong> Cada fragmento de texto es analizado para detectar la presencia de términos y patrones asociados a los 7 temas clave del RSI (2005).</li>
          <li><strong>Visualización de Resultados:</strong> La interfaz muestra los temas detectados y los fragmentos de texto correspondientes, permitiendo un análisis rápido y eficiente.</li>
        </ol>
      </section>

      <section>
        <h4>Tecnología y Privacidad</h4>
        <p>
          RSI-Scanner está construido con tecnologías web modernas como Vue 3, Vite y Pinia en el frontend, y un backend ligero con Express.js. Todo el procesamiento de documentos se realiza localmente en el navegador del usuario o a través del servidor local, garantizando que los documentos (que pueden ser confidenciales) nunca abandonen el entorno del usuario.
        </p>
      </section>

      <section>
        <h4>¿Quiénes Somos?</h4>
        <p>
          Este proyecto es una iniciativa del <strong>Equipo RSI-Scanner / Posdoc 2025</strong>, un grupo dedicado a la aplicación de la tecnología para mejorar la transparencia y la rendición de cuentas en el ámbito de la salud pública.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
// No script logic needed for this static page yet
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
  line-height: 1.6;
}

.about-header {
  text-align: center;
  margin-bottom: 2rem;
}

.about-header h1 {
  color: #0053a0; /* WHO Blue */
  font-size: 2.5rem;
}

.card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 2rem;
}

.about-content h4 {
  color: #0053a0;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.about-content p,
.about-content li {
  color: #333;
}

.about-content ol {
  padding-left: 1.5rem;
}
</style>