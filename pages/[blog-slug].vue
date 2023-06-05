<script setup lang="ts">
// @ts-nocheck
const route = useRoute()

const { data: blogData } = useFetch('/api/blog', {
  query: { slug: route.params.blogslug }
})

useHead({
  title: blogData.value?.title,
  meta: [
    { name: 'twitter:title', content: blogData.value?.title },
    { property: 'og:title', content: blogData.value?.title },
    { name: 'description', content: blogData.value?.summary },
    { name: 'twitter:description', content: blogData.value?.summary },
    { property: 'og:description', content: blogData.value?.summary },
    { property: 'og:image:url', content: blogData.value?.thumbnailUrl },
    { name: 'twitter:image', content: blogData.value?.thumbnailUrl },
    { name: 'twitter:image:alt', content: blogData.value?.thumbnailAlt },
    { property: 'og:image:height', content: '288' },
    { property: 'og:image:width', content: '384' }
  ]
})
</script>
<template>
  <div class="mx-auto mt-20 w-11/12 max-w-3xl">
    <RainbowBox>
      <RichText :block="blogData?.markdown" />
    </RainbowBox>
  </div>
</template>
