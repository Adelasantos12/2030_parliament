<template>
  <div class="stats-container">
    <header class="stats-header">
      <h1>Estadísticas</h1>
      <p>Esta sección mostrará gráficos y datos sobre los temas RSI detectados por año y país.</p>
    </header>
    <main class="stats-content card">
      <p>Funcionalidad en desarrollo. Próximamente podrá ver aquí gráficos interactivos.</p>
    </main>
  </div>
</template>

<script setup>
// Future logic for fetching and displaying statistics will go here.
</script>

<style scoped>
.stats-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
}
.stats-header {
  text-align: center;
  margin-bottom: 2rem;
}
.stats-header h1 {
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