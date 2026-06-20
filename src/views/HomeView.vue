<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import Logo from '@/assets/My_logo.png'
import { ref } from 'vue'
import TechStackSection from '@/components/TechStackSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import ExperiencesSection from '@/components/ExperiencesSection.vue'
import AchievementsSection from '@/components/AchievementsSection.vue'
import OtherProjectsSection from '@/components/OtherProjectsSection.vue'

const activeTab = ref('about')

const setTab = (tabId: string) => {
  const targetTab = mainTabs.find((tab) => tab.tabId === tabId)

  if (!targetTab) {
    console.error(`Tab ${tabId} is not found`)
  }

  activeTab.value = tabId
}

interface TabItem {
  id: number
  tabId: string
  name: string
}

const mainTabs: TabItem[] = [
  {
    id: 0,
    tabId: 'about',
    name: 'About',
  },
  {
    id: 1,
    tabId: 'tech',
    name: 'Tech Stack',
  },
  {
    id: 2,
    tabId: 'coding',
    name: 'Coding Project',
  },
  {
    id: 3,
    tabId: 'experiences',
    name: 'Experiences',
  },
  {
    id: 4,
    tabId: 'non-coding',
    name: 'Other Projects',
  },
  {
    id: 5,
    tabId: 'achievements',
    name: 'Achievements',
  },
]
</script>

<template>
  <section class="container mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-[400px_1fr]">
      <!-- LEFT SIDE (sticky group) -->
      <div class="flex flex-col lg:sticky lg:top-0 lg:h-screen">
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
      <div class="py-10 px-4">
        <!-- DROPDOWN VERSION IF SMALLER DEVICE -->
        <div class="lg:hidden">
          <label
            for="projects"
            class="block text-cyan-400 font-semibold text-sm tracking-wide mb-2"
          >
            Select Section
          </label>

          <div class="relative">
            <select
              v-model="activeTab"
              name="projects"
              id="projects"
              class="w-full appearance-none bg-gray-900 text-cyan-300 font-semibold px-4 py-3 pr-10 border border-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
            >
              <option
                v-for="tab in mainTabs"
                :key="tab.id"
                :value="tab.tabId"
                class="bg-gray-900 text-white"
              >
                {{ tab.name }}
              </option>
            </select>

            <!-- Custom dropdown arrow -->
            <div
              class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-cyan-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- Tabs -->
        <div class="hidden lg:flex gap-4 border-b pb-2">
          <div v-for="tab in mainTabs" :key="tab.id">
            <button
              @click="setTab(tab.tabId)"
              class="cursor-pointer"
              :class="
                activeTab === tab.tabId
                  ? 'font-bold border-b-2 border-cyan-400 text-cyan-400'
                  : 'text-gray-400'
              "
            >
              {{ tab.name }}
            </button>
          </div>
        </div>

        <!-- Content -->
        <div class="mt-6">
          <div v-if="activeTab === 'about'">
            <AboutSection />
          </div>

          <div v-else-if="activeTab === 'tech'">
            <TechStackSection />
          </div>

          <div v-else-if="activeTab === 'coding'">
            <ProjectSection />
          </div>

          <div v-else-if="activeTab === 'experiences'">
            <ExperiencesSection />
          </div>
          <div v-else-if="activeTab === 'non-coding'">
            <OtherProjectsSection />
          </div>
          <div v-else-if="activeTab === 'achievements'">
            <AchievementsSection />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
