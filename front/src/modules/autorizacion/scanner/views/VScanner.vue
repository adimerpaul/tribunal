<script setup lang="ts">
import {ref} from "vue";
import { Printd } from 'printd'
const descripcion = ref('')
const dialog = ref(false)
const qrUbicacion = ref(1)
function imprimir () {
  const d = new Printd()
  d.print( document.getElementById('myElement'))
}
</script>
<template>
  <div>
    <div id="myElement" class="hidden">
      <div>
        <img src="/qr.png"
             :style="`width: 100px; height: 100px; position: absolute;${ qrUbicacion == 1 ? 'top: 0; left: 0;' : ''}${ qrUbicacion == 2 ? 'top: 0; left: 50%; transform: translateX(-50%);' : ''}${ qrUbicacion == 3 ? 'top: 0; right: 0;' : ''}${ qrUbicacion == 4 ? 'top: 92%; left: 0; transform: translateY(-50%);' : ''}${ qrUbicacion == 5 ? 'top: 92%; left: 50%; transform: translate(-50%, -50%);' : ''}${ qrUbicacion == 6 ? 'top: 92%; right: 0; transform: translateY(-50%);' : ''}`"/>
        Aca biene el contenido del memorial
      </div>
    </div>
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
<!--          <q-card-section>-->
<!--            <div class="row">-->
<!--              <div class="col-12 text-primary text-bold">Datos Documentos</div>-->
<!--              <div class="col-4">-->
<!--                <q-input outlined label="Descripcion" v-model="descripcion"/>-->
<!--              </div>-->
<!--            </div>-->
<!--          </q-card-section>-->
        </q-card>
      </div>
      <div class="col-12">
        <q-card flat bordered>
          <q-card-section class="text-right">
            <q-btn color="primary" outline label="Imprimir Borrador" icon="mdi-printer" no-caps class="col-12" @click="dialog = true"/>
            <q-btn color="primary" outline label="Guardar y Sortear" icon="mdi-content-save" no-caps class="col-12"/>
          </q-card-section>
        </q-card>
      </div>
      <q-dialog v-model="dialog" persistent>
        <q-card>
          <q-card-section>
            <div class="text-bold">QR Generado para la recepción del memorial</div>
          </q-card-section>
          <q-card-section>
            <div class="text-center">
              <div class="row">
                <div class="col-4">
                  <q-img :src="qrUbicacion==1?`/qr.png`:`/qr-vacio.png`" style="width: 50px; height: 50px" @click="qrUbicacion = 1"/>
                </div>
                <div class="col-4">
                  <q-img :src="qrUbicacion==2?`/qr.png`:`/qr-vacio.png`" style="width: 50px; height: 50px" @click="qrUbicacion = 2"/>
                </div>
                <div class="col-4">
                  <q-img :src="qrUbicacion==3?`/qr.png`:`/qr-vacio.png`" style="width: 50px; height: 50px" @click="qrUbicacion = 3"/>
                </div>
                <div class="col-12" style="height: 350px">
                </div>
                <div class="col-4">
                  <q-img :src="qrUbicacion==4?`/qr.png`:`/qr-vacio.png`" style="width: 50px; height: 50px" @click="qrUbicacion = 4"/>
                </div>
                <div class="col-4">
                  <q-img :src="qrUbicacion==5?`/qr.png`:`/qr-vacio.png`" style="width: 50px; height: 50px" @click="qrUbicacion = 5"/>
                </div>
                <div class="col-4">
                  <q-img :src="qrUbicacion==6?`/qr.png`:`/qr-vacio.png`" style="width: 50px; height: 50px" @click="qrUbicacion = 6"/>
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn color="primary" no-caps flat label="Imprimir" @click="imprimir" icon="mdi-printer"/>
            <q-btn color="primary" no-caps flat label="Cancelar" v-close-popup/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>
