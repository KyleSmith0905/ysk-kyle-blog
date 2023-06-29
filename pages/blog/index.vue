<script lang="ts" setup>
const { data: blogListData } = useFetch('/api/blog/list')

const blogListDataNulled = computed(() => {
  if (blogListData.value && Array.isArray(blogListData.value)) {
    return blogListData.value
  } else {
    return null
  }
})

useServerSeoMeta({
  title: 'Software Development Blogs Written By Kyle Smith',
  ogTitle: 'Software Development Blogs Written By Kyle Smith',
  twitterTitle: 'Software Development Blogs Written By Kyle Smith',
  description: 'A collection of amazingly written blogs to help all ranges of software developer. See the most recent blogs pop into view live.',
  ogDescription: 'A collection of amazingly written blogs to help all ranges of software developer. See the most recent blogs pop into view live.',
  twitterDescription: 'A collection of amazingly written blogs to help all ranges of software developer. See the most recent blogs pop into view live.'
})

useSeoMeta({
  title: 'Software Development Blogs Written By Kyle Smith'
})
</script>
<template>
  <div class="mx-auto mt-20 w-11/12 max-w-3xl">
    <h1 class="text-center font-display text-3xl drop-shadow-[0_1rem_2rem_rgba(255,255,255,0.2)]">
      Recent Blogs
    </h1>
    <div class="mt-6 flex flex-col gap-6">
      <RainbowBox v-for="blog of blogListDataNulled" :key="blog.slug" :to="`/blog/${blog.slug}`" :hover="true">
        <div class="flex flex-col gap-3 sm:flex-row">
          <div class="grow">
            <h2 class="line-clamp-2 font-display text-xl">
              {{ blog.title }}
            </h2>
            <p class="line-clamp-3">
              {{ blog.summary }}
            </p>
          </div>
          <div class="relative h-44 w-full shrink-0 sm:h-32 sm:w-36">
            <img :src="blog.thumbnailUrl" alt="" class="absolute inset-0 h-full w-full rounded-md object-cover opacity-50 blur-3xl" aria-hidden="true">
            <img :src="blog.thumbnailUrl" :alt="blog.thumbnailAlt" class="absolute inset-0 h-full w-full rounded-md object-cover">
          </div>
        </div>
      </RainbowBox>
    </div>
  </div>
</template>
