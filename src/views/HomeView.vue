<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import Logo from '@/assets/My_logo.png'
import { ref } from 'vue'
import TechStackSection from '@/components/TechStackSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'

const activeTab = ref('about')

const setTab = (tab: string) => {
  activeTab.value = tab
}
</script>

<template>
  <section class="container mx-auto">
    <div class="grid grid-cols-[400px_1fr] gap-10 items-start">
      <!-- LEFT SIDE (sticky group) -->
      <div class="sticky top-0 h-screen flex flex-col">
        <!-- NAVBAR INSIDE LEFT COLUMN -->
        <header class="px-6 py-6 w-full">
          <nav class="flex justify-between items-center">
            <!-- Logo -->
            <img :src="Logo" width="50" />

            <!-- Github Link -->
            <a
              href="https://github.com/panzerweb"
              target="_blank"
              class="text-gray-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                />
              </svg>
            </a>
          </nav>
        </header>

        <!-- HERO SECTION -->
        <HeroSection class="flex-1 overflow-hidden" />
      </div>

      <!-- RIGHT SIDE -->
      <div class="py-10">
        <!-- Tabs -->
        <div class="flex gap-4 border-b pb-2">
          <button
            @click="setTab('about')"
            :class="
              activeTab === 'about'
                ? 'font-bold border-b-2 border-cyan-400 text-cyan-400'
                : 'text-gray-400'
            "
          >
            About
          </button>

          <button
            @click="setTab('tech')"
            :class="
              activeTab === 'tech'
                ? 'font-bold border-b-2 border-cyan-400 text-cyan-400'
                : 'text-gray-400'
            "
          >
            Tech Stack
          </button>

          <button
            @click="setTab('projects')"
            :class="
              activeTab === 'projects'
                ? 'font-bold border-b-2 border-cyan-400 text-cyan-400'
                : 'text-gray-400'
            "
          >
            Projects
          </button>

          <button
            @click="setTab('experience')"
            :class="
              activeTab === 'experience'
                ? 'font-bold border-b-2 border-cyan-400 text-cyan-400'
                : 'text-gray-400'
            "
          >
            Experiences
          </button>
        </div>

        <!-- Content -->
        <div class="mt-6">
          <div v-if="activeTab === 'about'">
            <AboutSection />
          </div>

          <div v-else-if="activeTab === 'tech'">
            <TechStackSection />
          </div>

          <div v-else-if="activeTab === 'projects'">
            <ProjectSection />
          </div>

          <div v-else-if="activeTab === 'experience'">
            <p class="text-gray-400">Gina code pa nako po ang experience</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
