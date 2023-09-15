<script setup lang="ts">
import type { QSelectProps } from 'quasar'
import { ref, onMounted } from 'vue'

const props = defineProps<QSelectProps>()

const options = ref(props.options)

function filterFn(
  val: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update: (callbackFn: () => void, afterFn?: (ref: any) => void) => void
) {
  if (val === '') {
    update(() => {
      options.value = props.options
    })
    return
  }

  update(() => {
    const needle = val.toString().toLowerCase().normalize('NFKD').replace(/[^\w]/g, '')

    options.value = props.options?.filter((optionParam: string | unknown) => {
      let option = typeof optionParam === 'string' ? optionParam : ''

      if (typeof props.optionLabel === 'function' && typeof optionParam === 'object') {
        option = props.optionLabel(optionParam)
      } else if (typeof props.optionLabel === 'string' && typeof optionParam === 'object') {
        option = (optionParam as { [key: string]: string })[props.optionLabel].toString()
      }

      return (
        typeof option === 'string' &&
        option.toLowerCase().normalize('NFKD').replace(/[^\w]/g, '').indexOf(needle) > -1
      )
    })
  })
}

onMounted(() => {
  if (props.mapOptions) {
    console.error('no es compatible con map options')
  }
})
</script>
<template>
  <q-select v-bind="{ ...props, onFilter: filterFn, options: options }">
    <template #no-option>
      <q-item>
        <q-item-section class="text-grey"> No hay resultados </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>
<style lang="sass" scoped></style>
