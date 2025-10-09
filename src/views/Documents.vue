<template>
  <div class="documents-container">
    <header class="documents-header">
      <h1>Normas Detectadas</h1>
      <p>Esta sección listará los documentos legales analizados y sus resultados.</p>
    </header>
    <main class="documents-content card">
      <p>Funcionalidad en desarrollo. Próximamente podrá ver aquí una lista de los documentos procesados.</p>
    </main>
  </div>
</template>

<script setup>
// Future logic for fetching and displaying documents will go here.
</script>

<style scoped>
.documents-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
}
.documents-header {
  text-align: center;
  margin-bottom: 2rem;
}
.documents-header h1 {
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