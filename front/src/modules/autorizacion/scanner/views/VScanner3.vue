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
      <div class="col-12">
        <q-card class="full-height" flat bordered>
          <q-card-section>
            <div class="row">
              <div class="col-12 text-primary text-bold">Datos Documentos</div>
              <div class="col-4">
                <q-input outlined label="Descripcion" v-model="descripcion"/>
              </div>
              <div class="col-4">
                <q-input outlined label="Numero de Hojas" v-model="descripcion"/>
              </div>
              <div class="col-4">
                <q-input outlined label="Tamaño en kb" v-model="descripcion"/>
              </div>
              <div class="col-12">
                <q-btn-group>
                  <q-btn name="back-circle-outline" icon="mdi-sync" color="primary" flat dense/>
                  <q-btn name="play-circle-outline" icon="mdi-autorenew" color="primary" flat dense/>
                  <q-btn name="back" icon="mdi-keyboard-backspace" color="primary" flat dense/>
                  <q-btn name="forward" icon="mdi-keyboard-tab" color="primary" flat dense/>
                  <q-btn name="minus-circle-outline" icon="mdi-minus" color="primary" flat dense/>
                  <q-btn name="plus-circle-outline" icon="mdi-plus" color="primary" flat dense/>
                  <q-btn name="delete-circle-outline" icon="mdi-delete" color="primary" flat dense/>
                  <q-btn name="fullscreen" icon="mdi-fullscreen" color="primary" flat dense/>
                </q-btn-group>
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-3" v-for="i in 5" :key="i">
                    <q-card class="q-ma-md">
                      <q-card-section class="q-pa-none">
                        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" class="full-width"/>
                      </q-card-section>
                      <q-card-section class="q-pa-none">
                        <div class="text-center bg-grey text-white">
                          {{i}}
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
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
