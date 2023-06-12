<script setup lang="ts">
const route = useRoute()
const message = useMessage()
useFetch('/api/blog', {
  query: {
    slug: route.params.blogslug,
    select: ['slug', 'title', 'summary', 'markdown', 'thumbnailUrl', 'thumbnailAlt']
  },
  onResponse: ({ response }) => {
    formValue.value = response._data
  }
})

const deleteBlog = async () => {
  await $fetch('/api/blog', {
    method: 'DELETE',
    query: {
      slug: route.params.blogslug
    }
  })

  message.error('Blog Successfully Deleted')
}

const updateBlogField = async (field: keyof (typeof formValue.value)) => {
  if (!(field in formValue.value)) {
    return
  }
  await $fetch('/api/blog', {
    method: 'PUT',
    query: {
      slug: route.params.blogslug
    },
    body: {
      [field]: formValue.value[field]
    }
  })
}

const formValue = ref({
  slug: '',
  title: '',
  summary: '',
  markdown: '',
  thumbnailUrl: '',
  thumbnailAlt: ''
})
</script>
<template>
  <div class="mx-auto mt-20 w-11/12 max-w-3xl">
    <RainbowBox to="/admin" :hover="true">
      <p>
        Back To Admin
      </p>
    </RainbowBox>
    <h1 class="mt-8 text-center font-display text-3xl drop-shadow-[0_1rem_2rem_rgba(255,255,255,0.2)]">
      Modify Blog
    </h1>
    <div class="mt-6 flex flex-col gap-6">
      <RainbowBox>
        <NForm ref="formRef" :model="formValue" class="mt-4" label-placement="left" label-width="120">
          <NFormItem label="Slug" path="slug" :required="true" label-style="font-size: 1.25rem;">
            <NInput v-model:value="formValue.slug" placeholder="developer-tools-tips-i-use" />
          </NFormItem>
          <NFormItem label="Title" path="title" :required="true" label-style="font-size: 1.25rem;">
            <NInput v-model:value="formValue.title" placeholder="Best Developer Tips Only Experts Know" />
          </NFormItem>
          <NFormItem label="Summary" path="summary" :required="true" label-style="font-size: 1.25rem;">
            <NInput v-model:value="formValue.summary" type="textarea" placeholder="I will be counting down the top 4 developer tips that only experts know of. Tune in as I reveal the secrets of web development." />
          </NFormItem>
          <NFormItem label="Markdown" path="markdown" :required="true" label-style="font-size: 1.25rem;">
            <NInput v-model:value="formValue.markdown" type="textarea" placeholder="# Best Developer Tips Only Experts Know&#10;During my experience as a software developer, I have encountered" />
          </NFormItem>
          <div v-if="formValue.markdown" class="mx-auto mb-4 w-11/12 rounded-lg bg-black px-4 py-2 ring-1 ring-zinc-900">
            <RichText :block="formValue.markdown" />
          </div>
          <NButton :round="true" class="mb-4 w-full" @click="updateBlogField('markdown')">
            Edit
          </NButton>
          <NFormItem label="Thumbnail" path="thumbnailUrl" :required="true" label-style="font-size: 1.25rem;">
            <NUpload
              ref="uploadRef"
              list-type="image"
              action="/api/blog/thumbnail"
              :default-upload="false"
              :max="1"
              :data="{
                'blog-slug': formValue.slug,
              }"
            >
              <NButton :secondary="true">
                Upload Thumbnail
              </NButton>
            </NUpload>
          </NFormItem>
          <NFormItem label="Thumbnail Alt" path="thumbnailAlt" :required="true" label-style="font-size: 1.25rem;">
            <NInput v-model:value="formValue.thumbnailAlt" placeholder="Colorful well organized CSS code in browser inspect elements" />
          </NFormItem>
        </NForm>
      </RainbowBox>
      <RainbowBox>
        <h2>Management Actions</h2>
        <NButton :round="true" :secondary="true" @click="deleteBlog()">
          Delete
        </NButton>
      </RainbowBox>
    </div>
  </div>
</template>
