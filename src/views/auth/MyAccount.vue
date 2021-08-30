<template>
  <div class="h-full grid grid-cols-1 lg:grid-cols-2">
    <div class="flex flex-col">
      <div class="flex p-8">
        <div>
          <img class="rounded-lg h-32"
               src="https://ui-avatars.com/api/?name=Alejandro Yarce&background=ffba08&rounded=true&bold=true"
               alt="Avatar image"/>
        </div>
        <div class="ml-8 flex-grow flex items-center">
          <h1 class="font-bold font-lato text-3xl ">Juan Alejandro Yarce Taborda Taborda</h1>
        </div>
      </div>
      <div class="p-8 flex-grow">
        <h2 class="text-2xl font-bold mb-4">Información Personal</h2>

        <div class="flex rounded border-dashed border-4 border-av-50">
          <div class="grid grid-cols-2 p-4 pr-16  gap-4">
            <div class="flex flex-col font-bold gap-2">
              <span>Nombre:</span>
              <span>Teléfono:</span>
              <span>Dirección:</span>
              <span>Email:</span>
            </div>

            <div class="flex flex-col gap-2">
              <span>Daniela</span>
              <span>3206100477</span>
              <span>Cra 40 # 32 D SUR-60</span>
              <span>Juan.YTaborda@AdeU.ued.co</span>
            </div>
          </div>
        </div>

        <div class="p-8 h-48">
          <img class="object-cover" src="/src/assets/illustrations/myProfile.svg" alt="My profile illustration">
        </div>
      </div>
    </div>
    <div class="bg-av-200">
      4
    </div>
  </div>
</template>

<script>

export default {
  setup() {

  }
}
</script>