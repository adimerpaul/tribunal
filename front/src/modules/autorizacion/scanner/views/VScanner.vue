<script setup lang="ts">

</script>
<template>
  <div>
    <div class="row">
      <div class="col-4 text-center">
        <q-btn color="primary" outline label="Datos generales" no-caps size="12px" icon="mdi-file-document-outline"/>
      </div>
      <div class="col-4 text-center">
        <q-btn color="primary" outline label="Sujeto Procesales" no-caps size="12px" icon="mdi-account-group-outline"/>
      </div>
      <div class="col-4 text-center">
        <q-btn color="primary" outline label="Digitialización" no-caps size="12px" icon="mdi-scanner"/>
      </div>
      <div class="col-12">
        <div class="text-primary text-bold">Adjuntar Memorial - Otros Documentos</div>
      </div>
      <div class="col-6">
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
      <div class="col-6">
        <q-card>
          <q-card-section>
            <div class="row">
              <div class="col-12 text-primary text-bold">Datos Documentos</div>
              <div class="col-4">
                <q-input outlined label="Descripcion" v-model="descripcion"/>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>