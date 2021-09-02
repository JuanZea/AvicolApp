<template>
  <div class="bg-img-login">
    <div class="container mx-auto flex flex-col min-h-screen">
      <div class="bg-av-100 bg-opacity-20 flex-grow md:flex md:items-center">
        <div class="relative md:flex">
          <div class="md:hidden flex justify-center">
            <div class="flex bg-av-50 rounded-b-full shadow-md py-2 px-12 items-center gap-5">
              <span class="font-lobster text-5xl">AvicolApp</span>
              <img class="h-20" src="/src/assets/logos/avicolapp-icon-dark.svg" alt="AvicolApp logo">
            </div>
          </div>
        </div>

        <div class="relative w-full grid grid-cols-1 md:grid-cols-2 py-8">
          <div class="hidden md:flex absolute top-10 bg-av-50 rounded-r-full shadow-md py-2 pl-12 pr-4 justify-end items-center gap-5">
            <span class="font-lobster text-3xl">AvicolApp</span>
            <img class="h-16" src="/src/assets/logos/avicolapp-icon-dark.svg" alt="AvicolApp logo">
          </div>

          <div class="hidden md:flex justify-center bg-av-50 mt-10 rounded-r-full">
            <div class="w-64 self-end mr-6">
              <img src="/src/assets/illustrations/Illustration-login.svg">
            </div>
          </div>

          <div class="flex-grow">
            <login-form/>
          </div>
        </div>
      </div>
      <div class="bg-av-100 bg-opacity-30 grid gap-6 px-4 py-6 items-center md:py-20 md:grid-cols-3 xl:gap-12 xl:px-12">
        <info-card class="h-full" color="bg-av-50 bg-opacity-70" icon="file-invoice" title="GESTIÓN" desc="Con AvicolApp queremos ofrecerte comodidad a la hora de gestionar tus actividades."/>
        <info-card class="h-full" color="bg-av-50 bg-opacity-70" icon="hand-holding-heart" title="SEGURIDAD" desc="Tus gallinas van a estar más seguras con la creación, actualización y eliminación de galpones, asentamientos y lotes."/>
        <info-card class="h-full" color="bg-av-50 bg-opacity-70" icon="egg" title="EFICIENCIA" desc="Garantizamos efectividad en el manejo de los datos para tener información actualizada y pertinente."/>

        <div class="flex justify-center items-center md:hidden">
          <span class="font-bold font-lobster text-2xl mx-6">Servisoft</span>
          <img src="/src/assets/illustrations/Illustration-login.svg" class="w-1/2">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../../components/forms/LoginForm.vue";
import InfoCard from "../../components/InfoCard.vue";

export default {
  components: {InfoCard, LoginForm}
}
</script>