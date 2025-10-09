import { defineStore } from 'pinia';
import api from '@/api';
import config from '@/config';

export const useRsiStore = defineStore('rsi', {
  state: () => ({
    topics: config.RSI_TOPICS || [],
    documents: [],
    stats: [],
    alerts: [],
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchTopics() {
      // Topics are now loaded from config, but an API call can be added here if needed
      if (!this.topics || this.topics.length === 0) {
        console.warn("No RSI topics found in config.");
      }
    },

    async searchDocuments(query) {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await api.getDocuments({ q: query });
        this.documents = response.data;
      } catch (error) {
        this.error = 'Failed to fetch documents.';
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },

    async fetchStats() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await api.getStats();
        this.stats = response.data;
      } catch (error) {
        this.error = 'Failed to fetch stats.';
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },

    async saveAlert(params) {
      this.isLoading = true;
      this.error = null;
      try {
        await api.saveAlert(params);
        // Optionally, you can add the new alert to the local state
        // this.alerts.push(params);
      } catch (error) {
        this.error = 'Failed to save alert.';
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },

    // Action to handle PDF upload and classification
    async processDocument(file, country) {
      this.isLoading = true;
      this.error = null;
      try {
        const uploadResponse = await api.uploadDocument(file);
        const { text } = uploadResponse.data; // Assuming backend returns extracted text

        const classifyResponse = await api.classifyText(text, country);
        // This is a placeholder. You would typically update the state with the classified document.
        // For example, adding it to the `documents` array.
        console.log('Classification result:', classifyResponse.data);
        return classifyResponse.data;

      } catch (error) {
        this.error = 'Failed to process document.';
        console.error(error);
        return null;
      } finally {
        this.isLoading = false;
      }
    }
  },
});