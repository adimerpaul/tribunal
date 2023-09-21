<script lang="ts" setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import OFormCausa from '../components/OFormCausa.vue'
import OSujetosProcesales from '../components/OSujetosProcesales.vue'

const $q = useQuasar()
const step = ref(1)
</script>
<template>
  <q-stepper
    ref="stepper"
    v-model="step"
    color="primary"
    animated
    flat
    :contracted="$q.screen.lt.sm"
  >
    <q-step :name="1" title="Datos Generales" icon="mdi-file-document-edit" :done="step > 1">
      <OFormCausa />
    </q-step>

    <q-step :name="2" title="Sujetos Procesales" icon="mdi-account-group" :done="step > 2">
      <OSujetosProcesales />
    </q-step>

    <q-step :name="3" title="Digitalizar" icon="mdi-file-find">
      <OFormDigitalizar />
    </q-step>

    <template #navigation>
      <q-stepper-navigation class="flex">
        <q-space />
        <q-btn
          v-if="step > 1"
          flat
          color="primary"
          label="Atrás"
          class="q-ml-sm"
          @click="($refs?.stepper as any).previous && ($refs?.stepper as any).previous()"
        />
        <q-btn
          color="primary"
          :label="step === 3 ? 'Finalizar' : 'Guardar y Continuar'"
          @click="($refs?.stepper as any).next && ($refs?.stepper as any).next()"
        />
      </q-stepper-navigation>
    </template>
  </q-stepper>
</template>

<style lang="sass" scoped>
:deep(.q-stepper__tab)
  padding-top: 0
  padding-bottom: 0
.q-stepper__step
  height: calc( 100vh - 14rem )
:deep(.q-stepper__step-inner)
  padding-top: 0
</style>
