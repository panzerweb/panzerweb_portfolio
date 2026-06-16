<script setup lang="ts">
import { myExperience } from '@/data/experiencesData'
import { WorkType } from '@/types/types'

const getWorkTypeData = (type: WorkType) => {
  switch (type) {
    case WorkType.remote:
      return {
        text: 'Remote',
        class: 'text-green-400 border-green-400',
      }

    case WorkType.hybrid:
      return {
        text: 'Hybrid',
        class: 'text-cyan-400 border-cyan-400',
      }

    case WorkType.onsite:
      return {
        text: 'Onsite',
        class: 'text-purple-400 border-purple-400',
      }

    default:
      return {
        text: 'Unknown',
        class: 'text-gray-400 border-gray-400',
      }
  }
}
</script>

<template>
  <section class="space-y-8">
    <!-- Header -->
    <div>
      <h2 class="text-2xl font-bold text-cyan-400">Experience</h2>

      <p class="text-sm text-gray-500 mt-1">My professional and academic journey.</p>
    </div>

    <!-- Timeline -->
    <div class="relative border-l border-gray-800 ml-3">
      <article
        v-for="experience in myExperience"
        :key="experience.title"
        class="relative ml-8 mb-10"
      >
        <!-- Timeline Dot -->
        <div class="absolute -left-9.5 top-2 h-4 w-4 rounded-full bg-cyan-400" />

        <!-- Experience Card -->
        <div
          class="rounded-xl border border-gray-800 bg-gray-900/40 p-5 space-y-4 hover:border-cyan-500 transition-colors"
        >
          <!-- Title + Badge -->
          <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
            <div>
              <h3 class="text-lg font-semibold text-gray-200">
                {{ experience.title }}
              </h3>

              <p class="text-gray-400 text-sm">
                {{ experience.location }}
              </p>
            </div>

            <span
              class="text-xs px-2 py-1 rounded-full border w-fit"
              :class="getWorkTypeData(experience.type).class"
            >
              {{ getWorkTypeData(experience.type).text }}
            </span>
          </div>

          <!-- Date -->
          <p class="text-sm text-cyan-400">
            {{ experience.dateRange }}
          </p>

          <!-- Address -->
          <p class="text-xs text-gray-500">
            {{ experience.province }}, {{ experience.region }},
            {{ experience.country }}
          </p>

          <!-- Description -->
          <p class="text-sm text-gray-400 leading-relaxed">
            {{ experience.description }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
```
