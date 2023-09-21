<script setup lang="ts">
import { ODialog } from '@/common/components'
import { DialogHandler } from '@/common/components/ODialog/DialogHandler'
import type { QTableColumn } from 'quasar/dist/types/api/qtable'
import { defineComponent, reactive, ref } from 'vue'
import OFormQuerellante from '../components/OFormQuerellante.vue'

const detalle = ref(false)

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
    name: 'nombre',
    align: 'left',
    field: 'nombre',
    label: 'Nombres y Apellidos'
  },
  {
    name: 'acciones',
    align: 'left',
    field: 'acciones',
    label: 'Acciones'
  }
]

const rows = [
  {
    index: 1,
    tipo: 'Querellante',
    nombre: 'Juan Pérez'
  },
  {
    index: 2,
    tipo: 'Querellado',
    nombre: 'Pablo Palito'
  }
]

const dialogKeyVista = {
  OFormQuerellante: 'OFormQuerellante'
}
const dialogVista: Record<string, ReturnType<typeof defineComponent>> = {
  OFormQuerellante
}
const dialogVistaActual = ref(dialogKeyVista.OFormQuerellante)

const dialog = reactive(new DialogHandler({ title: 'Nuevo Querellante' }))

const refFormQuerellante = ref<InstanceType<typeof OFormQuerellante>>()

async function onQuerellante() {
  dialogVistaActual.value = dialogKeyVista.OFormQuerellante
  dialog.open()
  dialog.enableActions = true
  dialog.title = 'Querellante'
}
</script>

<template>
  <q-card class="q-mb-sm" style="background: #fafbfe" flat>
    <q-card-section class="q-py-xs q-px-sm">
      <div class="text-h6" style="color: #6c757d">
        <q-breadcrumbs>
          <q-breadcrumbs-el
            label="Sujetos Procesales Registrados"
            :class="{ 'click-pointer': detalle }"
            icon="mdi-account-multiple"
            @click="detalle = false"
          />
          <q-breadcrumbs-el v-if="detalle" label="Resumen de Causa" />
        </q-breadcrumbs>
      </div>
    </q-card-section>
  </q-card>

  <q-table
    class="my-sticky-column-table"
    :columns="columns"
    :rows="rows"
    virtual-scroll
    style="height: calc(10vh - 8.6rem)"
    :loading="false"
    @request="undefined"
  >
    <template #top>
      <q-space />

      <div class="q-pa-md">
        <q-btn-dropdown color="primary" label="Sujeto Procesal">
          <q-list>
            <q-item v-close-popup clickable @click="onQuerellante">
              <q-item-section>
                <q-item-label>Querellante</q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-close-popup clickable @click="onQuerellante">
              <q-item-section>
                <q-item-label>Querellado</q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-close-popup clickable @click="onQuerellante">
              <q-item-section>
                <q-item-label>Abogado Querellante</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
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
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          icon="mdi-square-edit-outline"
          color="primary"
          title="Editar"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          color="negative"
          icon="mdi-delete"
          title="Eliminar"
        />
      </q-td>
    </template>  </q-table>

  <ODialog v-model="dialog">
    <component :is="dialogVista[dialogVistaActual]" ref="refFormQuerellante" />
  </ODialog>
</template>
