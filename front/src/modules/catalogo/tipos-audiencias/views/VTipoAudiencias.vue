<script setup lang="ts">
import { useQuasar, type QTableColumn } from 'quasar'
import { nextTick, reactive, ref, onMounted, defineComponent } from 'vue'
import { DialogHandler } from '../../../../common/components/ODialog/DialogHandler'
import { OConfirm, ODialog, OVerDatos } from '@/common/components'
import FormTipoAudiencia from '../components/FormTipoAudiencia.vue'
import { useHandlePagination } from '@/common/composables/useHandlePagination'
import { AudienciaService } from '../services/tipoAudiencia.service'
import { type ISearch } from '../../../../common/common.types'
import { type ITipoAudiencia } from '../tipoAudiencia.types'

const dialogKeyVista = {
  FormTipoAudiencia: 'FormTipoAudiencia',
  OVerDatos: 'OVerDatos'
}
const dialogVista: Record<string, ReturnType<typeof defineComponent>> = {
  FormTipoAudiencia,
  OVerDatos
}
const dialogVistaActual = ref(dialogKeyVista.FormTipoAudiencia)

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
  isLoading: estaCargandoAudiencias,
  executeService,
  response,
  pagination
} = useHandlePagination<ITipoAudiencia>(AudienciaService.obtener, optionsSearch)

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
    name: 'plazo minimo',
    align: 'left',
    field: 'plazoMinimo',
    label: 'Plazo Minimo'
  },
  {
    name: 'plazo intermedio',
    align: 'left',
    field: 'plazoIntermedio',
    label: 'Plazo Medio'
  },
  {
    name: 'plazo maximo',
    align: 'left',
    field: 'plazoMaximo',
    label: 'Plazo Maximo'
  },
  {
    name: 'ley normativa',
    align: 'left',
    field: 'leyNormativa',
    label: 'Ley Normativa'
  },
  {
    name: 'duracion minima',
    align: 'left',
    field: 'duracionMinima',
    label: 'Duracion Minima'
  },
  {
    name: 'duracion media',
    align: 'left',
    field: 'duracionMedia',
    label: 'Duracion Media'
  },
  {
    name: 'duracion maxima',
    align: 'left',
    field: 'duracionMaxima',
    label: 'Duracion Maxima'
  },
  // {
  //   name: 'sujetos',
  //   align: 'left',
  //   field: 'sujetos',
  //   label: 'Sujetos'
  // },
  {
    name: 'incremento',
    align: 'left',
    field: 'incremento',
    label: 'Incremento por Sujeto'
  },

  {
    name: 'acciones',
    label: '',
    field: ''
  }
]

const dialog = reactive(new DialogHandler({ title: 'Nuevo Tipo Audiencia' }))

const refFormTipoAudiencia = ref<InstanceType<typeof FormTipoAudiencia>>()

async function nuevoTipoAudiencia() {
  dialogVistaActual.value = dialogKeyVista.FormTipoAudiencia
  dialog.open()
  dialog.enableActions = true
  dialog.title = 'Nuevo Tipo Audiencia'
  audiencia.value = {} as ITipoAudiencia
  await nextTick()
  dialog.actionsParam = async () => {
    const resultado = await refFormTipoAudiencia.value?.guardar()

    resultado && response.value.unshift(resultado)

    return !!response
  }
}

const audiencia = ref<ITipoAudiencia>()
async function editarAudiencia(tipoAudienciaParam: ITipoAudiencia) {
  dialogVistaActual.value = dialogKeyVista.FormTipoAudiencia
  dialog.open()
  dialog.enableActions = true
  dialog.title = 'Tipo Audiencia en edición'
  audiencia.value = { ...tipoAudienciaParam }
  await nextTick()

  dialog.actionsParam = async () => {
    const resultado = await refFormTipoAudiencia.value?.guardar()
    if (resultado && tipoAudienciaParam) {
      Object.assign(tipoAudienciaParam, resultado)
    }
    return !!resultado
  }
}

const estaCargandoAudiencia = ref(false)

async function verAudiencia(tipoAudienciaParam: ITipoAudiencia) {
  estaCargandoAudiencia.value = true
  const respuesta = await AudienciaService.obtenerUno(tipoAudienciaParam.id)
  estaCargandoAudiencia.value = false

  audiencia.value = respuesta

  dialogVistaActual.value = dialogKeyVista.OVerDatos
  dialog.open()
  dialog.title = 'Audiencia'
  dialog.enableActions = false
}

const { dialog: confirmDialog } = useQuasar()
async function eliminar(audiencia: ITipoAudiencia) {
  confirmDialog({
    component: OConfirm,
    componentProps: {
      mensaje: '¿ Desea eliminar ?'
    }
  }).onOk(() => {
    AudienciaService.eliminar(audiencia).then(() => {
      executeService()
    })
  })
  // .onDismiss(() => )
}

const pathKeyAudiencia = {
  //codigo: 'Codigo',
  // descripcion: 'Descripcion',
  // sujetos: 'Sujetos',
  // leyNormativa: 'Ley Normativa',
  plazoMinimo: 'Plazo Minimo',
  plazoIntermedio: 'Plazo Intermedio',
  plazoMaximo: 'Plazo Maximo',
  duracionMinima: 'Duracion Minima',
  duracionMedia: 'Duracion Media',
  duracionMaxima: 'Duracion Maxima',
  incremento: 'Incremento por Sujeto Procesal Adicional'
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
    :loading="estaCargandoAudiencias"
    @request="executeService"
  >
    <template #top>
      <q-btn color="primary" label="Agregar Tipo" icon="mdi-plus" @click="nuevoTipoAudiencia" />
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
          :disabled="estaCargandoAudiencia"
          @click="verAudiencia(propsAcciones.row)"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          icon="mdi-square-edit-outline"
          color="primary"
          title="Editar"
          :disabled="estaCargandoAudiencia"
          @click="editarAudiencia(propsAcciones.row)"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          color="negative"
          icon="mdi-delete"
          title="Eliminar"
          :disabled="estaCargandoAudiencia"
          @click="eliminar(propsAcciones.row)"
        />
      </q-td>
    </template>
  </q-table>

  <ODialog v-model="dialog">
    <component
      :is="dialogVista[dialogVistaActual]"
      ref="refFormTipoAudiencia"
      :audiencia="audiencia"
      :fuente-datos="audiencia"
      :path-key="pathKeyAudiencia"
    />
  </ODialog>
</template>
