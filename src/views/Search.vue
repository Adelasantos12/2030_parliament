<template>
  <div class="scanner-container">
    <header class="scanner-header">
      <h1>RSI-Scanner (IHR-LatAm)</h1>
      <p>
        Analice documentos legales en formato PDF para detectar su relación con el
        Reglamento Sanitario Internacional (2005).
      </p>
    </header>

    <main class="scanner-main">
      <div class="scanner-controls card">
        <div class="control-group">
          <label for="country-select">País del Documento:</label>
          <select id="country-select" v-model="selectedCountry">
            <option disabled value="">Seleccione un país</option>
            <option v-for="country in countries" :key="country.code" :value="country.code">
              {{ country.name }}
            </option>
          </select>
        </div>

        <div class="control-group">
          <label for="file-upload">Subir Documento (PDF):</label>
          <input
            type="file"
            id="file-upload"
            @change="handleFileChange"
            accept=".pdf"
            :disabled="!selectedCountry"
          />
        </div>

        <button @click="analyzeDocument" :disabled="!isAnalyzable">
          Analizar Documento
        </button>
      </div>

      <div v-if="isLoading" class="loading-indicator">
        <p>Procesando documento... por favor espere.</p>
      </div>

      <div v-if="error" class="error-message card">
        <p><strong>Error:</strong> {{ error }}</p>
      </div>

      <div v-if="analysisResult" class="results-container card">
        <h2>Resultados del Análisis</h2>
        <div class="result-section">
          <h3>Temas RSI Detectados</h3>
          <ul>
            <li v-for="tag in analysisResult.tags" :key="tag.label">
              <strong>{{ tag.label }}</strong> (Relevancia: {{ (tag.score * 100).toFixed(2) }}%)
            </li>
          </ul>
           <div v-if="!analysisResult.tags || analysisResult.tags.length === 0">
            <p>No se detectaron temas RSI específicos en el texto proporcionado.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRsiStore } from '@/stores/rsi';
import countryConfig from '@/config/countries';

const rsiStore = useRsiStore();

const selectedFile = ref(null);
const selectedCountry = ref('');
const countries = ref(countryConfig);
const analysisResult = ref(null);

const isLoading = computed(() => rsiStore.isLoading);
const error = computed(() => rsiStore.error);
const isAnalyzable = computed(() => selectedFile.value && selectedCountry.value);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file && file.type === 'application/pdf') {
    selectedFile.value = file;
    analysisResult.value = null; // Reset previous results
    rsiStore.error = null; // Reset previous errors
  } else {
    rsiStore.error = 'Por favor, seleccione un archivo PDF válido.';
    selectedFile.value = null;
  }
};

const analyzeDocument = async () => {
  if (!isAnalyzable.value) {
    rsiStore.error = 'Por favor, seleccione un país y un archivo para analizar.';
    return;
  }
  analysisResult.value = null;
  const result = await rsiStore.processDocument(selectedFile.value, selectedCountry.value);
  if (result) {
    analysisResult.value = result;
  }
};
</script>

<style scoped>
.scanner-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
}

.scanner-header {
  text-align: center;
  margin-bottom: 2rem;
}

.scanner-header h1 {
  color: #0053a0; /* WHO Blue */
}

.card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.scanner-controls .control-group {
  margin-bottom: 1rem;
}

.scanner-controls label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.scanner-controls select,
.scanner-controls input[type='file'] {
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.scanner-controls button {
  width: 100%;
  padding: 0.75rem;
  background-color: #0053a0;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.scanner-controls button:disabled {
  background-color: #a0a0a0;
  cursor: not-allowed;
}

.loading-indicator,
.error-message {
  text-align: center;
}

.error-message {
  color: #d32f2f;
  background-color: #ffebee;
  border-color: #d32f2f;
}

.results-container h2 {
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.result-section ul {
  list-style-type: none;
  padding: 0;
}
</style>