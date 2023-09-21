<script setup lang="ts">
import { reactive, computed, onMounted } from 'vue'
import { max, required } from '@/common/rules'
import { OficinaService } from '../services/oficina.service'
import { type IOficina } from '../oficinas.types'
const props = defineProps<{ oficina?: IOficina }>()

const formulario = reactive<{ modelo: IOficina; [key: string]: any }>({
  modelo: {} as IOficina,
  ref: {} as HTMLFormElement
})

async function guardar() {
  const esExitoso = await formulario.ref.validate()
  if (!esExitoso) return

  let resultado: IOficina | undefined

  if (formulario.modelo?.id != null) {
    resultado = await OficinaService.actualizar(formulario.modelo)
  } else {
    resultado = await OficinaService.guardar(formulario.modelo)
  }

  return resultado
}

onMounted(() => {
  if (!props.oficina?.id) return
  formulario.modelo = props.oficina
})

defineExpose({ guardar })
</script>

<template>
  <q-form
    :ref="(el) => (formulario.ref = el as HTMLFormElement)"
    data-cy="formulario-oficina"
    class="row q-gutter-sm"
  >
    <q-input
      v-model="formulario.modelo.descripcion"
      label="Descripcion"
      lazy-rules
      :rules="[required, (val) => max(val, 250)]"
      hint=""
    />

    <q-input
      v-model="formulario.modelo.direccion"
      label="Direccion"
      lazy-rules
      :rules="[required, (val) => max(val, 500)]"
      hint=""
    />

    <q-input v-model="formulario.modelo.telefonos" label="Teléfono" hint="" />
  </q-form>
</template>

<style scoped></style>
