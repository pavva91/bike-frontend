import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventEdit from '../views/event/Edit.vue'
import EventRegister from '../views/event/Register.vue'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      // path: '/:pathMatch(.*)*',
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
      props: {
        showExtra: false,
      },
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: () => import('../views/NotFoundView.vue'),
      props: true,
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: () => import('../views/NetworkError.vue'),
      props: true,
    },
    {
      path: '/events',
      name: 'EventList',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: '/list',
      name: 'EventListPinia',
      component: () => import('../views/EventListStoreView.vue'),
    },
    {
      path: '/events/:id',
      name: 'EventLayout',
      // props: true,
      props: (route) => ({
        id: route.params.id,
        showExtra: route.query.e,
      }),
      component: () => import('../views/event/Layout.vue'),
      children: [
        {
          path: '',
          name: 'EventDetails',
          component: () => import('../views/event/Details.vue'),
        },
        {
          path: 'register',
          name: 'EventRegister',
          component: EventRegister,
        },
        {
          path: 'edit',
          name: 'EventEdit',
          component: EventEdit,
        },
      ],
    },
    {
      path: '/event/:id',
      redirect: (to) => {
        return {
          name: 'EventDetails',
          params: { id: to.params.id },
        }
      },
    },
    {
      path: '/event/create',
      name: 'EventCreate',
      component: () => import('../views/EventCreateView.vue'),
    },
    {
      path: '/about',
      redirect: { name: 'about' },
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import('../views/ContactsView.vue'),
    },
    {
      name: 'About',
      path: '/about-us',
      alias: '/about-who',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
    {
      path: '/tours/:type/:id',
      name: 'Tours',
      component: () => import('../views/ToursView.vue'),
      props: (route) => ({
        type: route.params.type,
        id: route.params.id,
      }),
    },
  ],
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
