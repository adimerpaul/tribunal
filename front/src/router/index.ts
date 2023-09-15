import { createRouter, createWebHistory } from 'vue-router'
import VLogin from '../modules/autorizacion/login/views/VLogin.vue'
import AppAutenticado from '../AppAutenticado.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: AppAutenticado,
      meta: {
        authRequired: true
      },
      children: [
        {
          path: 'administracion/permisos',
          name: 'administracion.permisos',
          component: () => import('../modules/autorizacion/permisos/views/VPermisos.vue'),
          meta: { tituloPagina: 'PERMISOS' }
        },
        {
          path: 'administracion/menus',
          name: 'administracion.menus',
          component: () => import('../modules/autorizacion/menus/views/VMenus.vue'),
          meta: { tituloPagina: 'MENUS' }
        },
        {
          path: '/administracion/usuarios',
          name: '/administracion/Usuarios',
          component: () => import('../modules/autorizacion/usuarios/views/VUsuarios.vue'),
          meta: { tituloPagina: 'USUARIOS' }
        },
        {
          path: '/administracion/roles',
          name: '/administracion/roles',
          component: () => import('../modules/autorizacion/roles/views/VRoles.vue'),
          meta: { tituloPagina: 'ROLES' }
        },
        {
          path: '/administracion/scanner',
          name: '/administracion/scanner',
          component: () => import('../modules/autorizacion/scanner/views/VScanner.vue'),
          meta: { tituloPagina: 'Scanner' }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: VLogin
    }
    /* {
      path: '/documento/aprobado',
      name: 'aprobacion',
      component: () => import('../modules/aprobacion/views/VAprobacion.vue'),
      meta: {
        authRequired: true
      }
    } */
  ]
})

router.onError((error, to) => {
  if (
    error.message.includes('Failed to fetch dynamically imported module') ||
    error.message.includes('Importing a module script failed')
  ) {
    ;(window as Window).location = to.fullPath
  }
})

export default router
