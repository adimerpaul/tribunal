<script setup lang="ts">
import {ref} from "vue";

const descripcion = ref('')
</script>
<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-4 text-center">
        <q-btn color="primary" outline label="Datos generales" no-caps size="12px" icon="mdi-file-document-outline"/>
      </div>
      <div class="col-12 col-md-4 text-center">
        <q-btn color="primary" outline label="Sujeto Procesales" no-caps size="12px" icon="mdi-account-group-outline"/>
      </div>
      <div class="col-12 col-md-4 text-center">
        <q-btn color="primary" outline label="Digitialización" no-caps size="12px" icon="mdi-scanner"/>
      </div>
      <div class="col-12">
        <div class="text-primary text-bold">Adjuntar Memorial - Otros Documentos</div>
      </div>
      <div class="col-12 col-md-6">
        <q-card flat bordered>
          <q-card-section class="row">
            <q-btn color="primary" outline no-caps class="col-6">
              <div>
                <q-icon name="mdi-scanner" size="50px"/>
              </div>
              <div class="text-primary text-caption">Proceda a Digitalizar Documentos</div>
            </q-btn>
            <q-btn color="primary" outline no-caps class="col-6">
              <div>
                <q-icon name="mdi-file-document-outline" size="50px"/>
              </div>
              <div class="text-primary text-caption text-bold">
                Arrastre y suelte archivos o
              </div>
              <div class="text-primary text-caption">
                Haz Click para seleccionar archivos desde tu dispositivo
              </div>
            </q-btn>
            <q-btn color="primary" outline label="Adjuntar Pruebas" icon="mdi-camera" no-caps class="col-12"/>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-6">
        <q-card class="full-height" flat bordered>
          <q-card-section>
            <div class="row">
              <div class="col-12">
                <q-markup-table dense>
                  <thead>
                  <tr>
                    <th>Descripcion</th>
                    <th>Numero de Hojas</th>
                    <th>Tamaño en kb</th>
                    <th>Acciones</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="i in 5" :key="i">
                    <td>Descripcion {{i}}</td>
                    <td> {{i}}Kb</td>
                    <td>Tamaño en kb {{i}}</td>
                    <td>
                      <q-btn-group>
                        <q-btn name="edit" icon="mdi-pencil" color="primary" flat dense/>
                        <q-btn name="view" icon="mdi-eye" color="primary" flat dense/>
                        <q-btn name="delete" icon="mdi-delete" color="primary" flat dense/>
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
      <div class="col-12">
        <q-card flat bordered>
          <q-card-section class="text-right">
            <q-btn color="primary" flat label="Cancelar" icon="mdi-close" no-caps class="col-12"/>
            <q-btn color="primary" outline label="Guardar y Sortear" icon="mdi-content-save" no-caps class="col-12"/>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
