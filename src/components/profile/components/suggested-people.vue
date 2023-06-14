<script setup>


</script>

<template>
  <div class=" flex flex-col  bg-yellow-300  rounded-lg p-5">
    <span class=" font-bold pb-5" >People you may know </span>
    <div id="card-notification"  class="flex items-center mb-2 " v-for="item in 4" :key="item"  >
      <div id="img" class="w-12 h-12">
        <img src="https://i.pravatar.cc/300?img=70" class="mb-6 rounded-full" />
      </div>
      <div class="ml-3 font-semibold text-center text-sm ">
        <span> Ronaldo CR7</span>
      </div>
      <div class="ml-3">
        <button
          type="button"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Show
        </button>
      </div>
    </div>
  </div>

  <div class=" flex flex-col bg-yellow-300   rounded-lg p-5 mt-5">
    <span class=" font-bold pb-5" >Trends </span>
    <div id="card-notification"  class="flex items-center mb-2 justify-between " v-for="item in 4" :key="item" >
      
      <div class=" flex flex-col ml-3  ">
        <span class="font-semibold text-center text-sm" > #codewithstein</span>
        <span class=" text-xs text-gray-500" > 120 posts</span>
      </div>
      <div class="ml-3">
        <button
          type="button"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Explore
        </button>
      </div>
    </div>
  </div>
</template>
