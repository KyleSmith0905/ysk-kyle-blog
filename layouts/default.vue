<script setup lang="ts">
import colors from 'tailwindcss/colors'
import { darkTheme, GlobalThemeOverrides } from 'naive-ui'
import SiteLogo from '~/assets/icons/logo.svg'

const drawerActive = ref(false)

const definedNuxtLink = computed(() => {
  // @ts-expect-error We treat it as an HTML element tag by applying it to buttons
  return defineNuxtLink({}) as keyof HTMLElementTagNameMap
})

const themeOverrides: GlobalThemeOverrides = {
  common: {
    borderRadius: '0.75rem',
    modalColor: 'rgba(0, 0, 0, 0.8)'
  }
}

const menuToggle = () => {
  drawerActive.value = !drawerActive.value
}

const { width } = useWindowSize()
</script>
<template>
  <NConfigProvider :theme="darkTheme" :theme-overrides="themeOverrides" class="flex min-h-full flex-col">
    <NMessageProvider>
      <NScrollbar class="h-screen" trigger="none">
        <NDrawer v-model:show="drawerActive" :width="width">
          <NDrawerContent title="Navigation" class="backdrop-blur-md" :closable="true">
            <div class="flex flex-col gap-1">
              <NButton :text-color="colors.white" :secondary="true" :tag="definedNuxtLink" to="/" class="justify-start">
                <span>Home</span>
              </NButton>
              <NButton :text-color="colors.white" :secondary="true" :tag="definedNuxtLink" to="/blog" class="justify-start">
                <span>Blog</span>
              </NButton>
              <NButton :text-color="colors.white" :secondary="true" :tag="definedNuxtLink" to="/contact" class="justify-start">
                <span>contact Me</span>
              </NButton>
            </div>
          </NDrawerContent>
        </NDrawer>
        <header class="fixed z-10 h-12 w-full font-display">
          <div class="absolute -z-10 h-20 w-full bg-gradient-to-b from-black via-black to-transparent" />
          <div class="absolute -z-10 h-24 w-full bg-rainbow-linear-gradient-r opacity-80 gradient-mask-b-0" />
          <div class="mx-auto flex h-full w-11/12 max-w-4xl items-center justify-between">
            <NuxtLink to="/" class="flex items-center gap-2">
              <SiteLogo class="!h-8 !w-8" />
              <h1 class="text-2xl">
                YSK Kyle Blog
              </h1>
            </NuxtLink>
            <NButtonGroup class="hidden sm:block">
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
            <div class="flex sm:hidden">
              <NButton :secondary="true" @click="menuToggle()">
                <Icon name="solar:hamburger-menu-broken" size="32" />
              </NButton>
            </div>
          </div>
        </header>
        <main class="grow pt-6">
          <slot />
        </main>
        <footer class="relative mt-8 block h-12 w-full text-center">
          <NuxtLink to="/contact" class="text-center font-display text-lg">
            Contact Me
          </NuxtLink>
        </footer>
      </NScrollbar>
    </NMessageProvider>
  </NConfigProvider>
</template>
