<script setup lang="ts">
import { reactive, computed, onMounted, ref } from 'vue'
import type { ITipoAudiencia } from '../tipoAudiencia.types'
import { max, required } from '@/common/rules'
import { AudienciaService } from '../services/tipoAudiencia.service'

const props = defineProps<{ audiencia?: ITipoAudiencia }>()

const formulario = reactive<{ modelo: ITipoAudiencia; [key: string]: any }>({
  modelo: {} as ITipoAudiencia,
  ref: {} as HTMLFormElement
})

const valueRadioButton = ref()

async function guardar() {
  const esExitoso = await formulario.ref.validate()
  if (!esExitoso) return

  let resultado: ITipoAudiencia | undefined

  if (formulario.modelo?.id != null) {
    resultado = await AudienciaService.actualizar(formulario.modelo)
  } else {
    resultado = await AudienciaService.guardar(formulario.modelo)
  }

  return resultado
}

onMounted(() => {
  if (!props.audiencia?.id) return
  formulario.modelo = props.audiencia
})

defineExpose({ guardar })
</script>

<template>
  <q-form :ref="(el) => (formulario.ref = el as HTMLFormElement)" data-cy="formulario-audiencia">
    <q-input
      v-model="formulario.modelo.descripcion"
      label="Descripcion"
      lazy-rules
      :rules="[required, (val) => max(val, 150)]"
      hint=""
    />

    <div class="col-12 col-md">
      <span class="text-body2 text-primary">Plazos</span>
    </div>
    <div class="row q-gutter-xs">
      <q-input v-model.number="formulario.modelo.plazoMinimo" label="Plazo Minimo" hint="" />
      <q-radio v-model="valueRadioButton" val="" label="Dias" />
      <q-radio v-model="valueRadioButton" val="" label="Horas" />
    </div>

    <div class="row q-gutter-xs">
      <q-input
        v-model.number="formulario.modelo.plazoIntermedio"
        label="Plazo Intermedio"
        lazy-rules
        :rules="[required]"
        hint=""
      />
      <q-radio v-model="valueRadioButton" val="" label="Dias" />
      <q-radio v-model="valueRadioButton" val="" label="Horas" />
    </div>

    <div class="row q-gutter-xs">
      <q-input v-model.number="formulario.modelo.plazoMaximo" label="Plazo Maximo" hint="" />
      <q-radio v-model="valueRadioButton" val="" label="Dias" />
      <q-radio v-model="valueRadioButton" val="" label="Horas" />
    </div>

    <q-input
      v-model="formulario.modelo.leyNormativa"
      label="Ley Normativa"
      lazy-rules
      :rules="[(val) => max(val, 100)]"
      hint=""
    />

    <span class="text-body2 text-primary">Duracion por Denunciado en Minutos</span>

    <div class="row q-gutter-xs">
      <q-select
        v-model.number="formulario.modelo.duracionMinima"
        label="Minima"
        :options="[10, 15, 20, 25]"
        option-label="Minima"
        lazy-rules
        class="col single-line-value-select"
        hint=""
      />
      <q-select
        v-model.number="formulario.modelo.duracionMedia"
        label="Media"
        :options="[10, 15, 20, 25]"
        option-label="Media"
        lazy-rules
        class="col single-line-value-select"
        hint=""
      />
      <q-select
        v-model.number="formulario.modelo.duracionMaxima"
        label="Maxima"
        :options="[10, 15, 20, 25]"
        option-label="Maxima"
        lazy-rules
        class="col single-line-value-select"
        hint=""
      />
    </div>

    <div class="row q-gutter-xs">
      <q-input
        v-model.number="formulario.modelo.sujetos"
        label="Cantidad de Sujetos"
        lazy-rules
        class="col single-line-value-select"
        hint=""
      />
      <q-input
        v-model.number="formulario.modelo.incremento"
        label="Incremento por Sujeto"
        lazy-rules
        class="col single-line-value-select"
        hint=""
      />
    </div>
  </q-form>
</template>

<style scoped></style>
