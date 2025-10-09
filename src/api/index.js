import config from '@/config';
import axios from 'axios';

const API_URL = config.URL;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  /**
   * Uploads a PDF file for processing.
   * @param {File} file - The PDF file to upload.
   * @returns {Promise} - The axios promise for the request.
   */
  uploadDocument(file) {
    const formData = new FormData();
    formData.append('document', file); // 'document' is the field name the server expects
    return apiClient.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  /**
   * Sends text to the backend for classification against RSI themes.
   * @param {string} text - The text to classify.
   * @param {string} country - The country code for parsing rules.
   * @returns {Promise} - The axios promise for the request.
   */
  classifyText(text, country) {
    return apiClient.post('/classify', { text, country });
  },

  /**
   * Compares two text versions and returns the differences.
   * @param {string} textA - The original text.
   * @param {string} textB - The new text.
   * @returns {Promise} - The axios promise for the request.
   */
  diffTexts(textA, textB) {
    return apiClient.post('/diff', { textA, textB });
  },

  /**
   * Fetches statistics about RSI theme detection.
   * @returns {Promise} - The axios promise for the request.
   */
  getStats() {
    return apiClient.get('/stats');
  },

  /**
   * Placeholder for fetching a list of processed documents.
   */
  getDocuments() {
    console.warn('getDocuments is not yet implemented.');
    return Promise.resolve({ data: [] });
  },

  /**
   * Placeholder for fetching versions of a specific document.
   */
  getVersions(documentId) {
    console.warn(`getVersions for document ${documentId} is not yet implemented.`);
    return Promise.resolve({ data: [] });
  },

  /**
   * Placeholder for saving an alert.
   */
  saveAlert(params) {
    console.warn('saveAlert is not yet implemented.', params);
    return Promise.resolve({ data: { status: 'ok' } });
  }
};