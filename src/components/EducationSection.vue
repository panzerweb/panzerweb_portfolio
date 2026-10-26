<script setup lang="ts">
import { ref } from 'vue'
import type { EducationalBackground } from '@/types/types'
import { education } from '@/data/educationalData'

// Track which cards have expanded achievements.
const expandedCards = ref<number[]>([])

const levelLabels: Record<string, string> = {
  elementary: 'Elementary',
  junior_high_school: 'Junior High School',
  senior_high_school: 'Senior High School',
  college: 'College',
  postgraduate: 'Postgraduate',
}

function formatLevel(level: string): string {
  return levelLabels[level] ?? level.replace(/_/g, ' ')
}

function formatYears(item: EducationalBackground): string {
  const start = item.startYear ?? 'Unknown'

  if (item.isCurrentlyEnrolled) {
    return `${start} — Present`
  }

  if (item.endYear != null) {
    return `${start} — ${item.endYear}`
  }

  return String(start)
}

function isExpanded(index: number): boolean {
  return expandedCards.value.includes(index)
}

function toggleAchievements(index: number): void {
  if (isExpanded(index)) {
    expandedCards.value = expandedCards.value.filter((cardIndex) => cardIndex !== index)
  } else {
    expandedCards.value = [...expandedCards.value, index]
  }
}
</script>

<template>
  <section id="education" class="px-4 py-4 text-slate-100 md:px-8 md:py-4">
    <div class="mx-auto max-w-6xl">
      <!-- Section Header -->
      <header class="mb-10">
        <span class="text-xs font-bold uppercase tracking-[0.16em] text-teal-400">
          My Academic Journey
        </span>

        <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
          Education<span class="text-teal-400">.</span>
        </h2>

        <p class="mt-3 text-sm text-slate-400 md:text-base">
          A journey of learning, growth, and achievements.
        </p>
      </header>

      <!-- Responsive 2x2 Grid -->
      <div class="grid grid-cols-1 items-start gap-5 md:grid-cols-2">
        <!-- Education Card -->
        <article
          v-for="(item, index) in education"
          :key="`${item.schoolName}-${item.educationalLevel}-${item.startYear}`"
          class="group flex gap-4 rounded-2xl border border-slate-700/70 bg-[#102338] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-950/20 motion-reduce:transform-none motion-reduce:transition-none sm:p-6"
        >
          <!-- Left Icon and Vertical Rail -->
          <div class="flex shrink-0 flex-col items-center gap-3">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 transition-colors duration-300 group-hover:bg-teal-500/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="m2 10 10-5 10 5-10 5-10-5Z" />
                <path d="M6 12v5c3.5 3 8.5 3 12 0v-5" />
                <path d="M22 10v6" />
              </svg>
            </div>

            <span
              class="min-h-8 w-px flex-1 bg-gradient-to-b from-teal-500/50 to-transparent"
              aria-hidden="true"
            ></span>
          </div>

          <!-- Card Details -->
          <div class="min-w-0 flex-1">
            <!-- Educational Level and Year -->
            <div class="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span class="text-[11px] font-bold uppercase tracking-wider text-teal-400">
                {{ formatLevel(item.educationalLevel) }}
              </span>

              <span class="text-xs text-slate-400">
                {{ formatYears(item) }}
              </span>
            </div>

            <!-- School Name -->
            <h3 class="break-words text-lg font-semibold leading-snug text-white">
              {{ item.schoolName }}
            </h3>

            <!-- Degree / Program -->
            <p v-if="item.degreeOrProgram" class="mt-2 text-sm leading-relaxed text-slate-300">
              {{ item.degreeOrProgram }}
            </p>

            <!-- Academic Achievements -->
            <div
              v-if="item.relevantAcademicAchievements?.length"
              class="mt-5 border-t border-slate-700/70 pt-4"
            >
              <!-- Toggle Button -->
              <button
                type="button"
                class="flex w-full cursor-pointer items-center justify-between gap-2 rounded-sm text-left text-sm text-slate-300 transition-colors hover:text-teal-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
                :aria-expanded="isExpanded(index)"
                :aria-controls="`achievements-${index}`"
                @click="toggleAchievements(index)"
              >
                <span class="flex flex-wrap items-center gap-2">
                  Academic Achievements

                  <span
                    class="rounded-md bg-teal-500/10 px-2 py-0.5 text-xs font-medium text-teal-400"
                  >
                    {{ item.relevantAcademicAchievements.length }}
                  </span>
                </span>

                <!-- Chevron -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  class="shrink-0 transition-transform duration-200 motion-reduce:transition-none"
                  :class="{ 'rotate-180': isExpanded(index) }"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <!-- Expandable Content -->
              <Transition
                enter-active-class="transition-all duration-200 ease-out motion-reduce:transition-none"
                enter-from-class="-translate-y-2 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition-all duration-150 ease-in motion-reduce:transition-none"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="-translate-y-2 opacity-0"
              >
                <div v-show="isExpanded(index)" :id="`achievements-${index}`" class="pt-4">
                  <ul class="space-y-4">
                    <li
                      v-for="(achievement, achievementIndex) in item.relevantAcademicAchievements"
                      :key="achievementIndex"
                      class="flex items-start gap-3"
                    >
                      <!-- Achievement Marker -->
                      <span
                        class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400"
                        aria-hidden="true"
                      ></span>

                      <!-- Achievement Details -->
                      <div class="min-w-0">
                        <p class="text-sm leading-relaxed text-slate-200">
                          {{ achievement.title }}
                        </p>

                        <span v-if="achievement.year" class="mt-1 block text-xs text-slate-400">
                          {{ achievement.year }}
                        </span>

                        <p
                          v-if="achievement.description"
                          class="mt-1 text-xs leading-relaxed text-slate-400"
                        >
                          {{ achievement.description }}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Transition>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
