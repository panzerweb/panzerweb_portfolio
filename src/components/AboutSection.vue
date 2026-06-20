<script setup lang="ts">
import { userProfileData } from '@/data/userProfileData'
</script>

<template>
  <section class="space-y-6">
    <!-- Header -->
    <div>
      <h2 class="text-3xl md:text-4xl text-cyan-400 font-bold">About Me</h2>
      <p class="text-sm text-gray-400 mt-1">Developer • Designer • Student</p>
    </div>

    <!-- Full Description -->
    <div class="space-y-3">
      <h3 class="text-sm font-semibold text-green-400 uppercase tracking-wide">Background</h3>

      <p class="text-gray-600 leading-relaxed">
        {{ userProfileData.fullDescription }}
      </p>
    </div>

    <!-- Non-Tech Description -->
    <div class="space-y-3">
      <h3 class="text-sm font-semibold text-green-400 uppercase tracking-wide">Beyond Code</h3>

      <p class="text-gray-600 leading-relaxed">
        {{ userProfileData.nonTechDescription }}
      </p>
    </div>

    <!-- Highlight Badges -->
    <div class="flex gap-2 flex-wrap">
      <span class="text-xs bg-black text-white px-2 py-1 rounded-full">VueJS</span>
      <span class="text-xs bg-black text-white px-2 py-1 rounded-full">Flutter</span>
      <span class="text-xs bg-black text-white px-2 py-1 rounded-full">FastAPI</span>
      <span class="text-xs bg-black text-white px-2 py-1 rounded-full">TypeScript</span>
      <span class="text-xs bg-black text-white px-2 py-1 rounded-full">Python</span>
      <span class="text-xs bg-black text-white px-2 py-1 rounded-full">PostgreSQL</span>
    </div>

    <!-- Focus Areas -->
    <div>
      <h3 class="text-sm font-semibold text-green-400 uppercase tracking-wide">Focus Areas</h3>
      <ul class="list-disc ml-5 text-gray-600 text-sm mt-2">
        <li>Frontend Development</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
        <li>System Design & Architecture</li>
      </ul>
    </div>

    <!-- Location Card -->
    <div class="grid grid-cols-2 gap-3 text-sm">
      <div class="p-3 bg-gray-950 rounded-lg">
        <p class="text-gray-400 font-semibold">City</p>
        <p class="font-medium text-gray-600">{{ userProfileData.city }}</p>
      </div>

      <div class="p-3 bg-gray-950 rounded-lg">
        <p class="text-gray-400 font-semibold">Province</p>
        <p class="font-medium text-gray-600">{{ userProfileData.province }}</p>
      </div>

      <div class="p-3 bg-gray-950 rounded-lg">
        <p class="text-gray-400 font-semibold">Region</p>
        <p class="font-medium text-gray-600">{{ userProfileData.region }}</p>
      </div>

      <div class="p-3 bg-gray-950 rounded-lg">
        <p class="text-gray-400 font-semibold">Barangay</p>
        <p class="font-medium text-gray-600">{{ userProfileData.barangay }}</p>
      </div>
    </div>
  </section>
</template>
