<script setup lang="ts">
import { useHandleService } from '@/common/composables/useHandleService'
import { type ICausa } from '../causas.types'
import { computed, onMounted, reactive, ref } from 'vue'
import { DepartamentoService } from '../../../geografico/departamentos/services/departamento.services'
import { OSelect } from '@/common/components'
import { max, maxFecha, required } from '@/common/rules'
import { CausaService } from '../../causas/services/causa.service'

const date = new Date()
const fechaFormateada = date.toISOString().split('T')[0]

const formulario = reactive<{ modelo: ICausa; ref: HTMLFormElement }>({
  modelo: {
    fechaHoraCreacion: fechaFormateada
  } as ICausa,
  ref: {} as HTMLFormElement
})

const departamentoHandleService = useHandleService(DepartamentoService.obtener, [])

const departamento = ref()
const valueRadioButton = ref()

const municipioHandleService = useHandleService(DepartamentoService.obtenerByCategoria, [])

async function guardar() {
  const esExitoso = await formulario.ref.validate()
  if (!esExitoso) return
  if (formulario.modelo?.id != null) {
    return await CausaService.actualizar()
  } else {
    const result = await CausaService.guardar(formulario.modelo)
    return result
  }
}

const municipioValue = computed({
  get: () => {
    return municipioHandleService.response.value.find(
      (v) => v.id == formulario.modelo.idMunicipioHecho
    )
  },
  set: (municipio) => {
    formulario.modelo.idMunicipioHecho = municipio?.id
  }
})

onMounted(() => {
  departamentoHandleService.executeService()
})
</script>
<template>
  <q-form :ref="(el) => (formulario.ref = el as HTMLFormElement)" data-cy="formulario-causa">
    <q-card>
      <q-card-section class="row">
        <div class="col-12 col-md-8">
          <div class="row q-gutter-xs">
            <q-input
              v-model="formulario.modelo.fechaHoraCreacion"
              label="Fecha de Querella"
              hint=""
              readonly
              class="col"
            />
            <q-input
              v-model="formulario.modelo.tags"
              label="Título del hecho"
              class="col"
              hint=""
              :rules="[required, (val) => max(val, 100)]"
            />
          </div>
          <div class="row q-gutter-xs">
            <OSelect
              :model-value="departamento"
              label="Departamento"
              :options="departamentoHandleService.response.value"
              option-label="descripcion"
              option-value="id"
              input-debounce="0"
              use-input
              fill-input
              hint=""
              autofocus
              hide-selected
              class="col"
              clearable
              @update:model-value="
                (obj) => {
                  departamento = obj
                  if (obj?.id) {
                    municipioHandleService.executeService(obj.id)
                  } else {
                    municipioValue = undefined
                    municipioHandleService.response.value = []
                  }
                }
              "
            />
            <OSelect
              v-model="municipioValue"
              label="Municipio"
              :options="municipioHandleService.response.value"
              clearable
              option-label="descripcion"
              option-value="id"
              input-debounce="0"
              use-input
              fill-input
              hint=""
              hide-selected
              class="col"
            />
          </div>
          <div class="row q-gutter-xs">
            <q-input
              v-model="formulario.modelo.hechoDireccion"
              label="Dirección del hecho"
              hint=""
              class="col"
              :rules="[(val) => max(val, 250)]"
            />
          </div>
          <div class="row q-gutter-xs">
            <q-input
              v-model="formulario.modelo.hechoZona"
              label="Zona del hecho"
              class="col"
              hint=""
              :rules="[(val) => max(val, 250)]"
            />
            <q-input
              v-model="undefined"
              class="col"
              label="Coordenadas latitud-longitud"
              readonly
              hint=""
            />
          </div>
          <div class="row q-gutter-xs">
            <q-input
              v-model="formulario.modelo.hechoReferenciaLugar"
              label="Referencia de dirección"
              class="col"
              hint=""
              :rules="[(val) => max(val, 250)]"
            />
          </div>
          <div class="row q-gutter-xs">
            <span class="text-body2 text-primary">Fecha del hecho</span>
          </div>
          <div class="row q-gutter-xs">
            <q-radio
              v-model="valueRadioButton"
              class="col-12 col-sm"
              val="uno"
              label="Fecha Exacta"
            />
            <q-radio
              v-model="valueRadioButton"
              class="col-12 col-sm"
              val="dos"
              label="Entre Fechas"
            />
            <q-radio
              v-model="valueRadioButton"
              class="col-12 col-sm"
              val="tres"
              label="Fecha Aproximada"
            />
          </div>
          <div class="row q-gutter-xs">
            <q-input
              v-if="valueRadioButton === 'uno' || valueRadioButton === 'dos'"
              v-model="formulario.modelo.hechoFechaHora"
              filled
              type="date"
              hint=""
              label="Fecha de inicio"
              class="col"
              :rules="[(val) => maxFecha(val)]"
              :max="fechaFormateada"
            />
            <q-input
              v-if="valueRadioButton === 'dos'"
              v-model="formulario.modelo.hechoFechaHoraFin"
              filled
              type="date"
              hint=""
              label="Fecha fin"
              class="col"
              :rules="[(val) => maxFecha(val)]"
              :max="fechaFormateada"
            />
            <q-input
              v-if="valueRadioButton === 'tres'"
              v-model="formulario.modelo.hechoFechaHoraAproximada"
              label="Fecha Aproximada"
              hint=""
              class="col"
            />
          </div>
          <div class="row q-gutter-xs">
            <q-input
              v-model="formulario.modelo.hechoRelato"
              type="textarea"
              label="Relato del hecho"
              class="col"
              :rules="[required, (val) => max(val, 5000)]"
            />
          </div>
        </div>
        <div class="col-12 col-md-4">MAPA</div>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn v-close-popup outline color="primary" icon="mdi-cancel" label="Cerrar" />
        <q-btn color="primary" icon="mdi-content-save-outline" label="Guardar" @click="guardar()" />
      </q-card-actions>
    </q-card>
  </q-form>
</template>

<style scoped lang="sass">
.avatar--border
  outline: 0.3rem solid gray
  outline-style: double
  //outline-offset: 0.3rem
</style>
