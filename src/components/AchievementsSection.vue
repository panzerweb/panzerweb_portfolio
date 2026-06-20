<script setup lang="ts">
import { ref, computed } from 'vue'
import { achievements } from '@/data/achievementsData'
import { AchievementType, type Achievement } from '@/types/types'

const selectedType = ref<AchievementType | 'all'>('all')
const selectedAchievement = ref<Achievement | null>(null)

const filteredAchievements = computed(() => {
  if (selectedType.value === 'all') return achievements
  return achievements.filter((a) => a.achievementType === selectedType.value)
})

const typeLabel = (type: AchievementType) => {
  switch (type) {
    case AchievementType.certificate:
      return 'Certificate'
    case AchievementType.event:
      return 'Event'
    case AchievementType.award:
      return 'Award'
  }
}
</script>

<template>
  <section class="space-y-6">
    <!-- HEADER -->
    <div>
      <h2 class="text-3xl md:text-4xl font-bold text-cyan-400">Achievements</h2>
      <p class="text-gray-400 text-sm">A collection of certifications, events, and milestones.</p>
    </div>

    <!-- FILTERS -->
    <div class="flex flex-wrap gap-2">
      <button
        class="px-3 py-1 rounded-full border text-sm"
        :class="
          selectedType === 'all'
            ? 'bg-cyan-500 text-black font-semibold'
            : 'text-gray-300 border-gray-700'
        "
        @click="selectedType = 'all'"
      >
        All
      </button>

      <button
        v-for="type in Object.values(AchievementType).filter((v) => typeof v === 'number')"
        :key="type"
        class="px-3 py-1 rounded-full border text-sm"
        :class="
          selectedType === type
            ? 'bg-cyan-500 text-black font-semibold'
            : 'text-gray-300 border-gray-700'
        "
        @click="selectedType = type as AchievementType"
      >
        {{ typeLabel(type as AchievementType) }}
      </button>
    </div>

    <!-- GRID -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="ach in filteredAchievements"
        :key="ach.id"
        class="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500 transition cursor-pointer"
        @click="selectedAchievement = ach"
      >
        <!-- IMAGE -->
        <div class="h-40 overflow-hidden bg-black">
          <img
            :src="ach.images[0]"
            class="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        <!-- CONTENT -->
        <div class="p-4 space-y-2">
          <h3 class="font-semibold text-white line-clamp-2">
            {{ ach.name }}
          </h3>

          <p class="text-xs text-gray-400">{{ ach.date }} • {{ ach.issuer }}</p>

          <p class="text-sm text-gray-300 line-clamp-3">
            {{ ach.description }}
          </p>

          <!-- TAGS -->
          <div class="flex flex-wrap gap-1 mt-2">
            <span
              v-for="tag in ach.tags.slice(0, 3)"
              :key="tag"
              class="text-[10px] px-2 py-0.5 rounded-full bg-gray-800 text-gray-300"
            >
              {{ tag }}
            </span>
          </div>

          <div class="text-xs text-cyan-400 mt-2">
            {{ typeLabel(ach.achievementType) }}
          </div>
        </div>
      </article>
    </div>

    <!-- MODAL -->
    <div
      v-if="selectedAchievement"
      class="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
      @click.self="selectedAchievement = null"
    >
      <div
        class="bg-gray-900 max-w-2xl max-h-2xl w-full rounded-xl overflow-hidden border border-gray-800"
      >
        <!-- IMAGES -->
        <div class="flex overflow-x-auto gap-2 p-3 bg-black">
          <img
            v-for="img in selectedAchievement.images"
            :key="img"
            :src="img"
            class="h-40 rounded object-cover"
          />
        </div>

        <!-- DETAILS -->
        <div class="p-5 space-y-3">
          <h2 class="text-xl font-bold text-cyan-400">
            {{ selectedAchievement.name }}
          </h2>

          <p class="text-gray-300 text-sm">
            {{ selectedAchievement.description }}
          </p>

          <div class="text-xs text-gray-400 space-y-1">
            <p><span class="text-gray-500">Date:</span> {{ selectedAchievement.date }}</p>
            <p v-if="selectedAchievement.issuer">
              <span class="text-gray-500">Issuer:</span> {{ selectedAchievement.issuer }}
            </p>
            <p v-if="selectedAchievement.location">
              <span class="text-gray-500">Location:</span> {{ selectedAchievement.location }}
            </p>
          </div>

          <!-- TAGS -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in selectedAchievement.tags"
              :key="tag"
              class="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
            >
              {{ tag }}
            </span>
          </div>

          <!-- CLOSE -->
          <button class="mt-4 text-sm text-red-400" @click="selectedAchievement = null">
            Close
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
