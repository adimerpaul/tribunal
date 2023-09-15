<script setup lang="ts">
import { useQuasar, type QTableColumn } from 'quasar'
import { nextTick, reactive, ref, onMounted, defineComponent } from 'vue'
import { DialogHandler } from '../../../../common/components/ODialog/DialogHandler'
import { OConfirm, ODialog, OVerDatos } from '@/common/components'
import FormUsuario from '../components/FormUsuario.vue'
import { useHandlePagination } from '@/common/composables/useHandlePagination'
import { UsuarioService } from '../services/usuario.service'
import { type ISearch } from '../../../../common/common.types'
import { type IUsuario } from '../usuarios.types'

const dialogKeyVista = {
  FormUsuario: 'FormUsuario',
  OVerDatos: 'OVerDatos'
}

const dialogVista: Record<string, ReturnType<typeof defineComponent>> = {
  FormUsuario,
  OVerDatos
}
const dialogVistaActual = ref(dialogKeyVista.FormUsuario)

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
  isLoading: estaCargandoUsuarios,
  executeService,
  response,
  pagination
} = useHandlePagination<IUsuario>(UsuarioService.obtener, optionsSearch)

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
    label: 'Estado'
  },
  {
    name: 'usuario',
    align: 'left',
    field: 'usuario',
    label: 'Usuario'
  },
  {
    name: 'persona',
    align: 'left',
    field: 'persona',
    format: (persona) => {
      return persona.nombreCompleto
    },
    label: 'Apellidos y nombres'
  },
  {
    name: 'accion',
    align: 'left',
    field: 'cargo',
    label: 'Cargo'
  },
  {
    name: 'correo',
    align: 'left',
    field: 'persona',
    label: 'Correo Electrónico',
    format: (persona) => {
      return persona.profesionOcupacion
    },
  },
  {
    name: 'acciones',
    label: '',
    field: ''
  }
]

const dialog = reactive(new DialogHandler({ title: 'Nuevo Usuario' }))

const refFormUsuario = ref<InstanceType<typeof FormUsuario>>()

async function nuevoUsuario() {
  dialogVistaActual.value = dialogKeyVista.FormUsuario
  dialog.open()
  dialog.enableActions = true
  dialog.title = 'Nuevo Usuario'
  usuario.value = {} as IUsuario
  await nextTick()
  dialog.actionsParam = async () => {
    const resultado = await refFormUsuario.value?.guardar()

    resultado && response.value.unshift(resultado)

    return !!response
  }
}

const usuario = ref<IUsuario>()
async function editarUsuario(usuarioParam: IUsuario) {
  dialogVistaActual.value = dialogKeyVista.FormUsuario
  dialog.open()
  dialog.enableActions = true
  dialog.title = 'Usuario en edición'
  usuario.value = { ...usuarioParam }
  await nextTick()

  dialog.actionsParam = async () => {
    const resultado = await refFormUsuario.value?.guardar()
    if (resultado && usuarioParam) {
      Object.assign(usuarioParam, resultado)
    }
    return !!resultado
  }
}

const estaCargandoUsuario = ref(false)

async function verUsuario(usuarioParam: IUsuario) {  
  estaCargandoUsuario.value = true
  const respuesta = await UsuarioService.obtenerUno(usuarioParam.id)
  estaCargandoUsuario.value = false

  usuario.value = respuesta

  console.log('respuesta ', respuesta)

  dialogVistaActual.value = dialogKeyVista.OVerDatos
  dialog.open()
  dialog.title = 'Usuario'
  dialog.enableActions = false
}

const { dialog: confirmDialog } = useQuasar()
async function eliminar(usuario: IUsuario) {
  confirmDialog({
    component: OConfirm,
    componentProps: {
      mensaje: '¿ Desea eliminar ?'
    }
  }).onOk(() => {
    UsuarioService.eliminar(usuario).then(() => {
      executeService()
    })
  })
  // .onDismiss(() => )
}

const pathKeyUsuario = {
  usuario: 'Nombre de Usuario',
  'persona.tipoDocumentoIdentidad': 'Tipo de Documento',
  'persona.nombreCompleto': 'Nombre',
  'persona.celular': 'Celular',
  'persona.email': 'Correo Electrónico',
  'persona.profesionOcupacion': 'Profesión/Ocupación',
  'persona.fechaNacimiento': 'Fecha de Nacimiento',
  'persona.sexo': 'Sexo',
  'persona.esCiudadanoDigital': 'Es Ciudadano Digital'
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
    :loading="estaCargandoUsuarios"
    @request="executeService"
  >
    <template #top>
      <q-btn color="primary" label="Usuario" icon="mdi-plus" @click="nuevoUsuario" />
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
          :disabled="estaCargandoUsuario"
          @click="verUsuario(propsAcciones.row)"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          icon="mdi-square-edit-outline"
          color="primary"
          title="Editar"
          :disabled="estaCargandoUsuario"
          @click="editarUsuario(propsAcciones.row)"
        />
        <q-btn
          flat
          dense
          padding="none"
          rounded
          color="negative"
          icon="mdi-delete"
          title="Eliminar"
          :disabled="estaCargandoUsuario"
          @click="eliminar(propsAcciones.row)"
        />
      </q-td>
    </template>
  </q-table>

  <ODialog v-model="dialog">
    <component
      :is="dialogVista[dialogVistaActual]"
      ref="refFormUsuario"
      :usuario="usuario"
      :fuente-datos="usuario"
      :path-key="pathKeyUsuario"
    />
  </ODialog>
</template>
