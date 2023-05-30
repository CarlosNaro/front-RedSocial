<template>
  <div class=" flex justify-center mb-2 " >
    <div class=" p-5 w-4/5 bg-red-400 rounded-lg ">
    <div>
      <textarea
        id="about"
        name="about"
        rows="3"
        class="block w-full px-3 py-2 appearance-none rounded-md border border-gray-300 shadow-sm text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      ></textarea>
    </div>
    <div class="mt-6 flex justify-between">
      <div>
        <button
          type="button"
          class="rounded-md bg-slate-700 px-4 py-5 text-xl font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Attach image
        </button>
      </div>
      <div>
        <button
          type="button"
          class="rounded-md bg-indigo-600 px-4 py-3 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Post
        </button>
      </div>
    </div>
  </div>
  </div>
</template>
