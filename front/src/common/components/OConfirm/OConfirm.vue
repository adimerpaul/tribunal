<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <div class="text-h6 text-center">¡CONFIRME!</div>
      </q-card-section>
      <q-card-section>
        <div class="text-body1 text-center">{{ props.mensaje }}</div>
        <div v-if="nota" class="text-body2 text-weight-light text-center">
          Nota: {{ props.nota }}
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat color="primary" label="Cancel" @click="onDialogCancel" />
        <q-btn color="primary" label="Aceptar" autofocus @click="onOKClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { useDialogPluginComponent } from 'quasar'

const props = defineProps({
  mensaje: {
    type: String,
    default: () => '¿Desea proceder?'
  },
  nota: {
    type: String,
    default: () => ''
  }
})

defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
function onOKClick() {
  onDialogOK()
}
</script>
