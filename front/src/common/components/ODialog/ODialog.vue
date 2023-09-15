<script setup lang="ts">
import { type PropType, computed } from 'vue'
import { DialogHandler } from './DialogHandler'

const props = defineProps({
  modelValue: {
    type: Object as PropType<DialogHandler>,
    required: true,
    validator(value) {
      return value instanceof DialogHandler
    }
  }
})

defineEmits<{
  'update:modelValue': [DialogHandler]
  onCerrar: []
}>()

const dialog = computed(() => props.modelValue)
</script>

<template>
  <q-dialog
    v-model="dialog.isOpen"
    :persistent="dialog.isPersistent"
    :maximized="dialog.isMaximizad"
    :full-width="dialog.estaEnAnchoCompleto"
    :full-height="dialog.estaEnAltoCompleto"
    allow-focus-outside
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card style="max-width: 80vw">
      <q-bar class="bg-primary text-white">
        <div class="text-subtitle1 ellipsis">
          {{ dialog.title }}
        </div>
        <q-space />
        <q-btn v-close-popup dense flat icon="mdi-close" @click="$emit('onCerrar')">
          <q-tooltip class="bg-white text-primary">Cerrar</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section
        class="scroll"
        :style="
          dialog.enableActions
            ? 'max-height: calc(100vh - 12.5rem)'
            : 'max-height: calc(100vh - 2rem)'
        "
      >
        <slot></slot>
      </q-card-section>

      <q-separator />

      <q-card-actions v-if="dialog.enableActions" align="center" class="no-wrap">
        <q-btn
          v-close-popup
          outline
          color="primary"
          icon="mdi-cancel"
          label="Cerrar"
          :disable="dialog.isLoading"
          @click="dialog.actions(false)"
        />
        <q-btn
          color="primary"
          icon="mdi-content-save-outline"
          label="Guardar"
          :loading="dialog.isLoading"
          @click="dialog.actions(true)"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
