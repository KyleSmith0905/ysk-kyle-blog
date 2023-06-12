<script lang="ts" setup>
const props = defineProps<{
  to?: string,
  href?: string,
  hover?: boolean,
}>()

const polymorphicTag = computed(() => {
  if (props.to) {
    return 'router-link'
  } else if (props.href) {
    return 'a'
  } else {
    return 'div'
  }
})

// Modifies the background behind box components to glow with random rainbow colors every time
const backgroundImage = ref(`conic-gradient(from ${Math.random()}turn, ${rainbowWheel})`)
onBeforeUpdate(() => {
  backgroundImage.value = `conic-gradient(from ${Math.random()}turn, ${rainbowWheel})`
})
</script>
<template>
  <component
    :is="polymorphicTag"
    :to="to"
    :href="href"
    target="blank"
    :class="{
      'group relative block w-full rounded-2xl px-5 py-3': true,
      'cursor-pointer': to || href,
    }"
  >
    <div class="absolute inset-0 -z-10 overflow-hidden rounded-2xl bg-black">
      <div
        class="absolute inset-0 translate-y-8 opacity-5 blur-3xl"
        :style="{backgroundImage: backgroundImage}"
      />
    </div>
    <div class="absolute inset-0 -z-20 rounded-2xl">
      <div
        :class="{
          'absolute inset-0 translate-y-8 opacity-25 blur-3xl transition-opacity duration-500': true,
          'group-hover:opacity-40': hover,
        }"
        :style="{backgroundImage: backgroundImage}"
      />
    </div>
    <slot />
  </component>
</template>
