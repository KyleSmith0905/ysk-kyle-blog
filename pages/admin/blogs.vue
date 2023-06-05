<script lang="ts" setup>
// @ts-nocheck
const { data: blogListData } = useFetch('/api/blog/list')
definePageMeta({ middleware: 'auth' })
</script>
<template>
  <div class="mx-auto mt-20 w-11/12 max-w-3xl">
    <RainbowBox to="/admin" :hover="true">
      <p>
        Back To Admin
      </p>
    </RainbowBox>
    <h1 class="mt-8 text-center font-display text-3xl drop-shadow-[0_1rem_2rem_rgba(255,255,255,0.2)]">
      Blogs
    </h1>
    <div class="mt-6 flex flex-col gap-6">
      <RainbowBox v-for="blog of blogListData" :key="blog.slug" :to="`/admin/blog/${blog.slug}`" :hover="true">
        <div class="flex gap-3">
          <div class="grow">
            <h2 class="line-clamp-2 font-display text-xl">
              {{ blog.title }}
            </h2>
            <p class="line-clamp-3">
              {{ blog.summary }}
            </p>
          </div>
          <div class="relative h-32 w-36 shrink-0">
            <img :src="blog.thumbnailUrl" alt="" class="absolute inset-0 h-full w-full rounded-md object-cover opacity-50 blur-3xl" aria-hidden="true">
            <img :src="blog.thumbnailUrl" :alt="blog.thumbnailAlt" class="absolute inset-0 h-full w-full rounded-md object-cover">
          </div>
        </div>
      </RainbowBox>
    </div>
  </div>
</template>
