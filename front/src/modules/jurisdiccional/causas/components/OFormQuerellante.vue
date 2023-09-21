<script lang="ts" setup>
import { required } from '@/common/rules'
import { ref } from 'vue'

const panel = ref('natural')
</script>

<template>
  <q-option-group
    v-model="panel"
    inline
    :options="[
      { label: 'Natural', value: 'natural' },
      { label: 'Juridico', value: 'juridico' }
    ]"
  />

  <q-tab-panels v-model="panel" animated>
    <q-tab-panel name="natural">
      <q-form>
        <div class="row">
          <span class="text-body2 text-primary">Datos Personales</span>
          <q-select
            v-model="undefined"
            label="Documento de Identidad"
            :options="['Cédula de Identidad', 'Pasaporte']"
            option-label="etiqueta"
            option-value="valor"
            lazy-rules
            hint=""
            class="col"
          />
          <q-input
            v-model="undefined"
            label="Nùmero de Documento"
            hint=""
            class="col"
            :rules="[required]"
          />
          <div class="col items-center q-mb-sm">
            <q-avatar size="4.3rem" class="avatar--border q-mb-xs">
              <img :src="'data:image/jpg;base64,'" alt="fotografía" class="q-pa-xs" />
              <q-icon name="mdi-account" size="4rem" />
            </q-avatar>
            <span class="text-body2"> C.I.: </span>
            <span class="text-body2 text-grey"> No es Ciudadano digital </span>
          </div>

          <q-input v-model="undefined" label="Nombres" hint="" :rules="[required]" class="col" />
        </div>

        <div class="col-12 col-xl">
          <span class="text-body2 text-transparent">-</span>
          <q-input v-model="undefined" label="Primero Apellido" hint="" />
          <q-input v-model="undefined" label="Segundo Apellido" hint="" />
          <q-input v-model="undefined" label="Apellido del Esposo" hint="" />
          <q-input v-model="undefined" stack-label type="date" label="Fecha de nacimiento" hint="" />
          <q-select
            v-model="undefined"
            label="Paìs de Nacimiento"
            :options="['Argentina', 'Bolivia']"
            option-label="etiqueta"
            option-value="valor"
            lazy-rules
            hint=""
            class="col"
          />
        </div>
        <div class="col-12 col-xl">
          <span class="text-body2 text-transparent">-</span>
          <q-select
            v-model="undefined"
            label="Departamento"
            :options="['Chuquisaca', 'La Paz']"
            option-label="etiqueta"
            option-value="valor"
            lazy-rules
            hint=""
            class="col"
          />
          <q-select
            v-model="undefined"
            label="Municipio"
            :options="['Yotala', 'Zudañez']"
            option-label="etiqueta"
            option-value="valor"
            lazy-rules
            hint=""
            class="col"
          />
          <q-select
            v-model="undefined"
            label="Municipio"
            :options="['Yotala', 'Zudañez']"
            option-label="etiqueta"
            option-value="valor"
            lazy-rules
            hint=""
            class="col"
          />
          <q-select
            v-model="undefined"
            label="Estado Civil"
            :options="[]"
            option-label="etiqueta"
            option-value="valor"
            lazy-rules
            hint=""
            class="col"
          />
          <q-select
            v-model="undefined"
            label="Genero"
            :options="[]"
            option-label="etiqueta"
            option-value="valor"
            lazy-rules
            hint=""
            class="col"
          />
        </div>
        <div class="col-12 col-xl">
          <span class="text-body2 text-transparent">-</span>
          <q-select
            v-model="undefined"
            label="Sexo"
            :options="[]"
            option-label="etiqueta"
            option-value="valor"
            lazy-rules
            hint=""
            class="col"
          />
          <q-select
            v-model="undefined"
            label="Idioma"
            :options="[]"
            option-label="etiqueta"
            option-value="valor"
            lazy-rules
            hint=""
            class="col"
          />
          <q-select
            v-model="undefined"
            label="Relaciòn con la vìctima"
            :options="[]"
            option-label="etiqueta"
            option-value="valor"
            lazy-rules
            hint=""
            class="col"
          />
          <q-select
            v-model="undefined"          
            label="Grado Discapacidad"
            :options="[]"
            option-label="etiqueta"
            option-value="valor"
            lazy-rules
            hint=""
            class="col"
          />
        </div>
      </q-form>
    </q-tab-panel>

    <q-tab-panel name="juridico">
      <div class="text-h6">Movies</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>
  </q-tab-panels>
</template>

<style scoped lang="sass">
.avatar--border
  outline: 0.3rem solid gray
  outline-style: double
  //outline-offset: 0.3rem
</style>
