<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { AutorizacionService } from '@/modules/autorizacion/login/services/autenticacion.service'
import GlobalStore from '@/global.store'
import { type InitUsuario } from '../../../../global.store'
import importImg from '@/assets/ciudadania2.png'

const { setUsuario } = GlobalStore
const router = useRouter()
const tabLogin = ref('loginGP')
const usuario = ref<InitUsuario>()

const formulario = ref({
  usuario: 'usuario',
  clave: 'hola123',
  estaVisibleClave: false,
  estaCargando: false,
  onSubmit: async () => {
    const credenciales: { usuario: string; clave: string } = {
      usuario: formulario.value.usuario,
      clave: formulario.value.clave
    }

    formulario.value.estaCargando = true
    usuario.value = await AutorizacionService.iniciarSesion(credenciales)
    formulario.value.estaCargando = false
    usuario.value && setUsuario(usuario.value)
    usuario.value && router.push('/')
  }
})
</script>
<template>
  <!-- LOGIN -->
  <q-layout view="hHh lpR fFf">
    <q-page-container v-if="Object.entries(router.currentRoute.value.query).length === 0">
      <q-page class="row justify-center items-center fondo">
        <q-card class="card-login" bordered>
          <q-card-section class="text-center q-pb-lg">
            <div class="text-h5 text-center">ACCESO AL SISTEMA</div>
            <img
              alt="Logo"
              class="logo card"
              src="@/assets/escudo-de-bolivia.png"
              style="width: 8rem"
            />
            <div class="text-h5 text-weight-bolder text-center">ÓRGANO JUDICIAL</div>
            <div class="text-subtitle2 text-center font-custom">
              ESTADO PLURINACIONAL DE BOLIVIA
            </div>
          </q-card-section>
          <q-card-section>
            <q-tab-panels v-model="tabLogin" animated>
              <q-tab-panel name="ciudadaniaDigital">
                <div class="text-center">
                  <q-btn
                    stack
                    flat
                    color="light-green-7"
                    class="btn-style"
                    size="md"
                    @click="undefined"
                  >
                    <q-icon :name="`img:${importImg}`" size="8rem" class="q-mr-md" />
                    Iniciar Sesión por Ciudadania Digital
                  </q-btn>
                </div>
                <div
                  class="text-center q-pa-md text-xs q-ml-md point-click text-primary"
                  @click="tabLogin = 'loginGP'"
                >
                  No tengo Ciudadanía Digital
                </div>
              </q-tab-panel>

              <q-tab-panel name="loginGP" class="q-py-none">
                <q-form class="q-gutter-md" @submit="formulario.onSubmit">
                  <q-input v-model="formulario.usuario" label="Usuario">
                    <template #prepend>
                      <q-icon name="mdi-account" />
                    </template>
                  </q-input>
                  <q-input
                    v-model="formulario.clave"
                    :type="formulario.estaVisibleClave ? 'text' : 'password'"
                    label="Contraseña"
                  >
                    <template #prepend>
                      <q-icon name="mdi-lock" />
                    </template>
                    <template #append>
                      <q-icon
                        :name="formulario.estaVisibleClave ? 'mdi-eye-off' : 'mdi-eye'"
                        class="cursor-pointer"
                        @click="formulario.estaVisibleClave = !formulario.estaVisibleClave"
                      />
                    </template>
                  </q-input>
                  <div>
                    <q-btn
                      class="full-width"
                      label="Ingresar"
                      color="primary"
                      icon="mdi-login"
                      type="submit"
                      :disabled="!formulario.usuario || !formulario.clave"
                      :loading="formulario.estaCargando"
                    />
                  </div>
                </q-form>
              </q-tab-panel>
            </q-tab-panels>
          </q-card-section>

          <div class="row items-center">
            <div class="col"><q-separator inset /></div>
            <div class="col-auto">O</div>
            <div class="col"><q-separator inset /></div>
          </div>

          <q-card-section>
            <div class="text-center">
              <q-btn
                flat
                color="primary"
                icon="mdi-fingerprint"
                label="Ingresa con Ciudadanía Digital"
                @click="undefined"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<style lang="sass" scoped>
.card-login
  background-color:  rgba(255,255,255,0.90)
.font-custom
  letter-spacing: 0.25em
  text-indent: 0.26em
  line-height: 1.5em
  color: lightslategray
.fondo
  background: lightgrey
.point-click
  cursor: pointer

:deep(.q-icon > img)
  filter: drop-shadow(1px 0px 1px #000) !important
</style>
