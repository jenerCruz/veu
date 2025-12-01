import TimeTracker from '@/views/apps/TimeTracker.vue';
import Sales from '@/views/apps/Sales.vue';
import Evidence from '@/views/apps/Evidence.vue';

const routes = [
  // ... otras rutas existentes
  {
    path: '/timetracker',
    name: 'TimeTracker',
    component: TimeTracker,
  },
  {
    path: '/sales',
    name: 'Sales',
    component: Sales,
  },
  {
    path: '/evidence',
    name: 'Evidence',
    component: Evidence,
  },
];
