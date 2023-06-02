<script setup lang="ts">
import colors from 'tailwindcss/colors'
import { darkTheme, GlobalThemeOverrides } from 'naive-ui'
import SiteLogo from '~/assets/icons/logo.svg'

const definedNuxtLink = computed(() => {
  // @ts-expect-error We treat it as an HTML element tag by applying it to buttons
  return defineNuxtLink({}) as keyof HTMLElementTagNameMap
})

const themeOverrides: GlobalThemeOverrides = {
  common: {
    borderRadius: '0.75rem'
  }
}
</script>
<template>
  <NConfigProvider :theme="darkTheme" :theme-overrides="themeOverrides" class="flex h-full flex-col">
    <header class="fixed h-12 w-full font-display">
      <div class="absolute -top-12 -z-10 -ml-16 h-24 w-[calc(100%_+_8rem)] bg-black blur-md" />
      <div class="absolute -top-12 -z-10 -ml-16 h-24 w-[calc(100%_+_8rem)] bg-rainbow-linear-gradient-r blur-3xl" />
      <div class="mx-auto flex h-full w-11/12 max-w-4xl items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2">
          <SiteLogo class="h-8 w-8" />
          <h1 class="text-2xl">
            YSK Kyle Blog
          </h1>
        </NuxtLink>
        <NButtonGroup>
          <NButton :text-color="colors.white" :secondary="true" :tag="definedNuxtLink" to="/">
            <span>Home</span>
          </NButton>
          <NButton :text-color="colors.white" :secondary="true" :tag="definedNuxtLink" to="/blog">
            <span>Blog</span>
          </NButton>
          <NButton :text-color="colors.white" :secondary="true" :tag="definedNuxtLink" to="/contact">
            <span>contact Me</span>
          </NButton>
        </NButtonGroup>
      </div>
    </header>
    <main class="grow pt-6">
      <slot />
    </main>
    <footer class="relative block h-12 w-full text-center">
      <NuxtLink to="/contact" class="text-center font-display text-lg">
        Contact Me
      </NuxtLink>
    </footer>
  </NConfigProvider>
</template>