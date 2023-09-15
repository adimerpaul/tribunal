<script setup lang="ts">
import { useQuasar, type QTableColumn } from 'quasar'
import { nextTick, reactive, ref, onMounted, defineComponent } from 'vue'
import { DialogHandler } from '../../../../common/components/ODialog/DialogHandler'
import { OConfirm, ODialog, OVerDatos } from '@/common/components'
import OFormPermiso from '../components/OFormPermiso.vue'
import { useHandlePagination } from '@/common/composables/useHandlePagination'
import { PermisoService } from '../services/permiso.service'
import { type ISearch } from '../../../../common/common.types'
import { type IPermiso } from '../permisos.types'

const dialogKeyVista = {
  OFormPermiso: 'OFormPermiso',
  OVerDatos: 'OVerDatos'
}
const dialogVista: Record<string, ReturnType<typeof defineComponent>> = {
  OFormPermiso,
  OVerDatos
}
const dialogVistaActual = ref(dialogKeyVista.OFormPermiso)

const entradaBuscar = ref('')

function optionsSearch() {
  const search: ISearch[] = [
    {
      fields: ['path'],
      keyword: entradaBuscar.value
    }
  ]
  return search
}

const {
  isLoading: estaCargandoPermisos,
  executeService,
  response,
  pagination
} = useHandlePagination<IPermiso>(PermisoService.obtener, optionsSearch)

const columns: QTableColumn[] = [
  {
    name: 'nro',
    label: 'N°',
    align: 'left',
    field: 'index',
    sortable: false
  },
  {
    name: 'tipo',
    align: 'left',
    field: 'tipo',
    label: 'Tipo'
  },
  {
    name: 'path',
    align: 'left',
    field: 'path',
    label: 'Path'
  },
  {
    name: 'accion',
    align: 'left',
    field: 'accion',
    label: 'accion'
  },
  {
    name: 'acciones',
    label: '',
    field: ''
  }
]

const dialog = reactive(new DialogHandler({ title: 'Nuevo Permiso' }))

const refFormPermiso = ref<InstanceType<typeof OFormPermiso>>()

async function nuevoPermiso() {
  dialogVistaActual.value = dialogKeyVista.OFormPermiso
  dialog.open()
  dialog.enableActions = true
  dialog.title = 'Nuevo Permiso'
  permiso.value = {} as IPermiso
  await nextTick()
  dialog.actionsParam = async () => {
    const resultado = await refFormPermiso.value?.guardar()

    resultado && response.value.unshift(resultado)

    return !!response
  }
}

const permiso = ref<IPermiso>()
async function editarPermiso(permisoParam: IPermiso) {
  dialogVistaActual.value = dialogKeyVista.OFormPermiso
  dialog.open()
  dialog.enableActions = true
  dialog.title = 'Permiso en edición'
  permiso.value = { ...permisoParam }
  await nextTick()

  dialog.actionsParam = async () => {
    const resultado = await refFormPermiso.value?.guardar()
    if (resultado && permisoParam) {
      Object.assign(permisoParam, resultado)
    }
    return !!resultado
  }
}

const estaCargandoPermiso = ref(false)

async function verPermiso(permisoParam: IPermiso) {
  estaCargandoPermiso.value = true
  const respuesta = await PermisoService.obtenerUno(permisoParam.id)
  estaCargandoPermiso.value = false

  permiso.value = respuesta

  dialogVistaActual.value = dialogKeyVista.OVerDatos
  dialog.open()
  dialog.title = 'Permiso'
  dialog.enableActions = false
}

const { dialog: confirmDialog } = useQuasar()
async function eliminar(permiso: IPermiso) {
  confirmDialog({
    component: OConfirm,
    componentProps: {
      mensaje: '¿ Desea eliminar ?'
    }
  }).onOk(() => {
    PermisoService.eliminar(permiso).then(() => {
      executeService()
    })
  })
  // .onDismiss(() => )
}

const pathKeyPermiso = {
  tipo: 'Tipo',
  path: 'Path',
  accion: 'Acción'
}

onMounted(() => {
  executeService()
})
</script>

<template>
  <q-table
    v-model:pagination="pagination"
    class="my-sticky-column-table"
    :columns="columns"
    :rows="response"
    virtual-scroll
    style="height: calc(100vh - 12.6rem)"
    :loading="estaCargandoPermisos"
    @request="executeService"
  >
    <template #top>
      <q-btn color="primary" label="Permiso" icon="mdi-plus" @click="nuevoPermiso" />
      <q-space />
      <q-input
        v-model="entradaBuscar"
        debounce="300"
        color="primary"
        label="Buscar"
        placeholder="Descripción"
        style="width: 300px; min-width: auto"
        @keyup.enter="executeService()"
      >
        <template #append>
          <q-btn round dense flat icon="mdi-magnify" color="primary" @click="executeService()" />
        </template>
      </q-input>
    </template>

    <template #body-cell-habilitado="props">
      <q-td :props="props">
        <q-toggle dense :model-value="props.row.habilitado" @update:model-value="undefined" />
      </q-td>
    </template>

    <template #body-cell-acciones="propsAcciones">
      <q-td :props="propsAcciones">
        <q-btn
          flat
          dense
          padding="none"
          rounded
          color="primary"
          icon="mdi-eye"
          title="Ver"
          :disabled="estaCargandoPermiso"
          @click="verPermiso(propsAcciones.row)"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          icon="mdi-square-edit-outline"
          color="primary"
          title="Editar"
          :disabled="estaCargandoPermiso"
          @click="editarPermiso(propsAcciones.row)"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          color="negative"
          icon="mdi-delete"
          title="Eliminar"
          :disabled="estaCargandoPermiso"
          @click="eliminar(propsAcciones.row)"
        />
      </q-td>
    </template>
  </q-table>

  <ODialog v-model="dialog">
    <component
      :is="dialogVista[dialogVistaActual]"
      ref="refFormPermiso"
      :permiso="permiso"
      :fuente-datos="permiso"
      :path-key="pathKeyPermiso"
    />
  </ODialog>
</template>
