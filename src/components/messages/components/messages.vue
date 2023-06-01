<template>
  <div class="grid grid-cols-4 gap-4 max-w-7xl mx-auto">
    <div id="main-left" class="col-span-1">
      <div class="p-4 bg-slate-400 border border-red-500 rounded-lg">
        <!-- <h3 class=" mb-6 text-xl ">People </h3> -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                src="https://i.pravatar.cc/300?img=70"
                class="w-[40px] rounded-full"
              />

              <span class="text-xs">
                <strong>Ronaldo CR7</strong>
              </span>
            </div>
            <span class="text-xs text-gray-500"> 18 minutes sago </span>
          </div>
        </div>
      </div>
    </div>

    <div id="main-center" class="col-span-3 space-y-4">
      <div class="bg-yellow-300 border border-gray-400 rounded-lg">
        <div class="flex flex-col flex-grow p-4">
          <div class="flex w-full mt-2 space-x-3 max-w-md ml-auto justify-end">
            <div>
              <div
                class="bg-blue-500 text-white p-3 rounded-l-lg rounded-br-lg"
              >
                <span>Buenos días a todos en este curso</span>
              </div>
              <span class="text-xs text-gray-500 leading-none"> 2 min ago</span>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
              <img
                src="https://i.pravatar.cc/300?img=70"
                class="w-[40px] rounded-full"
              />
            </div>
          </div>

          <!-- lk -->

          <div class="flex w-full mt-2 space-x-3 max-w-md">
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
              <img
                src="https://i.pravatar.cc/300?img=70"
                class="w-[40px] rounded-full"
              />
            </div>

            <div>
              <div
                class="bg-gray-300  p-3 rounded-r-lg rounded-bl-lg"
              >
                <span>Welcome..</span>
              </div>
              <span class="text-xs text-gray-500 leading-none"> 2 min ago</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-purple-200 border border-gray-300 rounded-lg">
        <div class="p-4">
          <textarea
            class="p-4 w-full bg-gray-100 rounded-lg"
            placeholder="What do you want to say?"
          ></textarea>
        </div>
        <div class="p-4">buttom</div>
      </div>
    </div>
  </div>
</template>
