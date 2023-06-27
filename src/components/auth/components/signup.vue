<script setup>

</script>
<template>
  <div class=" h-screen " >
    <div class="flex flex-col lg:flex-row  justify-center gap-10 p-10 bg-slate-100 text-justify">
    <div
      id="mensaje-login "
      class="flex flex-col h-5/6 lg:w-5/12 bg-white p-10 rounded-lg"
    >
      <span class="font-bold text-2xl">Sign up</span>
      <span class="mt-5 text-slate-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, delectus
        cupiditate unde tempore quia deleniti consectetur ullam voluptates,
        dolor laborum quisquam non nisi, quibusdam velit ad quas. Voluptate,
        adipisci nobis?
      </span>
      <span class="font-black text-lg mt-5">
        Already have an account? 
        <router-link class=" text-purple-500 underline" to="/Login">Click</router-link>
        here to login in!
      </span>
      
    </div>

    <div id="Formulario " class="bg-white rounded-lg  lg:w-5/12  p-10 h-auto">
      <form action="" method="post">
        <div class="sm:col-span-3">
          <label
            for="first-name"
            class="block text-lg font-medium leading-6 text-gray-900"
            >Name</label
          >
          <div class="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              autocomplete="name"
              placeholder="Your full name"
              class="block w-full px-3 py-2 appearance-none rounded-md border border-gray-300 shadow-sm text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="sm:col-span-3 mt-3">
          <label
            for="first-name"
            class="block text-lg font-medium leading-6 text-gray-900"
            >E-mail</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              :autocomplete="false"
              placeholder="ejemplo@gmail.com"
              class="block w-full px-3 py-2 appearance-none rounded-md border border-gray-300 shadow-sm text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="sm:col-span-3 mt-3">
          <label
            for="first-name"
            class="block text-lg font-medium leading-6 text-gray-900"
            >Password</label
          >
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              class="block w-full px-3 py-2 appearance-none rounded-md border border-gray-300 shadow-sm text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="sm:col-span-3 mt-3">
          <label
            for="first-name"
            class="block text-lg font-medium leading-6 text-gray-900"
            >Repeat password</label
          >
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              class="block w-full px-3 py-2 appearance-none rounded-md border border-gray-300 shadow-sm text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="mt-6">
          <button
            type="button"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>
