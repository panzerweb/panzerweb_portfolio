<script setup lang="ts">
import { ref } from 'vue'
import { otherProjects } from '@/data/otherProjectsData'
import { OtherProjectType } from '@/types/types'

// Set the initial active project
const activeProject = ref(otherProjects[0])

// Determine colors based on the enum type
const typeColor = (type: OtherProjectType) => {
  switch (type) {
    case OtherProjectType.media:
      return 'text-red-400 bg-red-500/10 border-red-500/20'
    case OtherProjectType.academic:
      return 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    case OtherProjectType.creative:
      return 'text-purple-400 bg-purple-500/10 border-purple-500/20'
    default:
      return 'text-gray-400 bg-gray-500/10 border-gray-500/20'
  }
}

// Extract the string name from the numeric enum
const getCategoryName = (type: OtherProjectType): string => {
  return OtherProjectType[type]
}
</script>

<template>
  <section class="space-y-10 font-sans">
    <div>
      <h2 class="text-3xl md:text-4xl font-bold text-cyan-400">Other Projects</h2>
      <p class="text-gray-400 mt-2">
        Creative works, short films, and academic productions outside coding.
      </p>
    </div>

    <div class="relative h-128 rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
      <img
        :src="activeProject?.imageUrl"
        :alt="activeProject?.name"
        class="absolute inset-0 w-full h-full object-cover transition-all duration-500"
      />

      <div class="absolute inset-0 bg-linear-to-r from-[#141414] via-[#141414]/80 to-transparent" />

      <div class="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl space-y-4 z-10">
        <span class="text-xs tracking-widest text-cyan-400 uppercase font-bold drop-shadow-md">
          Featured Project
        </span>

        <h3 class="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          {{ activeProject?.name }}
        </h3>

        <p class="text-gray-300 leading-relaxed drop-shadow-md">
          {{ activeProject?.description }}
        </p>

        <div class="flex flex-wrap gap-2 pt-2">
          <span
            v-for="cat in activeProject?.category"
            :key="cat"
            class="text-[10px] px-3 py-1 rounded-full border uppercase tracking-wider font-semibold"
            :class="typeColor(cat)"
          >
            {{ getCategoryName(cat) }}
          </span>
        </div>

        <p class="text-sm text-gray-400 pt-2 font-semibold">
          Published {{ activeProject?.publishedAt }}
        </p>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold text-white mb-4">More Projects</h3>

      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <button
          v-for="project in otherProjects"
          :key="project.id"
          @click="activeProject = project"
          class="relative h-36 rounded-xl overflow-hidden border transition-all duration-300 group focus:outline-none"
          :class="
            activeProject?.id === project.id
              ? 'border-cyan-400 scale-[1.02] shadow-lg shadow-cyan-500/20'
              : 'border-gray-800 hover:border-gray-500 hover:scale-[1.02]'
          "
        >
          <!-- IMAGE -->
          <img
            :src="project.imageUrl"
            :alt="project.name"
            class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

          <!-- OVERLAY -->
          <div
            class="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-300"
          />

          <!-- TEXT -->
          <div class="absolute bottom-2 left-3 right-3">
            <p class="text-white text-sm font-bold truncate">
              {{ project.name }}
            </p>

            <p class="text-[10px] text-gray-300">
              {{ project.publishedAt }}
            </p>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>
