<script setup lang="ts">
import { ref } from 'vue'
import MainProjects from './projects/MainProjects.vue'
import SideProjects from './projects/SideProjects.vue'

const activeTab = ref('main')

const setTab = (tab: string) => {
  activeTab.value = tab
}
</script>

<template>
  <section class="space-y-8">
    <!-- Header -->
    <div>
      <h2 class="text-2xl font-bold text-cyan-400">Projects</h2>
      <p class="text-sm text-gray-500 mt-1">Things I’ve built and worked on</p>
    </div>

    <div class="flex gap-2 w-full justify-center">
      <button
        @click="setTab('main')"
        class="w-full rounded-xl shadow text-gray-200 cursor-pointer"
        :class="
          activeTab === 'main'
            ? 'bg-cyan-800 p-4 text-md font-semibold'
            : 'bg-gray-600 p-4 text-md font-semibold'
        "
      >
        Main
      </button>
      <button
        @click="setTab('side')"
        class="w-full rounded-xl shadow text-gray-200 cursor-pointer"
        :class="
          activeTab === 'side'
            ? 'bg-cyan-800 p-4 text-md font-semibold'
            : 'bg-gray-600 p-4 text-md font-semibold'
        "
      >
        Side
      </button>
    </div>

    <!-- Projects Grid -->
    <div v-if="activeTab == 'main'">
      <MainProjects />
    </div>

    <div v-else-if="activeTab == 'side'">
      <SideProjects />
    </div>
  </section>
</template>
