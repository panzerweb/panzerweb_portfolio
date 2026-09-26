<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col">
    <h2 class="text-base font-medium text-zinc-200">
      {{ title }}
    </h2>

    <p class="mt-1.5 max-w-sm text-sm leading-6 text-zinc-500">
      {{ message }}
    </p>
  </div>
</template>
