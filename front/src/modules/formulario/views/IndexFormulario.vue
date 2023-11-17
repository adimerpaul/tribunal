<script setup lang="ts">
import {ref} from "vue";
// import moment from "moment";
import { useQuasar } from 'quasar';
const descripcion = ref('Juzgano Publico Civil y comercial')
const editor= ref('What you see is <b>what</b> you get.')
const dialogFirma = ref(false)
const dialogScanner = ref(false)
const dialogVideo = ref(false)
const dato = ref({})
const $q = useQuasar();
const firma = (dat:any) => {
  dialogFirma.value = true
  dato.value = dat
  console.log(dato);
}
const video = (dat:any) => {
  dialogVideo.value = true
  dato.value = dat
  console.log(dato);
}
const scanner = (dat:any) => {
  dialogScanner.value = true
  dato.value = dat
  console.log(dato);
}
const datos = ref([
  { id:1, fecha: '2021-09-01', horaInicio: '08:00', horaFin: '09:00', tipoAudiencia: 'Audiencia de medidas cautelares', modalidad: 'Presencial', lugar: 'Juzgado 1ro de Instruccion en lo Penal', codigoUnico: '1234567', denunciante: 'Juan Carlos Perez Gutierrez', denunciado: 'Maria del Carmen Perez Gutierrez', delitos: 'Robo agravado', estado: 'Pendiente', acciones: 'Ver' },
  { id:2, fecha: '2021-09-01', horaInicio: '08:00', horaFin: '09:00', tipoAudiencia: 'Audiencia de medidas cautelares', modalidad: 'Presencial', lugar: 'Juzgado 1ro de Instruccion en lo Penal', codigoUnico: '1234567', denunciante: 'Juan Carlos Perez Gutierrez', denunciado: 'Maria del Carmen Perez Gutierrez', delitos: 'Robo agravado', estado: 'Pendiente', acciones: 'Ver' },
  { id:3, fecha: '2021-09-01', horaInicio: '08:00', horaFin: '09:00', tipoAudiencia: 'Audiencia de medidas cautelares', modalidad: 'Presencial', lugar: 'Juzgado 1ro de Instruccion en lo Penal', codigoUnico: '1234567', denunciante: 'Juan Carlos Perez Gutierrez', denunciado: 'Maria del Carmen Perez Gutierrez', delitos: 'Robo agravado', estado: 'Pendiente', acciones: 'Ver' },
  { id:4, fecha: '2021-09-01', horaInicio: '08:00', horaFin: '09:00', tipoAudiencia: 'Audiencia de medidas cautelares', modalidad: 'Presencial', lugar: 'Juzgado 1ro de Instruccion en lo Penal', codigoUnico: '1234567', denunciante: 'Juan Carlos Perez Gutierrez', denunciado: 'Maria del Carmen Perez Gutierrez', delitos: 'Robo agravado', estado: 'Pendiente', acciones: 'Ver'}
])
</script>
<template>
  <div>
    <q-dialog v-model="dialogFirma">
      <q-card style="width: 650px;max-width: 90vw;">
        <q-card-section class="q-pb-none">
          <div class="text-center"><span class="text-bold">CU: </span>{{dato.id}}</div>
        </q-card-section>
        <q-card-section class="">
          <div class="row">
            <div class="col-12 q-pa-xs">
              <q-input filled readonly label="Juzgado" v-model="descripcion" />
            </div>
            <div class="col-6 q-pa-xs">
              <q-input filled readonly label="Fecha" v-model="dato.fecha" />
            </div>
            <div class="col-6 q-pa-xs">
              <q-input filled readonly label="Hora inicio" v-model="dato.horaInicio" />
            </div>
            <div class="col-12 q-pa-xs">
              <q-input filled readonly label="Modalidad" v-model="dato.modalidad" />
            </div>
            <div class="col-6 q-pa-xs">
              <q-input filled readonly label="Nombre y Apellido" v-model="dato.denunciante" />
            </div>
            <div class="col-6 q-pa-xs">
              <q-select filled readonly label="Tipo de Audiencia" v-model="dato.tipoAudiencia" />
            </div>
            <div class="col-12 q-pa-xs">
              <q-input filled readonly label="Fecha Solictud" v-model="dato.fecha" />
            </div>
            <div class="col-6 q-pa-xs text-center">
              <q-btn color="primary" label="Firma del solicitante" icon="mdi-signature" />
            </div>
            <div class="col-6 q-pa-xs text-center">
              <q-btn color="primary" label="Firma de entrega" icon="mdi-signature" />
            </div>
            <div class="col-12 q-pa-xs">
              <q-btn color="green-9" label="Descargar" icon="mdi-download" class="full-width" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="dialogVideo">
      <q-card style="width: 650px;max-width: 90vw;">
        <q-card-section class="q-pb-none">
          <div class="text-center"><span class="text-bold">CU: </span>{{dato.id}}</div>
        </q-card-section>
        <q-card-section class="">
          <div class="row">
            <div class="col-12 q-pa-xs">
              <q-input filled readonly label="Juzgado" v-model="descripcion" />
            </div>
            <div class="col-6 q-pa-xs">
              <q-input filled readonly label="Fecha" v-model="dato.fecha" />
            </div>
            <div class="col-6 q-pa-xs">
              <q-input filled readonly label="Hora inicio" v-model="dato.horaInicio" />
            </div>
            <div class="col-6 q-pa-xs">
              <q-input filled readonly label="Modalidad" v-model="dato.modalidad" />
            </div>
            <div class="col-6 q-pa-xs">
            </div>
            <div class="col-6 q-pa-xs">
            </div>
            <div class="col-6 q-pa-xs">
              <q-input filled readonly label="Fecha y hora de subida" v-model="dato.fecha" />
            </div>
            <div class="col-12 q-pa-xs">
              <q-btn color="blue-9" label="Subir video" icon="mdi-video" class="full-width" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="dialogScanner">
      <q-card style="width: 650px;max-width: 90vw;">
        <q-card-section class="q-pb-none">
          <div class="text-center"><span class="text-bold">CU: </span>{{dato.id}}</div>
        </q-card-section>
        <q-card-section class="">
          <div class="row">
            <div class="col-12 q-pa-xs">
              <q-input filled readonly label="Juzgado" v-model="descripcion" />
            </div>
            <div class="col-6 q-pa-xs">
              <q-input filled readonly label="Fecha" v-model="dato.fecha" />
            </div>
            <div class="col-6 q-pa-xs">
              <q-input filled readonly label="Hora inicio" v-model="dato.horaInicio" />
            </div>
            <div class="col-6 q-pa-xs">
              <q-input filled readonly label="Modalidad" v-model="dato.modalidad" />
            </div>
            <div class="col-6 q-pa-xs">
            </div>
            <div class="col-6 q-pa-xs">
            </div>
            <div class="col-6 q-pa-xs">
              <q-input filled readonly label="Fecha y hora de subida" v-model="dato.fecha" />
            </div>
            <div class="col-12 q-pa-xs">
              <q-btn color="orange-9" label="Scanner" icon="mdi-scanner" class="full-width" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-card>
      <q-card-section>
        <div class="row">
          <div class="col-12">
            <div class="text-center text-bold text-blue-10 text-subtitle1 q-pa-lg">Registrar Sujetos Procesales Asistentes</div>
            <q-markup-table dense flat bordered wrap-cells>
              <thead>
              <tr class="bg-dark">
                <th class="text-white">Fecha</th>
                <th class="text-white">Hora inicio</th>
                <th class="text-white">Hora fin</th>
                <th class="text-white">Tipo Audiencia</th>
                <th class="text-white">Modalidad</th>
                <th class="text-white">Lugar</th>
                <th class="text-white">Codigo unico</th>
                <th class="text-white">Denunciante/Victima <br> Querenllante</th>
                <th class="text-white">Denunciado <br> Querenllado</th>
                <th class="text-white">Delito(s)</th>
                <th class="text-white">Estado</th>
                <th class="text-white">Acciones</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(dato, index) in datos" :key="index">
                <!--              <td>{{index + 1}}</td>-->
                <td>{{dato.fecha}}</td>
                <td>{{dato.horaInicio}}</td>
                <td>{{dato.horaFin}}</td>
                <td>{{dato.tipoAudiencia}}</td>
                <td>{{dato.modalidad}}</td>
                <td>{{dato.lugar}}</td>
                <td>{{dato.codigoUnico}}</td>
                <td>{{dato.denunciante}}</td>
                <td>{{dato.denunciado}}</td>
                <td>{{dato.delitos}}</td>
                <td>{{dato.estado}}</td>
                <td>
                  <q-btn-group>
                    <q-btn color="primary" icon="mdi-eye" flat dense round @click="firma(dato)"/>
                    <q-btn color="grey" icon="mdi-camera" flat dense round @click="video(dato)"/>
                    <q-btn color="blue-9" icon="mdi-calendar" flat dense round @click="scanner(dato)"/>
                    <q-btn color="green-9" icon="mdi-history" flat dense round />
                    <q-btn color="red-9" icon="mdi-download" flat dense round />
                    <q-btn color="orange-9" icon="mdi-scanner" flat dense round />
                    <q-btn color="yellow-9" icon="mdi-video" flat dense round />
                  </q-btn-group>
                </td>
              </tr>
              </tbody>
            </q-markup-table>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
