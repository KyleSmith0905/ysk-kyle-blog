<script setup lang="ts">
import colors from 'tailwindcss/colors'
import { darkTheme, GlobalThemeOverrides } from 'naive-ui'
import SiteLogo from '~/assets/icons/logo.svg'

const drawerActive = ref(false)
const currentRainbow = ref<HTMLDivElement>()
const futureRainbow = ref<HTMLDivElement>()

const definedNuxtLink = computed(() => {
  // @ts-expect-error We treat it as an HTML element tag by applying it to buttons
  return defineNuxtLink({}) as keyof HTMLElementTagNameMap
})

const themeOverrides: GlobalThemeOverrides = {
  common: {
    borderRadius: '0.75rem',
    modalColor: 'rgba(0, 0, 0, 0.8)',
    scrollbarHeight: '100vh'
  }
}

const menuToggle = () => {
  drawerActive.value = !drawerActive.value
}

const { width } = useWindowSize()
const router = useRouter()

router.beforeEach(() => {
  currentRainbow.value?.animate(
    [
      { transform: 'translateX(0%)' },
      { transform: 'translateX(100%)' }
    ],
    {
      duration: 500,
      easing: 'cubic-bezier(0,.85,1,.15)'
    }
  )
  futureRainbow.value?.animate(
    [
      { transform: 'translateX(-100%)' },
      { transform: 'translateX(0%)' }
    ],
    {
      duration: 500,
      easing: 'cubic-bezier(0,.85,1,.15)'
    }
  )
})
</script>
<template>
  <NConfigProvider :theme="darkTheme" :theme-overrides="themeOverrides" class="flex min-h-full flex-col">
    <NMessageProvider>
      <NScrollbar class="!h-screen" trigger="none">
        <div class="flex min-h-screen flex-col">
          <NDrawer v-model:show="drawerActive" :width="width">
            <NDrawerContent title="Navigation" class="backdrop-blur-md" :closable="true">
              <div class="flex flex-col gap-1">
                <NButton
                  :text-color="colors.white"
                  :tag="definedNuxtLink"
                  to="/"
                  class="justify-start"
                  @click="drawerActive = false"
                >
                  <span>Home</span>
                </NButton>
                <NButton
                  :text-color="colors.white"
                  :tag="definedNuxtLink"
                  to="/blog"
                  class="justify-start"
                  @click="drawerActive = false"
                >
                  <span>Blog</span>
                </NButton>
                <NButton
                  :text-color="colors.white"
                  :tag="definedNuxtLink"
                  to="/contact"
                  class="justify-start"
                  @click="drawerActive = false"
                >
                  <span>contact Me</span>
                </NButton>
              </div>
            </NDrawerContent>
          </NDrawer>
          <header
            class="relative z-10 h-12 w-full font-display"
          >
            <div ref="currentRainbow" class="absolute -z-10 h-32 w-full bg-rainbow-linear-gradient-r opacity-30 gradient-mask-b-0" />
            <div ref="futureRainbow" class="absolute -z-10 h-32 w-full translate-x-full bg-rainbow-linear-gradient-r opacity-30 gradient-mask-b-0" />
            <div class="absolute -z-10 h-full w-full bg-black" />
            <div class="absolute -z-10 h-full w-full bg-rainbow-linear-gradient-r opacity-5" />
            <div class="mx-auto flex h-full w-11/12 max-w-4xl items-center justify-between">
              <NuxtLink to="/" class="flex items-center gap-2">
                <SiteLogo class="!h-8 !w-8" />
                <h1 class="text-2xl">
                  YSK Kyle Blog
                </h1>
              </NuxtLink>
              <NButtonGroup class="max-sm:hidden">
                <NButton :text-color="colors.white" :strong="true" :tertiary="true" :tag="definedNuxtLink" to="/">
                  <span>Home</span>
                </NButton>
                <NButton :text-color="colors.white" :strong="true" :tertiary="true" :tag="definedNuxtLink" to="/blog">
                  <span>Blog</span>
                </NButton>
                <NButton :text-color="colors.white" :strong="true" :tertiary="true" :tag="definedNuxtLink" to="/contact">
                  <span>contact Me</span>
                </NButton>
              </NButtonGroup>
              <div class="sm:hidden">
                <NButton title="Navigational Sidebar" :secondary="true" @click="menuToggle()">
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
        </div>
      </NScrollbar>
    </NMessageProvider>
  </NConfigProvider>
</template>
