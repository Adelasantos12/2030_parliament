export default {
  SHORTNAME: import.meta.env.VITE_VUE_APP_SHORTNAME || 'RSI-Scanner',
  URL: import.meta.env.VITE_VUE_APP_BACKEND_URL || 'http://localhost:8080',
  KNOWLEDGEBASE: 'RSI2005',
  LOGO: '/rsi-logo.svg',
  DEFAULT_PAGE_TITLE: 'RSI-Scanner (IHR-LatAm)',

  MENU: [
    {
      route: 'search',
      name: 'Scanner',
      condition: true,
    },
    {
      route: 'about',
      name: 'About',
      condition: true,
    },
  ],

  DEFAULT_METATAGS: [
    {
      name: 'description',
      content: 'RSI-Scanner: herramienta para detectar y analizar cambios legales relacionados con el Reglamento Sanitario Internacional (2005) en América Latina.',
    },
    {
      name: 'keywords',
      content: 'salud pública, Reglamento Sanitario Internacional 2005, RSI, International Health Regulations, legislación sanitaria, vigilancia epidemiológica, puntos de entrada, cuarentena, bioseguridad, emergencia de salud pública, América Latina, OMS, OPS, IHR 2005',
    },
    {
      name: 'author',
      content: 'Equipo RSI-Scanner / Posdoc 2025',
    },
  ],

  RSI_TOPICS: [
    {
      slug: 'vigilancia-notificacion',
      label: 'Vigilancia y notificación',
      rsiArticles: '5, 6, 7, 8, Anexo 2',
      color: '#0053A0', // azul
    },
    {
      slug: 'puntos-entrada',
      label: 'Puntos de entrada',
      rsiArticles: '19–22, Anexo 1.B',
      color: '#4CAF50', // verde
    },
    {
      slug: 'medidas-sanitarias',
      label: 'Medidas sanitarias (viajeros/medios)',
      rsiArticles: '23–31',
      color: '#FF9800', // naranja
    },
    {
      slug: 'coordinacion-espii',
      label: 'Coordinación y emergencias (ESPII)',
      rsiArticles: '48–49',
      color: '#00BCD4', // turquesa
    },
    {
      slug: 'documentos-certificados',
      label: 'Documentos y certificados',
      rsiArticles: '35–39, Anexos 6–9',
      color: '#9C27B0', // morado
    },
    {
      slug: 'datos-personales',
      label: 'Datos personales y garantías',
      rsiArticles: '45–47',
      color: '#F44336', // rojo
    },
    {
      slug: 'financiamiento-emergencia',
      label: 'Financiamiento en emergencia',
      rsiArticles: '5, Anexo 1',
      color: '#388E3C', // verde oscuro
    },
  ],

  STYLES: {
    defaultColor: '#cccccc',
  },
};