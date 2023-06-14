<script setup lang="ts">
import colors from 'tailwindcss/colors'

defineProps<{
  error: Object,
}>()

const definedNuxtLink = computed(() => {
  // @ts-expect-error We treat it as an HTML element tag by applying it to buttons
  return defineNuxtLink({}) as keyof HTMLElementTagNameMap
})
</script>
<template>
  <NuxtLayout name="default">
    <div class="mx-auto mt-20 w-11/12 max-w-3xl">
      <h1 class="text-center font-display text-3xl drop-shadow-[0_1rem_2rem_rgba(255,255,255,0.2)]">
        Error
      </h1>
      <RainbowBox class="mt-8 flex flex-col items-center gap-4">
        There was an error accessing that page.
        <NButtonGroup :vertical="true">
          <NButton :text-color="colors.white" :tag="definedNuxtLink" to="/">
            <span>Navigate to homepage</span>
          </NButton>
          <NButton :text-color="colors.white" :tag="definedNuxtLink" to="/blog">
            <span>Read my programming-related blogs</span>
          </NButton>
          <NButton :text-color="colors.white" :tag="definedNuxtLink" to="/contact">
            <span>Send me a message directly</span>
          </NButton>
        </NButtonGroup>
      </RainbowBox>
    </div>
  </NuxtLayout>
</template>
