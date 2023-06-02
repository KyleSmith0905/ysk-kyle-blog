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
      :class="'prose prose-zinc prose-headings:text-zinc-300 prose-headings:font-display prose-headings:drop-shadow-[0_1rem_2rem_rgba(255,255,255,0.2)] text-zinc-50 ' + (proseClass ?? '')"
      v-html="$mdRenderer.render(`${block}`)"
    />
  </div>
</template>
