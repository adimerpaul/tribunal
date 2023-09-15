<script setup lang="ts">
import { reactive, computed, onMounted } from 'vue'
import { type IPermiso } from '../permisos.types'
import { max, required } from '@/common/rules'
import { PermisoService } from '../services/permiso.service'

const props = defineProps<{ permiso?: IPermiso }>()

const enum TIPO {
  BACKEND = 'BACKEND',
  FRONTEND = 'FRONTEND'
}

const tipos = [
  {
    etiqueta: 'Backend',
    valor: TIPO.BACKEND
  },
  {
    etiqueta: 'Frontend',
    valor: TIPO.FRONTEND
  }
]

const accionesBackend = [
  {
    etiqueta: 'Get',
    valor: 'GET'
  },
  {
    etiqueta: 'Post',
    valor: 'POST'
  },
  {
    etiqueta: 'Patch',
    valor: 'PATCH'
  },
  {
    etiqueta: 'Put',
    valor: 'PUT'
  },
  {
    etiqueta: 'Delete',
    valor: 'DELETE'
  }
]

const accionesFront = [
  {
    etiqueta: 'Crear',
    valor: 'CREATE'
  },
  {
    etiqueta: 'Leer',
    valor: 'READ'
  },
  {
    etiqueta: 'Editar',
    valor: 'EDIT'
  },
  {
    etiqueta: 'Eliminar',
    valor: 'DELETE'
  }
]

const formulario = reactive<{ modelo: IPermiso; [key: string]: any }>({
  modelo: {} as IPermiso,
  ref: {} as HTMLFormElement
})

async function guardar() {
  const esExitoso = await formulario.ref.validate()
  if (!esExitoso) return

  let resultado: IPermiso | undefined

  if (formulario.modelo?.id != null) {
    resultado = await PermisoService.actualizar(formulario.modelo)
  } else {
    resultado = await PermisoService.guardar(formulario.modelo)
  }

  return resultado
}

const accionesSegunTipo = computed(() =>
  formulario.modelo.tipo === TIPO.BACKEND ? accionesBackend : accionesFront
)

onMounted(() => {
  if (!props.permiso?.id) return
  formulario.modelo = props.permiso
})

defineExpose({ guardar })
</script>

<template>
  <q-form :ref="(el) => (formulario.ref = el as HTMLFormElement)" data-cy="formulario-permiso">
    <q-select
      v-model="formulario.modelo.tipo"
      label="Tipo"
      :options="tipos"
      option-label="etiqueta"
      option-value="valor"
      lazy-rules
      :rules="[required]"
      hint=""
      emit-value
      map-options
      @update:model-value="formulario.modelo.accion = undefined"
    />
    <q-input
      v-model="formulario.modelo.path"
      label="Path"
      lazy-rules
      :rules="[required, (val) => max(val, 100)]"
      hint=""
    />
    <q-select
      v-model="formulario.modelo.accion"
      label="Acción"
      :options="accionesSegunTipo"
      option-label="etiqueta"
      option-value="valor"
      lazy-rules
      :rules="[required]"
      emit-value
      map-options
      hint=""
    />
  </q-form>
</template>

<style scoped></style>
