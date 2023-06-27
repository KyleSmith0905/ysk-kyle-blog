<script setup lang="ts">
defineProps<{
  block: string,
  proseClass?: string,
}>()
</script>

<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <div
      :class="'prose prose-headings:font-display prose-headings:drop-shadow-[0_1rem_2rem_rgba(255,255,255,0.2)] prose-invert prose-img:rounded-md prose-img:max-h-96 prose-img:mx-auto max-w-full' + (proseClass ?? '')"
      v-html="$mdRenderer.render(`${block}`)"
    />
  </div>
</template>
