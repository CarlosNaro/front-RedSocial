<script setup>
import profil from "./components/profil.vue";
import personalStatus from "./components/personalStatus.vue";
import suggestedPeople from "./components/suggested-people.vue";
import menuNotifications from "./components/menuNotifications.vue";
</script>
<template>
  <!-- <div class=" grid grid-cols-12  gap-8 bg-red-700 " >
    <div class=" col-span-3 lg:col-span-2    bg-green-100">
        <profil/>
    </div>
    <div class="  col-span-6 lg:col-span-8 bg-green-200">
        columna2
    </div>
    <div class="  col-span-3 lg:col-span-2 bg-green-300">
        columna3
    </div>

 </div> -->

  <!-- <div class="flex bg-purple-300 gap-16 ">
  <div class="flex-none w-1/6  bg-yellow-200">
    <profil/>
  </div>
  <div class="grow bg-orange-300">
    <personalStatus/>
  </div>
  <div class="flex-none w-1/6  bg-red-200 ">
    <profil/>
  </div>
</div> -->
  

<div class="flex p-6">
    <div class="flex-none"> <profil /> </div>
    <div class="grow"> 
        <personalStatus />
        <menuNotifications/>
     </div>
    <div class="flex-none">
      <suggestedPeople />
    </div>

  </div>
  <!-- <personalStatus />
  <profil /> -->
  <!-- <suggested_people /> -->

  
</template>
