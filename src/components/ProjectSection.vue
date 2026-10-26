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
  <section class="space-y-6 px-4 py-4 text-slate-100 md:px-8 md:py-4">
    <!-- HEADER -->
    <header class="mb-10">
      <span class="text-xs font-bold uppercase tracking-[0.16em] text-teal-400">
        What I built
      </span>

      <h2 class="mt-3 text-3xl text-slate-100 font-bold tracking-tight md:text-5xl">
        Coding Projects<span class="text-teal-400">.</span>
      </h2>

      <p class="mt-3 text-sm text-slate-400 md:text-base">Things I've built and worked on.</p>
    </header>

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
