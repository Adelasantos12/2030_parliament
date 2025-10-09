<template>
  <div class="diff-container">
    <header class="diff-header">
      <h1>Comparación de Versiones</h1>
      <p>Esta sección permitirá comparar dos versiones de un documento para resaltar cambios en temas RSI.</p>
    </header>
    <main class="diff-content card">
      <p>Funcionalidad en desarrollo. Próximamente podrá comparar aquí dos textos o documentos.</p>
    </main>
  </div>
</template>

<script setup>
// Future logic for comparing document versions will go here.
</script>

<style scoped>
.diff-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
}
.diff-header {
  text-align: center;
  margin-bottom: 2rem;
}
.diff-header h1 {
  color: #0053a0;
}
.card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  color: #666;
}
</style>