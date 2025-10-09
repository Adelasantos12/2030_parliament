import { createRouter, createWebHistory } from 'vue-router';
import config from '@/config';

// Import views
import Search from '@/views/Search.vue';
import About from '@/views/About.vue';
import Documents from '@/views/Documents.vue';
import Diff from '@/views/Diff.vue';
import Stats from '@/views/Stats.vue';
import Page404 from '@/views/Page404.vue';

const routes = [
  {
    path: '/',
    name: 'search',
    component: Search,
    meta: { title: `Scanner - ${config.DEFAULT_PAGE_TITLE}` },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { title: `About - ${config.DEFAULT_PAGE_TITLE}` },
  },
  {
    path: '/documents',
    name: 'documents',
    component: Documents,
    meta: { title: `Documents - ${config.DEFAULT_PAGE_TITLE}` },
  },
  {
    path: '/diff',
    name: 'diff',
    component: Diff,
    meta: { title: `Compare - ${config.DEFAULT_PAGE_TITLE}` },
  },
  {
    path: '/stats',
    name: 'stats',
    component: Stats,
    meta: { title: `Statistics - ${config.DEFAULT_PAGE_TITLE}` },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Page404',
    component: Page404,
    meta: { title: `Not Found - ${config.DEFAULT_PAGE_TITLE}` },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || config.DEFAULT_PAGE_TITLE;
  next();
});

export default router;