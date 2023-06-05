<script lang="ts" setup>
definePageMeta({ middleware: 'auth' })
</script>
<template>
  <div class="mx-auto mt-20 w-11/12 max-w-3xl">
    <h1 class="text-center font-display text-3xl drop-shadow-[0_1rem_2rem_rgba(255,255,255,0.2)]">
      Admin
    </h1>
    <div class="mt-4 flex flex-col gap-4">
      <RainbowBox to="/admin/upload" :hover="true">
        <p to="/admin/upload">
          Upload Blog
        </p>
      </RainbowBox>
      <RainbowBox to="/admin/blogs" :hover="true">
        <p to="/admin/blogs">
          Blogs
        </p>
      </RainbowBox>
    </div>
  </div>
</template>
