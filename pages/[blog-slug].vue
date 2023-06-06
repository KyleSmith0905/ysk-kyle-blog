<script setup lang="ts">
const route = useRoute()

const { data: blogData } = useFetch('/api/blog', {
  method: 'GET',
  query: { slug: route.params.blogslug }
})

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
}, {
  mode: 'all'
})
</script>
<template>
  <div v-if="blogDataNulled?.markdown" class="mx-auto mt-20 w-11/12 max-w-3xl">
    <RainbowBox>
      <RichText :block="blogDataNulled?.markdown" />
    </RainbowBox>
  </div>
</template>
