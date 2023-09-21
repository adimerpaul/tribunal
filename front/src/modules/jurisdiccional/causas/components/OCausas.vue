<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { CausaService } from '../services/causa.service'
import type { IOpcionesPaginado, ISearch } from '../../../../common/common.types'
import { useHandlePagination } from '../../../../common/composables/useHandlePagination'
import type { ICausa } from '../causas.types'
import type { QTableColumn } from 'quasar'
import type { IOficina } from '../../../organizacional/oficinas/oficinas.types'
import type { IMunicipio } from '../../../geografico/geografico.types'
import type { ITipoDenuncia, ITipoEstado, ITipoEtapa } from '../../../catalogo/catalogo.types'

const props = defineProps<{ titulo: string }>()
const detalle = ref(false)

const entradaBuscar = ref('')
function optionsSearch() {
  const search: ISearch[] = [
    {
      fields: ['codigoUnico'],
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
} = useHandlePagination<ICausa>(CausaService.obtener, optionsSearch)

const columns: QTableColumn[] = [
  {
    name: 'nro',
    label: 'N°',
    align: 'left',
    field: 'index',
    sortable: false
  },
  {
    name: 'codigoUnico',
    align: 'left',
    field: 'codigoUnico',
    label: 'Código Único'
  },
  {
    name: 'denominacionCausa',
    align: 'left',
    field: 'denominacionCausa',
    label: 'Denominación de la Causa'
  },
  {
    name: 'oficinaFiscalia',
    align: 'left',
    field: 'oficinaFiscalia',
    label: 'Oficina Fiscalía',
    format: (oficinaFiscalia: IOficina) => oficinaFiscalia?.descripcion ?? ''
  },
  {
    name: 'municipioHecho',
    align: 'left',
    field: 'municipioHecho',
    label: 'Municipio del Hecho',
    format: (municipioHecho: IMunicipio) => municipioHecho?.descripcion ?? ''
  },
  {
    name: 'tipoDenuncia',
    align: 'left',
    field: 'tipoDenuncia',
    label: 'Tipo de Denuncia',
    format: (tipoDenuncia: ITipoDenuncia) => tipoDenuncia?.descripcion ?? ''
  },
  {
    name: 'tipoEstado',
    align: 'left',
    field: 'tipoEstado',
    label: 'Tipo de Estado',
    format: (tipoEstado: ITipoEstado) => tipoEstado?.descripcion ?? ''
  },
  {
    name: 'tipoEtapa',
    align: 'left',
    field: 'tipoEtapa',
    label: 'Etapa',
    format: (tipoEtapa: ITipoEtapa) => tipoEtapa?.descripcion ?? ''
  },
  {
    name: 'origen',
    align: 'left',
    field: 'origen',
    label: 'Origen'
  },
  {
    name: 'hechoZona',
    align: 'left',
    field: 'hechoZona',
    label: 'Zona del Hecho'
  },
  {
    name: 'hechoDireccion',
    align: 'left',
    field: 'hechoDireccion',
    label: 'Dirección del Hecho'
  },
  {
    name: 'hechoReferenciaLugar',
    align: 'left',
    field: 'hechoReferenciaLugar',
    label: 'Referencia del Lugar del Hecho'
  },
  {
    name: 'hechoRelato',
    align: 'left',
    field: 'hechoRelato',
    label: 'Relato del Hecho'
  },
  {
    name: 'hechoFechaHoraLF',
    align: 'left',
    field: 'hechoFechaHoraLF',
    label: 'Fecha y Hora de Hecho'
  },
  {
    name: 'hechoFechaHoraFinLF',
    align: 'left',
    field: 'hechoFechaHoraFinLF',
    label: 'Fecha y Hora Fin del Hecho'
  },
  {
    name: 'hechoFechaHoraAproximada',
    align: 'left',
    field: 'hechoFechaHoraAproximada',
    label: 'Fecha y Hora Aprox. del Hecho'
  },
  {
    name: 'acciones',
    label: '',
    field: ''
  }
]

onMounted(() => {
  executeService()
})
</script>

<template>
  <q-card class="q-mb-sm" style="background: #fafbfe" flat>
    <q-card-section class="q-py-xs q-px-sm">
      <div class="text-h6" style="color: #6c757d">
        <q-breadcrumbs>
          <q-breadcrumbs-el
            :label="titulo"
            :class="{ 'click-pointer': detalle }"
            icon="mdi-home"
            @click="detalle = false"
          />
          <q-breadcrumbs-el v-if="detalle" label="Resumen de Causa" />
        </q-breadcrumbs>
      </div>
    </q-card-section>
  </q-card>

  <q-table
    v-model:pagination="pagination"
    class="my-sticky-column-table"
    :columns="columns"
    :rows="response"
    virtual-scroll
    style="height: calc(100vh - 8.6rem)"
    :loading="estaCargandoMenus"
    @request="executeService"
  >
    <template #top>
      <q-btn
        color="primary"
        label="Causa"
        icon="mdi-plus"
        to="/jurisdiccional/causas-privadas/nueva"
      />
      <q-space />
      <q-input
        v-model="undefined"
        debounce="300"
        color="primary"
        label="Buscar"
        placeholder="Descripción"
        style="width: 300px; min-width: auto"
        @keyup.enter="undefined"
      >
        <template #append>
          <q-btn round dense flat icon="mdi-magnify" color="primary" @click="undefined" />
        </template>
      </q-input>
    </template>

    <template #body-cell-habilitado="props">
      <q-td :props="props">
        <q-toggle dense :model-value="props.row.habilitado" @update:model-value="undefined" />
      </q-td>
    </template>
  </q-table>
</template>
