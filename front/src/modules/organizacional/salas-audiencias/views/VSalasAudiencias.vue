<script setup lang="ts">
import { useQuasar, type QTableColumn } from 'quasar'
import { nextTick, reactive, ref, onMounted, defineComponent } from 'vue'
import { DialogHandler } from '../../../../common/components/ODialog/DialogHandler'
import { OConfirm, ODialog, OVerDatos } from '@/common/components'
import { useHandlePagination } from '@/common/composables/useHandlePagination'
import { type ISearch } from '../../../../common/common.types'
import OFormSalaAudiencia from '../components/OFormSalaAudiencia.vue'
import type { ISalasAudiencia } from '../salas-audiencias.types'
import { SalaAudienciaService } from '../services/sala-audiencia.service'

const dialogKeyVista = {
  OFormSalaAudiencia: 'OFormSalaAudiencia',
  OVerDatos: 'OVerDatos'
}
const dialogVista: Record<string, ReturnType<typeof defineComponent>> = {
  OFormSalaAudiencia,
  OVerDatos
}
const dialogVistaActual = ref(dialogKeyVista.OFormSalaAudiencia)

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
  isLoading: estaCargandoSalas,
  executeService,
  response,
  pagination
} = useHandlePagination<ISalasAudiencia>(SalaAudienciaService.obtener, optionsSearch)

const columns: QTableColumn[] = [
  {
    name: 'nro',
    label: 'N°',
    align: 'left',
    field: 'index',
    sortable: false
  },
  {
    name: 'descripcion',
    align: 'left',
    field: 'descripcion',
    label: 'Descripcion'
  },
  {
    name: 'ubicacion',
    align: 'left',
    field: 'ubicacion',
    label: 'Ubicacion'
  },
  {
    name: 'capacidad',
    align: 'left',
    field: 'capacidad',
    label: 'Capacidad'
  },
  {
    name: 'dimension',
    align: 'left',
    field: 'dimension',
    label: 'Dimension'
  },
  {
    name: 'esCamaraGesell',
    align: 'left',
    field: 'esCamaraGesell',
    label: 'Es Camara Gesell'
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

const dialog = reactive(new DialogHandler({ title: 'Nueva Sala de Audiencia' }))

const refFormSalas = ref<InstanceType<typeof OFormSalaAudiencia>>()

const salas = ref<ISalasAudiencia>()
async function nuevaSala() {
  dialogVistaActual.value = dialogKeyVista.OFormSalaAudiencia
  dialog.open()
  dialog.enableActions = true
  dialog.title = 'Nueva Sala de Audiencia'
  salas.value = {} as ISalasAudiencia
  await nextTick()
  dialog.actionsParam = async () => {
    const resultado = await refFormSalas.value?.guardar()

    resultado && response.value.unshift(resultado)

    return !!response
  }
}

async function editarSala(salaParam: ISalasAudiencia) {
  dialogVistaActual.value = dialogKeyVista.OFormSalaAudiencia
  dialog.open()
  dialog.enableActions = true
  dialog.title = 'Sala en edición'
  salas.value = { ...salaParam }
  await nextTick()

  dialog.actionsParam = async () => {
    const resultado = await refFormSalas.value?.guardar()
    if (resultado && salaParam) {
      Object.assign(salaParam, resultado)
    }
    return !!resultado
  }
}

const estaCargandoSala = ref(false)

async function verSala(salaParam: ISalasAudiencia) {
  estaCargandoSala.value = true
  const respuesta = await SalaAudienciaService.obtenerUno(salaParam.id)
  estaCargandoSala.value = false

  salas.value = respuesta

  dialogVistaActual.value = dialogKeyVista.OVerDatos
  dialog.open()
  dialog.title = 'Salas'
  dialog.enableActions = false
}

const { dialog: confirmDialog } = useQuasar()
async function eliminar(sala: ISalasAudiencia) {
  confirmDialog({
    component: OConfirm,
    componentProps: {
      mensaje: '¿ Desea eliminar ?'
    }
  }).onOk(() => {
    SalaAudienciaService.eliminar(sala).then(() => {
      executeService()
    })
  })
  // .onDismiss(() => )
}

const pathKeySalas = {
  descripcion: 'Descripcion',
  ubicacion: 'Ubicacion',
  capacidad: 'Capacidad',
  dimension: 'Dimension',
  esCamaraGesell: 'EsCamaraGesell',
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
    :loading="estaCargandoSalas"
    @request="executeService"
  >
    <template #top>
      <q-btn color="primary" label="Sala de Audiencia" icon="mdi-plus" @click="nuevaSala" />
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
          :disabled="estaCargandoSala"
          @click="verSala(propsAcciones.row)"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          icon="mdi-square-edit-outline"
          color="primary"
          title="Editar"
          :disabled="estaCargandoSala"
          @click="editarSala(propsAcciones.row)"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          color="negative"
          icon="mdi-delete"
          title="Eliminar"
          :disabled="estaCargandoSala"
          @click="eliminar(propsAcciones.row)"
        />
      </q-td>
    </template>
  </q-table>

  <ODialog v-model="dialog">
    <component
      :is="dialogVista[dialogVistaActual]"
      ref="refFormSalas"
      :salas="salas"
      :fuente-datos="salas"
      :path-key="pathKeySalas"
    />
  </ODialog>
</template>
