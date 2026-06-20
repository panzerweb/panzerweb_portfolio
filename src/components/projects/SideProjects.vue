<script setup lang="ts">
import { currentProjects } from '@/data/projectsData'
import { ProjectType } from '@/types/types'
import { getCategoryData } from '@/utils/getCategoryData'

const sideProjects = currentProjects.filter((project) => project.category == ProjectType.side)
</script>

<template>
  <div class="grid gap-6">
    <article
      v-for="project in sideProjects"
      :key="project.id"
      class="border border-gray-800 rounded-xl overflow-hidden bg-gray-900/40"
    >
      <!-- Cover Image Placeholder -->
      <div class="aspect-video overflow-hidden rounded-t-xl bg-gray-800">
        <img :src="project.coverFile" :alt="project.name" class="w-full h-full object-cover" />
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
</template>
