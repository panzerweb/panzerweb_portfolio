<script setup lang="ts">
import { computed } from 'vue'
import { currentTechStack } from '@/data/userProfileData'
import { TechCategory } from '@/types/types'

const frontend = computed(() =>
  currentTechStack.filter((t) => t.category === TechCategory.frontend),
)

const backend = computed(() => currentTechStack.filter((t) => t.category === TechCategory.backend))

const tools = computed(() => currentTechStack.filter((t) => t.category === TechCategory.tools))

const multimedia = computed(() =>
  currentTechStack.filter((t) => t.category === TechCategory.multimedia),
)

const ml = computed(() =>
  currentTechStack.filter((t) => t.category === TechCategory.machineLearning),
)
</script>

<template>
  <section class="space-y-10">
    <!-- Header -->
    <div>
      <h2 class="text-3xl md:text-4xl font-bold text-cyan-400">Tech Stack</h2>
      <p class="text-sm text-gray-500 mt-1">Technologies I use to build apps and systems</p>
    </div>

    <!-- Frontend -->
    <div>
      <h3 class="text-sm font-semibold text-cyan-400 mb-3">Frontend</h3>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div
          v-for="tech in frontend"
          :key="tech.id"
          class="p-3 rounded-xl bg-gray-900 border border-cyan-800 text-cyan-600 transition-all duration-200 cursor-default hover:-translate-y-1 hover:scale-[1.03] hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]"
        >
          {{ tech.name }}
        </div>
      </div>
    </div>

    <!-- Backend -->
    <div>
      <h3 class="text-sm font-semibold text-green-400 mb-3">Backend & Database</h3>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div
          v-for="tech in backend"
          :key="tech.id"
          class="p-3 rounded-xl bg-gray-900 border border-green-800 text-green-600 transition-all duration-200 cursor-default hover:-translate-y-1 hover:scale-[1.03] hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.25)]"
        >
          {{ tech.name }}
        </div>
      </div>
    </div>

    <!-- Tools -->
    <div>
      <h3 class="text-sm font-semibold text-purple-400 mb-3">Tools</h3>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div
          v-for="tech in tools"
          :key="tech.id"
          class="p-3 rounded-xl bg-gray-900 border border-purple-800 text-purple-600 transition-all duration-200 cursor-default hover:-translate-y-1 hover:scale-[1.03] hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]"
        >
          {{ tech.name }}
        </div>
      </div>
    </div>

    <!-- Multimedia -->
    <div>
      <h3 class="text-sm font-semibold text-pink-400 mb-3">Multimedia</h3>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div
          v-for="tech in multimedia"
          :key="tech.id"
          class="p-3 rounded-xl bg-gray-900 border border-pink-800 text-pink-600 transition-all duration-200 cursor-default hover:-translate-y-1 hover:scale-[1.03] hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.25)]"
        >
          {{ tech.name }}
        </div>
      </div>
    </div>

    <!-- Machine Learning -->
    <div>
      <h3 class="text-sm font-semibold text-yellow-400 mb-3">Machine Learning</h3>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div
          v-for="tech in ml"
          :key="tech.id"
          class="p-3 rounded-xl bg-gray-900 border border-yellow-800 text-yellow-600 transition-all duration-200 cursor-default hover:-translate-y-1 hover:scale-[1.03] hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.25)]"
        >
          {{ tech.name }}
        </div>
      </div>
    </div>
  </section>
</template>
