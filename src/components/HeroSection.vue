<script setup lang="ts">
import { userProfileData } from '@/data/userProfileData'
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
      <p class="mt-4 text-sm text-gray-600 leading-relaxed">
        {{ userProfileData.briefDescription }}
      </p>
    </div>
  </aside>
</template>
