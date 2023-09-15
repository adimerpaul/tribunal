<script setup lang="ts">
defineProps<{
  fuenteDatos: object
  pathKey: { [path: string]: string }
}>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const interpretePathValor = (objecto: { [key: string]: any }, path: string): string => {
  path = path.replace(/\[(\w+)\]/g, '.$1') // convert indexes to properties
  path = path.replace(/^\./, '') // strip a leading dot
  const attr = path.split('.')
  for (const i in attr) {
    const k = attr[i]

    if (!objecto || !(k in objecto)) return ''

    objecto = objecto[k]
  }
  return objecto ? objecto.toString().charAt(0).toUpperCase() + objecto.toString().slice(1) : '--'
}
</script>
<template>
  <q-card class="full-height" flat bordered>
    <div class="row">
      <div
        v-if="$slots.default"
        class="col-12 col-md-auto q-ma-sm column items-center justify-center"
      >
        <slot></slot>
        <template v-if="interpretePathValor(fuenteDatos, 'persona.documentoIdentidad')">
          <strong class="block text-center q-mt-sm">
            {{ interpretePathValor(fuenteDatos, 'persona.documentoIdentidad') }}
          </strong>

          <strong class="block text-center" style="line-height: 10px">
            {{ interpretePathValor(fuenteDatos, 'persona.tipoDocumento') }}
          </strong>
        </template>
        <template v-if="interpretePathValor(fuenteDatos, 'abogado.matricula')">
          <strong class="block text-center q-mt-sm">
            {{ interpretePathValor(fuenteDatos, 'abogado.matricula') }}
          </strong>

          <strong class="block text-center" style="line-height: 10px"> Matrícula </strong>
        </template>
      </div>

      <div class="col-12 col-md">
        <div class="table">
          <template v-for="(valor, index) in pathKey" :key="valor">
            <div
              v-if="
                ![
                  'persona.documentoIdentidad',
                  'persona.tipoDocumento',
                  'abogado.matricula'
                ].includes(index as string) || !$slots.default
              "
              class="text-no-wrap text-right text-weight-bold"
            >
              {{ valor }} :
            </div>
            <div
              v-if="
                ![
                  'persona.documentoIdentidad',
                  'persona.tipoDocumento',
                  'abogado.matricula'
                ].includes(index as string) || !$slots.default
              "
              class="q-pl-xs"
            >
              {{ interpretePathValor(fuenteDatos, index as string) }}
            </div>
          </template>
        </div>
      </div>
    </div>
  </q-card>
</template>

<style lang="sass" scoped>
.table
  display: grid
  grid-template-columns: 1fr 1fr
  padding: 0.5rem

.table > div:nth-child(4n-2), .table > div:nth-child(4n-3)
  background-color: #f5f5f5
</style>
