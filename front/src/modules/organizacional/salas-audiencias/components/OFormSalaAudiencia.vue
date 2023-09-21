<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { max, required } from '@/common/rules'
import type { ISalasAudiencia } from '../salas-audiencias.types'
import { SalaAudienciaService } from '../services/sala-audiencia.service'

const props = defineProps<{ salas?: ISalasAudiencia }>()

const formulario = reactive<{ modelo: ISalasAudiencia; [key: string]: any }>({
  modelo: {} as ISalasAudiencia,
  ref: {} as HTMLFormElement
})

async function guardar() {
  const esExitoso = await formulario.ref.validate()
  if (!esExitoso) return

  let resultado: ISalasAudiencia | undefined

  if (formulario.modelo?.id != null) {
    resultado = await SalaAudienciaService.actualizar(formulario.modelo)
  } else {
    resultado = await SalaAudienciaService.guardar(formulario.modelo)
  }

  return resultado
}

onMounted(() => {
  if (!props.salas?.id) return
  formulario.modelo = props.salas
})

defineExpose({ guardar })
</script>

<template>
  <q-form
    :ref="(el) => (formulario.ref = el as HTMLFormElement)"
    data-cy="formulario-sala-audiencia"
  >
    <q-input
      v-model="formulario.modelo.descripcion"
      label="Descripcion"
      lazy-rules
      :rules="[required, (val) => max(val, 100)]"
      hint=""
    />
    <q-input
      v-model="formulario.modelo.ubicacion"
      label="Ubicacion"
      lazy-rules
      :rules="[required, (val) => max(val, 100)]"
      hint=""
    />
    <q-input
      v-model="formulario.modelo.dimension"
      label="Dimension"
      lazy-rules
      :rules="[required, (val) => max(val, 100)]"
      hint=""
    />

    <q-input
      v-model="formulario.modelo.capacidad"
      label="Capacidad"
      lazy-rules
      :rules="[required, (val) => max(val, 100)]"
      hint=""
    />

    <q-checkbox
      v-model="formulario.modelo.esCamaraGesell"
      label="Es camara Gesell"
      checked-icon="swipe_left"
      unchecked-icon="swipe_right"
      color="green"
      lazy-rules
      :rules="[required]"
      keep-color
    />
    <q-checkbox v-model="formulario.modelo.esCamaraGesell" />
  </q-form>
</template>

<style scoped></style>
