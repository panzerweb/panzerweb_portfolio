<script lang="ts" setup>
import { VPdfViewer } from '@vue-pdf-viewer/viewer'
import MyCurriculumVitae from '@/assets/My_Curriculum_Vitae.pdf'

defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div
    v-if="open"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6"
    @click.self="emit('close')"
  >
    <div class="flex max-h-[90vh] w-full max-w-4xl flex-col rounded-xl bg-gray-900 p-6 shadow-xl">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold text-white">Curriculum Vitae</h2>

        <button @click="emit('close')" class="text-gray-400 hover:text-white">✕</button>
      </div>

      <div class="mt-4 h-[70vh] w-full overflow-hidden">
        <VPdfViewer :src="MyCurriculumVitae" class="h-full w-full" />
      </div>

      <div class="mt-6 flex justify-end">
        <button @click="emit('close')" class="rounded-lg bg-gray-800 px-4 py-2 text-gray-300">
          Close
        </button>
      </div>
    </div>
  </div>
</template>
