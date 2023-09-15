<script setup lang="ts">
import { type QInputProps } from 'quasar'
import { PermisoService } from '../services/persona.service'

const props = defineProps<QInputProps>()

const emit = defineEmits<{ onBuscarPersona: [persona: string] }>()

async function encontrarPersona(ci?: string | number | null) {
  if (!ci) return
  const resultado = await PermisoService.encontrar(ci.toString())
  resultado && emit('onBuscarPersona', resultado)
}
</script>

<template>
  <q-input
    v-bind="{ ...props }"
    @keyup.enter="
      (valor: Event) => {
        encontrarPersona((valor.target as HTMLInputElement).value)
      }
    "
  >
    <template #append>
      <q-btn
        round
        dense
        flat
        color="primary"
        icon="mdi-account-search"
        @click="encontrarPersona(props.modelValue)"
      />
    </template>
  </q-input>
</template>
