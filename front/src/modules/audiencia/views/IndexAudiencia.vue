<script setup lang="ts">
import {ref} from "vue";
// import moment from "moment";
//
const descripcion = ref('Juzgano Publico Civil y comercial')
const editor= ref('What you see is <b>what</b> you get.')
// const memorial = ref('Memorial de Apersonamiento')
// const numeroHojas = ref(5)
// const informe = ref('Informe de Apersonamiento')
// const fecha = ref(moment().format('YYYY-MM-DD'))
//
// const representante = ref({
//   ci: '7334567',
//   name: 'Maria del Carmen',
//   lastName: 'Perez',
//   secondLastName: 'Gutierrez',
// })
const sujetos = ref([
  { id:1, name:"Maria del Carmen", lastName:"Perez", secondLastName:"Gutierrez", ci:"7334567", type:"Demandante", selected: true },
  { id:2, name:"Juan Carlos", lastName:"Perez", secondLastName:"Gutierrez", ci:"7334567", type:"Demandante", selected: false },
  { id:3, name:"Maria del Carmen", lastName:"Perez", secondLastName:"Gutierrez", ci:"7334567", type:"Demandante", selected: false },
  { id:4, name:"Juan Carlos", lastName:"Perez", secondLastName:"Gutierrez", ci:"7334567", type:"Demandante", selected: false }
])
</script>
<template>
  <q-card>
    <q-card-section>
      <div class="row">
        <div class="col-6">
          <div class="text-center text-bold text-blue-10 text-subtitle1 q-pa-lg">Registrar Sujetos Procesales Asistentes</div>
          <q-markup-table dense flat bordered wrap-cells>
            <thead>
              <tr class="bg-dark">
                <th class="text-white">Nro</th>
                <th class="text-white">CI</th>
                <th class="text-white">Nombre y Apellidos</th>
                <th class="text-white">Tipo</th>
                <th class="text-white">Asistencia</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(sujeto, index) in sujetos" :key="sujeto.id">
                <td>{{index + 1}}</td>
                <td>{{sujeto.ci}}</td>
                <td>{{sujeto.name}} {{sujeto.lastName}} {{sujeto.secondLastName}}</td>
                <td>{{sujeto.type}}</td>
                <td>
                  <q-checkbox v-model="sujeto.selected" />
                </td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
        <div class="col-6">
          <div class="row q-pa-md">
            <div class="col-4">
              <div class="text-bold"><span class="text-blue-14">CU:</span> 1234567</div>
            </div>
            <div class="col-4">
              <div class="text-bold"><span class="text-blue-14">Fiscal:</span> Ricardo garcia</div>
            </div>
            <div class="col-4">
              <div class="text-bold"><span class="text-blue-14">Sujetos procesales</span></div>
            </div>
            <div class="col-6">
              <q-select label="Tipo de Respuesta" filled v-model="descripcion" :options="['Memorial 1', 'Memorial 2', 'Memorial 3']" />
            </div>
            <div class="col-6">
              <ul>
                <li v-for="sujeto in sujetos" :key="sujeto.id">
                  <span style="font-size: 10px;padding: 0px;margin: 0px">{{sujeto.name}} {{sujeto.lastName}} {{sujeto.secondLastName}}</span>
                </li>
              </ul>
            </div>
            <div class="col-12">
              <q-btn label="Planilla" color="grey-3" class="text-blue-10" />
              <q-btn label="Redactar" color="blue-10" class="text-yellow-5" />
              <q-badge label="Requiere agenda" color="yellow-8" />
              <q-badge label="Descripcion" color="green-8" />
              <q-badge label="Requiere firma" color="orange-8" />
            </div>
            <div class="col-12">
              <q-editor v-model="editor" min-height="5rem" />
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
<!--    <div class="col-12 q-pb-xs">-->
<!--      <q-card flat bordered>-->
<!--        <q-card-section>-->
<!--          <div class="row">-->
<!--            <div class="col-6 col-md-10">-->
<!--            </div>-->
<!--            <div class="col-6 col-md-2">-->
<!--              <q-input label="fecha" filled v-model="fecha" />-->
<!--            </div>-->
<!--            <div class="col-12">-->
<!--              <div class="text-blue text-bold">Ingrese datos del memorial</div>-->
<!--            </div>-->
<!--            <div class="col-12 col-md-4 q-pa-xs">-->
<!--              <q-select v-model="descripcion" filled :options="['Memorial 1', 'Memorial 2', 'Memorial 3']" label="Descripcion" />-->
<!--            </div>-->
<!--            <div class="col-12 col-md-3 q-pa-xs">-->
<!--              <q-select label="Memorial" filled v-model="memorial" />-->
<!--            </div>-->
<!--            <div class="col-12 col-md-2 q-pa-xs">-->
<!--              <q-input type="number" label="Numero de hojas" filled v-model="numeroHojas" />-->
<!--            </div>-->
<!--            <div class="col-12 col-md-3 q-pa-xs">-->
<!--              <q-input label="Informe" filled v-model="informe" />-->
<!--            </div>-->
<!--          </div>-->
<!--        </q-card-section>-->
<!--      </q-card>-->
<!--    </div>-->
<!--    <div class="col-12">-->
<!--      <q-card flat bordered>-->
<!--        <q-card-section>-->
<!--          <div class="row">-->
<!--            <div class="col-12 col-md-3 q-pa-xs">-->
<!--              <div class="text-blue text-bold text-caption">Ingrese datos del representante</div>-->
<!--              <q-input filled class="q-my-xs" label="C.I." dense v-model="representante.ci" />-->
<!--              <q-input filled class="q-my-xs" label="Nombre" dense v-model="representante.name" />-->
<!--              <q-input filled class="q-my-xs" label="Apellido Paterno" dense v-model="representante.lastName" />-->
<!--              <q-input filled class="q-my-xs" label="Apellido Materno" dense v-model="representante.secondLastName" />-->
<!--            </div>-->
<!--            <div class="col-12 col-md-5 q-pa-xs flex flex-center">-->
<!--              <div class="text-center">-->
<!--                <q-avatar size="100px">-->
<!--                  <q-img src="https://cdn.quasar.dev/img/avatar.png"/>-->
<!--                </q-avatar>-->
<!--                <div class="text-center text-grey text-bold">-->
<!--                  CI: {{representante.ci}}-->
<!--                </div>-->
<!--                <div class="text-center text-caption text-grey text-bold">-->
<!--                  {{representante.name}} {{representante.lastName}} {{representante.secondLastName}}-->
<!--                </div>-->

