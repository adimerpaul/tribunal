<script setup lang="ts">
import { useQuasar, type QTableColumn } from 'quasar'
import { nextTick, reactive, ref, onMounted, defineComponent } from 'vue'
import { DialogHandler } from '../../../../common/components/ODialog/DialogHandler'
import { OConfirm, ODialog, OVerDatos } from '@/common/components'
import { useHandlePagination } from '@/common/composables/useHandlePagination'
import { type ISearch } from '../../../../common/common.types'
import { OficinaService } from '../services/oficina.service'
import type { IOficina } from '../oficinas.types'
import FormOficina from '../components/FormOficina.vue'

const dialogKeyVista = {
  FormOficina: 'FormOficina',
  OVerDatos: 'OVerDatos'
}
const dialogVista: Record<string, ReturnType<typeof defineComponent>> = {
  FormOficina,
  OVerDatos
}
const dialogVistaActual = ref(dialogKeyVista.FormOficina)

const entradaBuscar = ref('')

function optionsSearch() {
  const search: ISearch[] = [
    {
      fields: ['descripcion'],
      keyword: entradaBuscar.value
    }
  ]
  return search
}

const {
  isLoading: estaCargandoOficinas,
  executeService,
  response,
  pagination
} = useHandlePagination<IOficina>(OficinaService.obtener, optionsSearch)

const columns: QTableColumn[] = [
  {
    name: 'nro',
    label: 'N°',
    align: 'left',
    field: 'index',
    sortable: false
  },
  {
    name: 'ente',
    align: 'left',
    field: 'ente',
    format: (ente) => {
      return ente.sigla
    },
    label: 'Ente'
  },
  {
    name: 'municipio',
    align: 'left',
    field: 'municipio',
    format: (municipio) => {
      return municipio.descripcion
    },
    label: 'Municipio'
  },
  {
    name: 'descripcion',
    align: 'left',
    field: 'descripcion',
    label: 'Descripcion'
  },
  {
    name: 'direccion',
    align: 'left',
    field: 'direccion',
    label: 'Direccion'
  },
  {
    name: 'telefono',
    align: 'left',
    field: 'telefonos',
    label: 'Telefono'
  },
  {
    name: 'acciones',
    label: '',
    field: ''
  }
]

const dialog = reactive(new DialogHandler({ title: 'Nueva Oficina' }))

const refFormOficina = ref<InstanceType<typeof FormOficina>>()

async function nuevoOficina() {
  dialogVistaActual.value = dialogKeyVista.FormOficina
  dialog.open()
  dialog.enableActions = true
  dialog.title = 'Nueva Oficina'
  oficina.value = {} as IOficina
  await nextTick()
  dialog.actionsParam = async () => {
    const resultado = await refFormOficina.value?.guardar()

    resultado && response.value.unshift(resultado)

    return !!response
  }
}

const oficina = ref<IOficina>()
async function editarOficina(oficinaParam: IOficina) {
  dialogVistaActual.value = dialogKeyVista.FormOficina
  dialog.open()
  dialog.enableActions = true
  dialog.title = 'Tipo Oficina en edición'
  oficina.value = { ...oficinaParam }
  await nextTick()

  dialog.actionsParam = async () => {
    const resultado = await refFormOficina.value?.guardar()
    if (resultado && oficinaParam) {
      Object.assign(oficinaParam, resultado)
    }
    return !!resultado
  }
}

const estaCargandoOficina = ref(false)

async function verOficina(oficinaParam: IOficina) {
  estaCargandoOficina.value = true
  const respuesta = await OficinaService.obtenerUno(oficinaParam.id)
  estaCargandoOficina.value = false

  oficina.value = respuesta

  dialogVistaActual.value = dialogKeyVista.OVerDatos
  dialog.open()
  dialog.title = 'Oficina'
  dialog.enableActions = false
}

const { dialog: confirmDialog } = useQuasar()
async function eliminar(oficina: IOficina) {
  confirmDialog({
    component: OConfirm,
    componentProps: {
      mensaje: '¿ Desea eliminar ?'
    }
  }).onOk(() => {
    OficinaService.eliminar(oficina).then(() => {
      executeService()
    })
  })
}

const pathKeyOficina = {
  idEnte: 'Ente',
  'ente.sigla': 'Ente',
  idMunicipio: 'Municipio',
  'municipio.descripcion': 'Municipio',
  descripcion: 'Descripcion',
  telefonos: 'Telefono',
  direccion: 'Direccion',
  //edificio: 'Edificio',
  latitud: 'Latitud',
  longitud: 'Longitud'
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
    :loading="estaCargandoOficina"
    @request="executeService"
  >
    <template #top>
      <q-btn color="primary" label="Agregar Oficina" icon="mdi-plus" @click="nuevoOficina" />
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
          :disabled="estaCargandoOficina"
          @click="verOficina(propsAcciones.row)"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          icon="mdi-square-edit-outline"
          color="primary"
          title="Editar"
          :disabled="estaCargandoOficina"
          @click="editarOficina(propsAcciones.row)"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          color="negative"
          icon="mdi-delete"
          title="Eliminar"
          :disabled="estaCargandoOficina"
          @click="eliminar(propsAcciones.row)"
        />
      </q-td>
    </template>
  </q-table>

  <ODialog v-model="dialog">
    <component
      :is="dialogVista[dialogVistaActual]"
      ref="refFormTipoAudiencia"
      :oficina="oficina"
      :fuente-datos="oficina"
      :path-key="pathKeyOficina"
    />
  </ODialog>
</template>
