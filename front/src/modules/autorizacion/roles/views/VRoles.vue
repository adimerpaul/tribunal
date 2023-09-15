<script setup lang="ts">
import type { ISearch } from '@/common/common.types'
import { useQuasar, type QTableColumn } from 'quasar'
import { reactive, ref, onMounted, defineComponent, nextTick } from 'vue'
import type { IRol } from '../roles.types'
import { RolService } from '../services/rol.service'
import { useHandlePagination } from '@/common/composables/useHandlePagination'
import { DialogHandler } from '@/common/components/ODialog/DialogHandler'
import OFormRol from '../components/OFormRol.vue'
import { OConfirm, ODialog, OVerDatos } from '@/common/components'

const entradaBuscar = ref('')

function optionsSearch() {
  const search: ISearch[] = [
    {
      fields: ['nombre'],
      keyword: entradaBuscar.value
    }
  ]
  return search
}
const {
  isLoading: LoadingRoles,
  executeService,
  response,
  pagination
} = useHandlePagination<IRol>(RolService.list, optionsSearch)

const columns: QTableColumn[] = [
  {
    name: 'nro',
    label: 'N°',
    align: 'left',
    field: 'index',
    sortable: false
  },
  {
    name: 'estado',
    align: 'left',
    field: 'estado',
    label: 'Habilitado'
  },
  {
    name: 'nombre',
    align: 'left',
    field: 'nombre',
    label: 'Nombre'
  },
  {
    name: 'descripcioon',
    align: 'left',
    field: 'descripcion',
    label: 'Descripción'
  },
  {
    name: 'codigo',
    align: 'left',
    field: 'codigo',
    label: 'Código'
  },
  {
    name: 'nivel',
    align: 'left',
    field: 'nivel',
    label: 'Nivel'
  },
  {
    name: 'acciones',
    label: '',
    field: ''
  }
]

const dialog = reactive(new DialogHandler({ title: 'Nuevo Rol' }))
const inputBuscar = ref('')

const dialogKeyVista = {
  OFormRol: 'OFormRol',
  OVerDatos: 'OVerDatos'
}

const dialogVista: Record<string, ReturnType<typeof defineComponent>> = {
  OFormRol,
  OVerDatos
}
const dialogVistaActual = ref(dialogKeyVista.OFormRol)

const formRol = ref<InstanceType<typeof OFormRol>>()

const rol = ref<IRol>()

async function editRol(rolParam: IRol) {
  dialogVistaActual.value = dialogKeyVista.OFormRol
  dialog.open()
  dialog.enableActions = true
  dialog.title = 'Rol en edición'
  rol.value = { ...rolParam }
  await nextTick()

  dialog.actionsParam = async () => {
    const resultado = await formRol.value?.save()
    if (resultado && rolParam) {
      Object.assign(rolParam, resultado)
    }
    console.warn('second', rolParam)

    return !!resultado
  }
}  

async function newRol() {
  console.warn('dialog')
  dialogVistaActual.value = dialogKeyVista.OFormRol
  dialog.open()
  dialog.enableActions = true
  dialog.title = 'Nuevo Rol'
  rol.value = {} as IRol
  await nextTick()
  dialog.actionsParam = async () => {
    const resultado = await formRol.value?.save()

    resultado && response.value.unshift(resultado)

    return !!response
  }
}

const status = ref(false)

async function viewRol(rolParam: IRol) {  
  status.value = true
  const respuesta = await RolService.find(rolParam.id)
  status.value = false

  rol.value = respuesta

  dialogVistaActual.value = dialogKeyVista.OVerDatos
  dialog.open()
  dialog.title = 'Rol'
  dialog.enableActions = false
}

const { dialog: confirmDialog } = useQuasar()

async function deleteRol(rol: IRol) {
  confirmDialog({
    component: OConfirm,
    componentProps: {
      mensaje: '¿ Desea eliminar ?'
    }
  }).onOk(() => {
    RolService.deleteRol(rol).then(() => {
      executeService()
    })
  })
}

const pathKeyRol = {
  'nombre':  'Nombre',
  'descripcion': 'Descripción',
  'codigo': 'Código',
  'nivel': 'Nivel'
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
    :loading="LoadingRoles"
    @request="executeService"
  >
    <template #top>
      <q-btn color="primary" label="Rol" icon="mdi-plus" @click="newRol" />
      <q-space />
      <q-input
        v-model="inputBuscar"
        debounce="300"
        color="primary"
        label="Buscar"
        placeholder="Buscar"
        style="width: 300px; min-width: auto"
        @keyup.enter="undefined"
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
          icon="mdi-format-list-bulleted"
          title="Asignar permisos"
          :disabled="status"
          @click="undefined"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          color="primary"
          icon="mdi-format-list-bulleted"
          title="Asignar menu"
          :disabled="status"
          @click="undefined"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          color="primary"
          icon="mdi-eye"
          title="Ver"
          :disabled="status"
          @click="viewRol(propsAcciones.row)"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          icon="mdi-square-edit-outline"
          color="primary"
          title="Editar"
          :disabled="status"
          @click="editRol(propsAcciones.row)"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          color="negative"
          icon="mdi-delete"
          title="Eliminar"
          :disabled="status"
          @click="deleteRol(propsAcciones.row)"
        />
      </q-td>
    </template>
  </q-table>

  <ODialog v-model="dialog">
    <component
      :is="dialogVista[dialogVistaActual]"
      ref="formRol"
      :rol="rol"
      :fuente-datos="rol"
      :path-key="pathKeyRol"
    />
  </ODialog>
</template>
