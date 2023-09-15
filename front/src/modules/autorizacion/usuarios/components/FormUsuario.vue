<script setup lang="ts">
import { reactive, computed, onMounted } from 'vue'
import { type IUsuario } from '../usuarios.types'
import { max, required } from '@/common/rules'
import { UsuarioService } from '../services/usuario.service'
import { OSelect } from '@/common/components'

const props = defineProps<{ usuario?: IUsuario }>()

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

const formulario = reactive<{ modelo: IUsuario; [key: string]: any }>({
  modelo: {} as IUsuario,
  ref: {} as HTMLFormElement
})

async function guardar() {
  const esExitoso = await formulario.ref.validate()
  if (!esExitoso) return

  let resultado: IUsuario | undefined

  if (formulario.modelo?.id != null) {
    resultado = await UsuarioService.actualizar(formulario.modelo)
  } else {
    resultado = await UsuarioService.guardar(formulario.modelo)
  }

  return resultado
}

/* const accionesSegunTipo = computed(() =>
  formulario.modelo.tipo === TIPO.BACKEND ? accionesBackend : accionesFront
) */

onMounted(() => {
  if (!props.usuario?.id) return
  formulario.modelo = props.usuario
})

defineExpose({ guardar })
</script>

<template>
  <q-form
    :ref="(el) => (formulario.ref = el as HTMLFormElement)"
    data-cy="formulario-usuario"
    class="row q-gutter-sm"
  >
    <div class="col-12 col-md">
      <span class="text-body2 text-primary">Datos Personales</span>

      <q-input
        v-model="formulario.modelo.persona.nroDocumento"
        label="Documento de identidad"
        :rules="[required, (val) => max(val, 100)]"
      >
        <template #append>
          <q-btn round dense flat color="primary" icon="mdi-account-search" />
        </template>
      </q-input>

      <div class="column items-center q-mb-sm">
        <q-avatar
          size="4.3rem"
          font-size="2.5rem"
          color="teal"
          text-color="white"
          icon="mdi-account"
          class="avatar--border q-mb-xs"
        />
        <span class="text-body2">C.I.: 456546 CH</span>
        <span class="text-body2 text-grey">Es Ciudadano Digital</span>
      </div>

      <q-input v-model="formulario.modelo.persona.nombres" label="Nombres" readonly hint="" />

      <q-input
        v-model="formulario.modelo.persona.primerApellido"
        label="Primero Apellido"
        readonly
        hint=""
      />

      <q-input
        v-model="formulario.modelo.persona.segundoApellido"
        label="Segundo Apellido"
        readonly
        hint=""
      />

      <q-input
        v-model="formulario.modelo.persona.fechaNacimiento"
        stack-label
        type="date"
        label="Fecha de nacimiento"
        readonly
        hint=""
      />

      <q-input
        v-model="formulario.modelo.persona.idNacionalidad"
        label="Nacionalidad"
        readonly
        hint=""
      />
    </div>

    <div class="col-12 col-md">
      <span class="text-body2 text-transparent">-</span>
      <q-input
        v-model="formulario.modelo.persona.idMunicipio"
        label="Municipio de Nacimiento"
        readonly
        hint=""
      />
      <div class="row q-gutter-xs">
        <q-select
          v-model="formulario.modelo.persona.sexo"
          label="Género"
          :options="[]"
          option-label="etiqueta"
          option-value="valor"
          lazy-rules
          readonly
          :rules="[required]"
          hint=""
          class="col"
        />
        <q-select
          v-model="formulario.modelo.persona.estadoCivil"
          label="Estado Civil"
          :options="[]"
          option-label="etiqueta"
          option-value="valor"
          lazy-rules
          readonly
          class="col"
          :rules="[required]"
          hint=""
        />
      </div>
      <q-input v-model="formulario.modelo.persona.email" label="Correo electrónico" hint="" />
      <q-input
        v-model="formulario.modelo.persona.profesion"
        label="Profesión u Ocupación"
        readonly
        hint=""
      />
      <q-input v-model="formulario.modelo.persona.celular" label="Teléfono" hint="" />
      <q-input
        v-model="formulario.modelo.persona.domicilio.direccion"
        label="Domicilio Real"
        hint=""
      />
      <q-input
        v-model="formulario.modelo.persona.funcionario.idOficina"
        label="Domicilio Profesional"
        hint=""
      />
      <q-input v-model="formulario.modelo.usuario" label="Nombre de Usuario" hint="" />
    </div>

    <div class="col-12 col-md">
      <span class="text-body2 text-primary">Datos de Funcionario</span>

      <OSelect
        v-model="undefined"
        label="Entes"
        :options="[]"
        option-label="descripcion"
        option-value="id"
        input-debounce="0"
        use-input
        fill-input
        hint=""
        autofocus
        hide-selected
        clearable
      />

      <OSelect
        v-model="formulario.modelo.persona.funcionario.idOficina"
        label="Oficinas"
        :options="[]"
        option-label="descripcion"
        option-value="id"
        input-debounce="0"
        use-input
        fill-input
        hint=""
        autofocus
        hide-selected
        clearable
      />

      <OSelect
        v-model="formulario.modelo.persona.funcionario.idCargo"
        label="Cargo"
        :options="[]"
        option-label="descripcion"
        option-value="id"
        input-debounce="0"
        use-input
        fill-input
        hint=""
        autofocus
        hide-selected
        clearable
      />

      <OSelect
        v-model="formulario.modelo.persona.funcionario.tipoContrato"
        label="Tipo de Contrato"
        :options="[]"
        option-label="descripcion"
        option-value="id"
        input-debounce="0"
        use-input
        fill-input
        hint=""
        autofocus
        hide-selected
        clearable
      />

      <q-input
        v-model="undefined"
        label="Titulo"
        placeholder="Ej.: Ing. Abog. Arq.. Dr. MSc. PhD."
        hint=""
      />

      <q-input v-model="undefined" type="number" min="0" label="Número de Interno" hint="" />
      <q-input v-model="undefined" label="Correo Institucional" hint="" />
    </div>
  </q-form>
</template>

<style scoped lang="sass">
.avatar--border
  outline: 0.1rem solid gray
  outline-offset: 0.2rem
  border: 0.1rem solid gray
</style>
