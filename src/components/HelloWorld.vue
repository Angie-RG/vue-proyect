<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <nav
    class="bg-sky-700 text-white w-max min-h-[400px] h-screen rounded-r-xl flex items-center"
  >
    <ul class="px-12">
      <li class="link-parent" data-dropdown>
        <a href="#" class="flex grap-3 py-4">
          <Icon
            icon="heroicons:magnifying-glass-solid"
            :inline="true"
            class="inline-block mr-1"
          />
          Inicio
        </a>
      </li>

      <li class="link-parent items-center">
        <a href="#" class="flex grap-3 py-4">
          <Icon
            icon="heroicons:magnifying-glass-solid"
            :inline="true"
            class="inline-block mr-1"
          />
          Servicios
          <Icon
            data-row
            icon="heroicons:arrow-right-circle-16-solid"
            :inline="true"
            class="inline-block ml-3 transition-transform"
          />
        </a>
        <ul class="link-child">
          <li class="p-4">
            <a href="#">Enlace 1</a>
          </li>
          <li class="p-4">
            <a href="#">Enlace 2</a>
          </li>
          <li class="p-4">
            <a href="#">Enlace 3</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
