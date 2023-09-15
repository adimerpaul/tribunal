<script lang="ts" setup>
import { ref } from 'vue'
import GlobalStore from '@/global.store'
import { useRouter } from 'vue-router'

const tituloApp = import.meta.env.VITE_TITULO_APP
const router = useRouter()

const { state, eliminarUsuario } = GlobalStore

const leftDrawerOpen = ref(false)
const miniState = ref(true)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

async function cerrarSesion() {
  eliminarUsuario()
  router.push('/login')
}
</script>

<template>
  <q-layout view="hHh LpR fff">
    <q-header class="bg-white text-dark">
      <q-toolbar>
        <q-btn dense flat round icon="mdi-menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar size="2rem" style="margin-top: -0.5rem">
            <img src="@/assets/escudo-de-bolivia.png" alt="logo" />
          </q-avatar>
          <span class="ellipsis q-ma-sm">{{ tituloApp }}</span>
        </q-toolbar-title>

        <q-btn
          flat
          class="q-pa-xs"
          size="lg"
          :icon="$q.fullscreen.isActive ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'"
          @click="$q.fullscreen.toggle()"
        />

        <q-btn flat class="q-pa-xs" size="md" icon="mdi-bell-badge" />

        <q-btn flat icon="mdi-account-circle" class="q-pa-xs" size="md">
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Roles</div>
                <!-- {{ state.usuario.cadenaRoles ?? '' }} -->
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img
                    alt="foto"
                    :src="state.usuario?.persona?.fotografia"
                    style="object-fit: cover"
                  />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs text-center">
                  {{ state.usuario?.persona?.nombreCompleto ?? '' }}
                </div>

                <q-btn
                  v-close-popup
                  color="primary"
                  label="Cerrar Sesión"
                  push
                  size="sm"
                  @click="cerrarSesion"
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" :breakpoint="500" :width="250">
      <q-list v-if="state.menus">
        <template v-for="menu in state.menus" :key="menu.id">
          <q-item
            v-if="!menu.subMenus || menu.subMenus.length === 0"
            v-ripple
            clickable
            :to="menu.url"
            :active="
              menu.url.length > 1
                ? router.currentRoute.value.fullPath.includes(menu.url)
                : router.currentRoute.value.fullPath === menu.url
            "
          >
            <q-item-section side>
              <q-icon
                :name="menu.icono"
                :color="
                  menu.url.length > 1
                    ? router.currentRoute.value.fullPath.includes(menu.url)
                      ? 'primary'
                      : 'black'
                    : 'black'
                "
              />
            </q-item-section>

            <q-item-section> {{ menu.nombre }} </q-item-section>
          </q-item>

          <q-expansion-item
            v-else
            expand-separator
            :icon="menu.icono"
            :label="menu.nombre"
            :content-inset-level="0.5"
            @click="miniState = false"
          >
            <q-separator />
            <template v-for="subMenu in menu.subMenus" :key="subMenu.id">
              <q-item
                v-ripple
                clickable
                :to="subMenu.url"
                :active="router.currentRoute.value.fullPath.includes(subMenu.url)"
              >
                <q-item-section side>
                  <q-icon
                    :name="subMenu.icono"
                    :color="
                      router.currentRoute.value.fullPath.includes(menu.url) ? 'primary' : 'black'
                    "
                  />
                </q-item-section>

                <q-item-section> {{ subMenu.nombre }} </q-item-section>
              </q-item>
              <q-separator />
            </template>
          </q-expansion-item>

          <q-separator />
        </template>
      </q-list>
    </q-drawer>

    <q-page-container style="background-color: #f5f5f5">
      <q-page class="q-pa-md">
        <q-card v-if="$route.meta.tituloPagina" class="q-mb-sm" style="background: #fafbfe" flat>
          <q-card-section class="q-py-xs q-px-sm">
            <div class="text-h6" style="color: #6c757d">
              {{ $route.meta.tituloPagina }}
            </div>
          </q-card-section>
        </q-card>

        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
