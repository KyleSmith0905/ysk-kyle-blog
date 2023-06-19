<script lang="ts" setup>
import { FormInst, UploadFileInfo, UploadInst } from 'naive-ui'

const uploadRef = ref<UploadInst | null>(null)
const formRef = ref<FormInst | null>(null)
const formValue = ref({
  slug: '',
  title: '',
  summary: '',
  markdown: '',
  thumbnailUrl: '',
  thumbnailAlt: ''
})

const thumbnailChanged = ({ fileList }: { file: UploadFileInfo, fileList: Array<UploadFileInfo>, event?: Event }) => {
  formValue.value.thumbnailUrl = fileList[0].url ?? ''
}

const sendMessage = async () => {
  // These seems to be an error with $fetch with Sidebase? Maybe global overwrite of types?
  // Follow https://github.com/sidebase/nuxt-auth/issues/426 for updates.

  formRef.value?.restoreValidation()

  const blogExists = await $fetch('/api/blog/exist', {
    method: 'GET',
    query: {
      slug: formValue.value.slug
    }
  })
  // If the blog's existence isn't mentioned or it doesn't exist quit.
  if (!('exists' in blogExists) || blogExists.exists) {
    return
  }

  formValue.value.thumbnailUrl = `https://pub-0ec37b26b8774822908b3349fcb3cf85.r2.dev/thumbnail/${formValue.value.slug}.webp`
  const blog = await $fetch('/api/blog', {
    method: 'POST',
    body: {
      slug: formValue.value.slug,
      title: formValue.value.title,
      summary: formValue.value.summary,
      markdown: formValue.value.markdown,
      thumbnailUrl: formValue.value.thumbnailUrl,
      thumbnailAlt: formValue.value.thumbnailAlt
    }
  })
  if (!blog) {
    return
  }

  uploadRef.value?.submit()
}

onBeforeMount(() => {
  const adminForm = localStorage.getItem('admin--form')
  if (adminForm) {
    formValue.value = JSON.parse(adminForm)
  }

  // Save admin form every 10 seconds (does not need to be optimized).
  setInterval(() => {
    localStorage.setItem('admin--form', JSON.stringify(formValue.value))
  }, 10_000)
})

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
      Upload Blog
    </h1>
    <div class="my-8 flex flex-col gap-8">
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
              @change="thumbnailChanged($event)"
            >
              <NButton :secondary="true">
                Upload Thumbnail
              </NButton>
            </NUpload>
          </NFormItem>
          <NFormItem label="Thumbnail Alt" path="thumbnailAlt" :required="true" label-style="font-size: 1.25rem;">
            <NInput v-model:value="formValue.thumbnailAlt" placeholder="Colorful well organized CSS code in browser inspect elements" />
          </NFormItem>
          <div class="flex justify-center font-display">
            <NButton :round="true" :secondary="true" class="!px-16" @click="sendMessage">
              Submit
            </NButton>
          </div>
        </NForm>
      </RainbowBox>
    </div>
  </div>
</template>
