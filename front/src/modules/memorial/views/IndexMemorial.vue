<script setup lang="ts">
import {ref} from "vue";
import moment from "moment";

const descripcion = ref('Juzgano Publico Civil y comercial')
const memorial = ref('Memorial de Apersonamiento')
const numeroHojas = ref(5)
const informe = ref('Informe de Apersonamiento')
const fecha = ref(moment().format('YYYY-MM-DD'))

const representante = ref({
  ci: '7334567',
  name: 'Maria del Carmen',
  lastName: 'Perez',
  secondLastName: 'Gutierrez',
})
const sujetos = ref([
  { id:1, name:"Maria del Carmen", lastName:"Perez", secondLastName:"Gutierrez", ci:"7334567", type:"Demandante", selected: true },
  { id:2, name:"Juan Carlos", lastName:"Perez", secondLastName:"Gutierrez", ci:"7334567", type:"Demandante", selected: false },
  { id:3, name:"Maria del Carmen", lastName:"Perez", secondLastName:"Gutierrez", ci:"7334567", type:"Demandante", selected: false },
  { id:4, name:"Juan Carlos", lastName:"Perez", secondLastName:"Gutierrez", ci:"7334567", type:"Demandante", selected: false }
])
</script>
<template>
  <div class="row">
    <div class="col-12 q-pb-xs">
      <q-card flat bordered>
        <q-card-section>
          <div class="row">
            <div class="col-10">
            </div>
            <div class="col-2">
              <q-input label="fecha" filled v-model="fecha" />
            </div>
            <div class="col-12">
              <div class="text-blue text-bold">Ingrese datos del memorial</div>
            </div>
            <div class="col-4 q-pa-xs">
              <q-select v-model="descripcion" filled :options="['Memorial 1', 'Memorial 2', 'Memorial 3']" label="Descripcion" />
            </div>
            <div class="col-3 q-pa-xs">
              <q-select label="Memorial" filled v-model="memorial" />
            </div>
            <div class="col-2 q-pa-xs">
              <q-input type="number" label="Numero de hojas" filled v-model="numeroHojas" />
            </div>
            <div class="col-3 q-pa-xs">
              <q-input label="Informe" filled v-model="informe" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12">
      <q-card flat bordered>
        <q-card-section>
          <div class="row">
            <div class="col-3 q-pa-xs">
              <div class="text-blue text-bold text-caption">Ingrese datos del representante</div>
              <q-input filled class="q-my-xs" label="C.I." dense v-model="representante.ci" />
              <q-input filled class="q-my-xs" label="Nombre" dense v-model="representante.name" />
              <q-input filled class="q-my-xs" label="Apellido Paterno" dense v-model="representante.lastName" />
              <q-input filled class="q-my-xs" label="Apellido Materno" dense v-model="representante.secondLastName" />
            </div>
            <div class="col-5 q-pa-xs flex flex-center">
              <div class="text-center">
                <q-avatar size="100px">
                  <q-img src="https://cdn.quasar.dev/img/avatar.png"/>
                </q-avatar>
                <div class="text-center text-grey text-bold">
                  CI: {{representante.ci}}
                </div>
                <div class="text-center text-caption text-grey text-bold">
                  {{representante.name}} {{representante.lastName}} {{representante.secondLastName}}
                </div>

              </div>
            </div>
            <div class="col-4 q-pa-xs">
              <div class="text-blue text-bold text-caption">Sujeto Procesal</div>
              <div class="bg-grey-3 q-pa-xs">
                <q-checkbox class="full-width" dense v-for="sujeto in sujetos" v-model="sujeto.selected" :label="sujeto.name" :key="sujeto.id" />
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 text-h6">
      Documentos adjuntos
    </div>
    <div class="col-12">
      <q-card flat bordered>
        <q-card-section>
          <div class="text-center bg-grey-2 q-pa-xs border-azul-entre-lineas">
            <span class="text-caption text-bold">Arratra y suelre el archivo aqui</span>
            <div class="text-caption">o haz click para seleccionar</div>
            <div class="text-caption">Tamaño maximo 20MB formato PDF</div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<style>
.border-azul-entre-lineas {
  border: 1px dashed #2196f3;
}
</style>