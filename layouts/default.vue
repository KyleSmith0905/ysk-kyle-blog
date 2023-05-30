<script setup>
import colors from 'tailwindcss/colors'
import { darkTheme } from 'naive-ui'
import SiteLogo from '~/assets/icons/logo.svg'
</script>
<template>
  <NConfigProvider :theme="darkTheme" class="flex h-full flex-col">
    <header class="fixed h-12 w-full font-display">
      <div class="absolute -top-12 -z-10 -ml-16 h-24 w-[calc(100%_+_8rem)] bg-black blur-md" />
      <div class="absolute -top-12 -z-10 -ml-16 h-24 w-[calc(100%_+_8rem)] bg-rainbow-gradient-r blur-3xl" />
      <div class="mx-auto flex h-full w-11/12 max-w-4xl items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2">
          <SiteLogo class="h-8 w-8" />
          <h1 class="text-2xl">
            YSK Kyle Blog
          </h1>
        </NuxtLink>
        <NButtonGroup>
          <NButton :text-color="colors.white">
            <span>Home</span>
          </NButton>
          <NButton :text-color="colors.white">
            <span>Blog</span>
          </NButton>
          <NButton :text-color="colors.white">
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
