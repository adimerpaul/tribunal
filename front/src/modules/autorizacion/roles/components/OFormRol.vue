<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import type { IRol } from '../roles.types'
import { RolService } from '../services/rol.service'

const props = defineProps<{ rol?: IRol }>()

const form = reactive<{ model: IRol; [key: string]: any }>({
  model: {} as IRol,
  ref: {} as HTMLFormElement
})

async function save() {
  const consult = await form.ref.validate()
  if (!consult) return

  let result: IRol | undefined

  if (form.model?.id != null) {
    console.log('siiii')
    result = await RolService.update(form.model)
  } else {
    console.log('nooooooo')
    result = await RolService.save(form.model)
  }
  console.warn('first', result)
  return result

}

onMounted(() => {
  if (!props.rol?.id) return
  form.model = props.rol
})

defineExpose({ save })
</script>

<template>
  <q-form
    :ref="(el) => (form.ref = el as HTMLFormElement)"
    data-cy="formulario-rol"
    class="row q-gutter-sm"
  >
    <div class="col-12 col-md">
      <span class="text-body2 text-primary">Ver detalle de rol</span>

      <q-input
        v-model="form.model.codigo" 
        type="text" 
        min="4" 
        max="30"
        label="Código" 
        hint="" 
      />
      <q-input
        v-model="form.model.nombre"
        label="Nombre"
        placeholder="Ej.: Administrador"
        hint="" 
      />
      <q-input
        v-model="form.model.descripcion" 
        type="text" 
        min="4" 
        max="200"
        label="Descripción" 
        hint="" 
      />      
      <q-input 
        v-model.number="form.model.nivel" 
        type="number" 
        label="Nivel" 
        hint="" 
      />   
      <q-input
        v-model="form.model.usuarioCreacion" 
        type="text" 
        min="4" 
        max="200"
        label="Usuario creación" 
        hint="" 
      />  
      <q-input
        v-model="form.model.fechaCreacion" 
        type="text" 
        min="4" 
        max="200"
        label="Fecha creación" 
        hint="" 
      />  
      <q-input
        v-model="form.model.usuarioModificacion" 
        type="text" 
        min="4" 
        max="200"
        label="Usuario modifico" 
        hint="" 
      />  
      <q-input
        v-model="form.model.fechaMoficacion" 
        type="text" 
        min="4" 
        max="200"
        label="Fecha de modificación" 
        hint="" 
      />  
    </div>
  </q-form>
</template>