<!--              </div>-->
<!--            </div>-->
<!--            <div class="col-12 col-md-4 q-pa-xs">-->
<!--              <div class="text-blue text-bold text-caption">Sujeto Procesal</div>-->
<!--              <div class="bg-grey-3 q-pa-xs">-->
<!--                <q-checkbox class="full-width" dense v-for="sujeto in sujetos" v-model="sujeto.selected" :label="sujeto.name" :key="sujeto.id" />-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </q-card-section>-->
<!--      </q-card>-->
<!--    </div>-->
<!--    <div class="col-12 text-h6">-->
<!--      Documentos adjuntos-->
<!--    </div>-->
<!--    <div class="col-12">-->
<!--      <q-card flat bordered>-->
<!--        <q-card-section>-->
<!--          <div class="text-center bg-grey-2 q-pa-xs border-azul-entre-lineas">-->
<!--            <span class="text-caption text-bold">Arratra y suelre el archivo aqui</span>-->
<!--            <div class="text-caption">o haz click para seleccionar</div>-->
<!--            <div class="text-caption">Tamaño maximo 20MB formato PDF</div>-->
<!--          </div>-->
<!--        </q-card-section>-->
<!--      </q-card>-->
<!--    </div>-->
<!--  </div>-->
</template>
<style>
.border-azul-entre-lineas {
  border: 1px dashed #2196f3;
}
</style>
