<script setup lang="ts">
const route = useRoute()

const { data: blogData } = await useFetch('/api/blog', {
  method: 'GET',
  query: { slug: route.params.blogslug }
})

// Declare null if blog is missing
const blogDataNulled = computed(() => {
  if (blogData.value && 'title' in blogData.value) {
    return blogData.value
  } else {
    return null
  }
})

useServerSeoMeta({
  title: blogDataNulled.value?.title,
  ogTitle: blogDataNulled.value?.title,
  twitterTitle: blogDataNulled.value?.title,
  description: blogDataNulled.value?.summary,
  ogDescription: blogDataNulled.value?.summary,
  twitterDescription: blogDataNulled.value?.summary,
  ogImage: blogDataNulled.value?.thumbnailUrl,
  ogImageAlt: blogDataNulled.value?.thumbnailAlt,
  twitterImage: blogDataNulled.value?.thumbnailUrl,
  twitterImageAlt: blogDataNulled.value?.thumbnailAlt,
  ogImageHeight: 288,
  ogImageWidth: 384,
  ogType: 'article'
})

useSeoMeta({
  title: blogDataNulled.value?.title
})
</script>
<template>
  <div v-if="blogDataNulled?.markdown" class="mx-auto mt-20 w-full max-w-3xl sm:w-11/12">
    <RainbowBox>
      <RichText :block="blogDataNulled?.markdown" />
    </RainbowBox>
  </div>
</template>
