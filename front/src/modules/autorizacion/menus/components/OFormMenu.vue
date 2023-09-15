<script setup lang="ts">
import { max, maxDigit, required } from '@/common/rules'
import { type IMenu } from '../menus.types'
import { reactive, onMounted, computed } from 'vue'
import { MenuService } from '../services/menu.service'
import { useHandleService } from '@/common/composables/useHandleService'
import { OSelect } from '@/common/components'

const props = defineProps<{ menu?: IMenu }>()

async function service() {
  const resultado = (await MenuService.obtener({ perPage: 1000, page: 0, search: [], sort: [] }))
    .result
  return resultado
}
const menusResultado = useHandleService(service, [])
const formulario = reactive<{ modelo: IMenu; ref: HTMLFormElement }>({
  modelo: {} as IMenu,
  ref: {} as HTMLFormElement
})

async function guardar() {
  const esExitoso = await formulario.ref.validate()
  if (!esExitoso) return

  let resultado: IMenu | undefined

  if (formulario.modelo?.id != null) {
    resultado = await MenuService.actualizar(formulario.modelo)
  } else {
    resultado = await MenuService.guardar(formulario.modelo)
  }

  return resultado
}

const menuPadre = computed({
  get: () => {
    return menusResultado.response.value.find((v) => v.id === formulario.modelo?.idPadre)
  },
  set: (val) => {
    formulario.modelo.idPadre = val?.id
  }
})

onMounted(() => {
  menusResultado.executeService().then(() => {
    if (!props.menu?.id) return
    formulario.modelo = props.menu
  })
})

defineExpose({ guardar })
</script>

<template>
  <q-form :ref="(el) => (formulario.ref = el as HTMLFormElement)" data-cy="formulario-menu">
    <OSelect
      v-model="menuPadre"
      label="Menu Padre"
      :options="menusResultado.response.value"
      option-label="descripcion"
      option-value="id"
      input-debounce="0"
      use-input
      fill-input
      hint=""
      autofocus
      hide-selected
      clearable
    />
    <q-input
      v-model="formulario.modelo.nombre"
      label="Nombre"
      lazy-rules
      :rules="[required, (val) => max(val, 60)]"
      hint=""
    />

    <q-input
      v-model="formulario.modelo.descripcion"
      label="Descripción"
      lazy-rules
      :rules="[required, (val) => max(val, 250)]"
      hint=""
    />

    <q-input
      v-model="formulario.modelo.icono"
      :rules="[required, (val) => max(val, 50)]"
      label="Icono"
      placeholder="mdi-home"
      lazy-rules
      hint=""
    >
      <template #prepend>
        <q-icon
          size="sm"
          :name="formulario.modelo.icono?.includes('mdi-') ? formulario.modelo.icono : 'mdi-help'"
        />
      </template>
    </q-input>

    <q-input
      v-model="formulario.modelo.url"
      label="Url"
      lazy-rules
      :rules="[required, (val) => max(val, 50)]"
      hint=""
    />

    <q-input
      v-model.number="formulario.modelo.ordenDespliegue"
      label="Order de Despliegue"
      type="number"
      lazy-rules
      :min="0"
      :max="999"
      :rules="[required, (val) => maxDigit(val, 3)]"
      hint=""
    />
  </q-form>
</template>
