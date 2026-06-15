<script setup lang="ts">
import { currentProjects } from '@/data/projectsData'
import { ProjectType } from '@/types/types'

const getCategoryData = (type: ProjectType) => {
  switch (type) {
    case ProjectType.main:
      return {
        class: 'text-cyan-400 border-cyan-400',
        text: 'Main',
      }
    case ProjectType.side:
      return {
        class: 'text-purple-400 border-purple-400',
        text: 'Side',
      }
    default:
      return {
        class: 'text-gray-400 border-gray-400',
        text: 'Default',
      }
  }
}
</script>

<template>
  <section class="space-y-8">
    <!-- Header -->
    <div>
      <h2 class="text-2xl font-bold text-cyan-400">Projects</h2>
      <p class="text-sm text-gray-500 mt-1">Things I’ve built and worked on</p>
    </div>

    <!-- Projects Grid -->
    <div class="grid gap-6">
      <article
        v-for="project in currentProjects"
        :key="project.id"
        class="border border-gray-800 rounded-xl overflow-hidden bg-gray-900/40"
      >
        <!-- Cover Image Placeholder -->
        <div class="h-40 bg-gray-800 flex items-center justify-center">
          <span class="text-gray-500 text-sm"> No Image Available </span>
        </div>

        <!-- Content -->
        <div class="p-5 space-y-3">
          <!-- Title + Category -->
          <div class="flex justify-between items-start gap-3">
            <h3 class="text-lg text-gray-200 font-semibold">
              {{ project.name }}
            </h3>

            <span
              class="text-xs px-2 py-1 rounded-full border"
              :class="getCategoryData(project.category).class"
            >
              {{ getCategoryData(project.category).text }}
            </span>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-400 leading-relaxed">
            {{ project.description }}
          </p>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.techstack"
              :key="tech.id"
              class="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full"
            >
              {{ tech.name }}
            </span>
          </div>

          <!-- Links -->
          <div class="flex gap-3 pt-2">
            <a
              v-if="project.githubRepo"
              :href="project.githubRepo"
              target="_blank"
              class="text-sm text-gray-300 hover:text-white underline"
            >
              GitHub
            </a>

            <span v-if="project.isDeployed" class="text-sm text-green-400"> Live ✓ </span>

            <span v-else class="text-sm text-gray-500"> Not Deployed </span>
          </div>

          <!-- Year -->
          <p class="text-xs text-gray-500">
            {{ project.publishedAt }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
