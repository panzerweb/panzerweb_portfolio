<script setup lang="ts">
import { userProfileData } from '@/data/userProfileData'
import { ref } from 'vue'
import CurriculumVitaeModal from './modal/CurriculumVitaeModal.vue'

const isModalOpen = ref(false)
</script>

<template>
  <aside class="h-full p-8 flex flex-col justify-between">
    <!-- Top Section -->
    <div>
      <!-- Profile Image -->
      <img
        :src="userProfileData.profile"
        alt="Profile"
        class="w-60 h-60 object-cover rounded-2xl shadow-md"
      />

      <!-- Name -->
      <h1 class="mt-4 text-2xl text-cyan-400 font-bold leading-tight">
        {{ userProfileData.name }}
      </h1>

      <!-- IGN -->
      <p class="text-sm text-gray-500">@{{ userProfileData.ign }}</p>

      <!-- Roles -->
      <div class="mt-3 flex flex-wrap gap-2">
        <span
          v-for="role in userProfileData.role"
          :key="role"
          class="text-xs bg-gray-800 text-gray-400 px-4 py-2 rounded-full"
        >
          {{ role }}
        </span>
      </div>

      <!-- Short Description -->
      <p class="mt-4 text-sm text-gray-500 leading-relaxed">
        {{ userProfileData.briefDescription }}
      </p>

      <div class="flex flex-col mt-2">
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-telephone-fill text-gray-500"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
            />
          </svg>
          <p class="text-sm text-gray-500 leading-relaxed">
            {{ userProfileData.contactNumber }}
          </p>
        </div>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-envelope-fill text-gray-500"
            viewBox="0 0 16 16"
          >
            <path
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"
            />
          </svg>
          <p class="text-sm text-gray-500 leading-relaxed">
            {{ userProfileData.email }}
          </p>
        </div>
      </div>

      <!-- Button for Curriculum Vitae -->
      <button
        class="bg-emerald-700 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded my-4 cursor-pointer"
        @click="isModalOpen = true"
      >
        Curriculum Vitae
      </button>

      <CurriculumVitaeModal :open="isModalOpen" @close="isModalOpen = false">
      </CurriculumVitaeModal>
    </div>
  </aside>
</template>
