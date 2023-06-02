<script lang="ts" setup>
definePageMeta({ middleware: 'auth' })
</script>
<template>
  <div class="mx-auto mt-20 w-11/12 max-w-3xl">
    <h1 class="text-center font-display text-3xl drop-shadow-[0_1rem_2rem_rgba(255,255,255,0.2)]">
      Admin
    </h1>
    <div class="mt-4">
      <NuxtLink to="/admin/upload" class="relative block w-full rounded-2xl px-5 py-3">
        <div class="absolute inset-0 -z-10 overflow-hidden rounded-2xl bg-black">
          <div class="absolute inset-0 bg-rainbow-conic-gradient opacity-5 blur-3xl" />
        </div>
        <div class="absolute inset-0 -z-20 translate-y-8 bg-rainbow-conic-gradient opacity-25 blur-3xl" />
        <p to="/admin/upload">
          Upload Blog
        </p>
      </NuxtLink>
    </div>
  </div>
</template>
