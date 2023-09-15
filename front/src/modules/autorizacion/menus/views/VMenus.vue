<script setup lang="ts">
import { onMounted, ref, defineComponent, reactive, nextTick } from 'vue'
import { MenuService } from '../services/menu.service'
import { type IMenu } from '../menus.types'
import { useHandlePagination } from '@/common/composables/useHandlePagination'
import type { ISearch } from '@/common/common.types'
import { useQuasar, type QTableColumn } from 'quasar'
import { OVerDatos, ODialog, OConfirm } from '@/common/components'
import OFormMenu from '../components/OFormMenu.vue'
import { DialogHandler } from '../../../../common/components/ODialog/DialogHandler'

const dialog = reactive(new DialogHandler({ title: 'Nuevo Menú' }))

const dialogKeyVista = {
  OFormMenu: 'OFormMenu',
  OVerDatos: 'OVerDatos'
}
const dialogVista: Record<string, ReturnType<typeof defineComponent>> = {
  OFormMenu,
  OVerDatos
}
const dialogVistaActual = ref(dialogKeyVista.OFormMenu)

const entradaBuscar = ref('')
function optionsSearch() {
  const search: ISearch[] = [
    {
      fields: ['nombre', 'descripcion', 'url'],
      keyword: entradaBuscar.value
    }
  ]
  return search
}

const {
  isLoading: estaCargandoMenus,
  executeService,
  response,
  pagination
} = useHandlePagination<IMenu>(MenuService.obtener, optionsSearch)

const columns: QTableColumn[] = [
  {
    name: 'nro',
    label: 'N°',
    align: 'left',
    field: 'index',
    sortable: false
  },
  {
    name: 'nombre',
    align: 'left',
    field: 'nombre',
    label: 'Nombre'
  },
  {
    name: 'descripcion',
    align: 'left',
    field: 'descripcion',
    label: 'Descripción'
  },
  {
    name: 'icono',
    align: 'left',
    field: 'icono',
    label: 'icono'
  },
  {
    name: 'url',
    align: 'left',
    field: 'url',
    label: 'Url'
  },
  {
    name: 'ordenDespliegue',
    align: 'left',
    field: 'ordenDespliegue',
    label: 'Orden de Despliegue'
  },
  {
    name: 'acciones',
    label: '',
    field: ''
  }
]

const pathKeyMenu = {
  nombre: 'Nombre',
  descripcion: 'Descripción',
  icono: 'Icono',
  url: 'Url',
  ordenDespliegue: 'Orden de Despliegue'
}

const refFormMenu = ref<InstanceType<typeof OFormMenu>>()

const menu = ref<IMenu>()
async function nuevoMenu() {
  dialogVistaActual.value = dialogKeyVista.OFormMenu
  dialog.open()
  dialog.enableActions = true
  dialog.title = 'Nuevo Menú'
  menu.value = {} as IMenu
  await nextTick()
  dialog.actionsParam = async () => {
    const resultado = await refFormMenu.value?.guardar()

    resultado && response.value.unshift(resultado)

    return !!resultado
  }
}

async function verMenu(menuParam: IMenu) {
  estaCargandoMenus.value = true
  const respuesta = await MenuService.obtenerUno(menuParam.id)
  estaCargandoMenus.value = false

  menu.value = respuesta

  dialogVistaActual.value = dialogKeyVista.OVerDatos
  dialog.open()
  dialog.title = 'Menú'
  dialog.enableActions = false
}

const { dialog: confirmDialog } = useQuasar()
async function eliminar(menu: IMenu) {
  confirmDialog({
    component: OConfirm,
    componentProps: {
      mensaje: '¿ Desea eliminar ?'
    }
  }).onOk(() => {
    MenuService.eliminar(menu).then(() => {
      const index = response.value.findIndex((r) => r === menu)

      index !== -1 && response.value.splice(index, 1)
    })
  })
}

async function editarMenu(menuParam: IMenu) {
  dialogVistaActual.value = dialogKeyVista.OFormMenu
  dialog.open()
  dialog.enableActions = true
  dialog.title = 'Permiso en edición'
  menu.value = { ...menuParam }
  await nextTick()

  dialog.actionsParam = async () => {
    const resultado = await refFormMenu.value?.guardar()
    if (resultado && menuParam) {
      Object.assign(menuParam, resultado)
    }
    return !!resultado
  }
}

onMounted(async () => {
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
    :loading="estaCargandoMenus"
    @request="executeService"
  >
    <template #top>
      <q-btn color="primary" label="Menú" icon="mdi-plus" @click="nuevoMenu" />
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
          :disabled="estaCargandoMenus"
          @click="verMenu(propsAcciones.row)"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          icon="mdi-square-edit-outline"
          color="primary"
          title="Editar"
          :disabled="estaCargandoMenus"
          @click="editarMenu(propsAcciones.row)"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          color="negative"
          icon="mdi-delete"
          title="Eliminar"
          :disabled="estaCargandoMenus"
          @click="eliminar(propsAcciones.row)"
        />
      </q-td>
    </template>
  </q-table>

  <ODialog v-model="dialog">
    <component
      :is="dialogVista[dialogVistaActual]"
      ref="refFormMenu"
      :menu="menu"
      :fuente-datos="menu"
      :path-key="pathKeyMenu"
    />
  </ODialog>
</template>
