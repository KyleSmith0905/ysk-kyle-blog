<script lang="ts" setup>
import { FormInst } from 'naive-ui'
import { LogoLinkedin, LogoYoutube, LogoTwitter } from '@vicons/ionicons5'

const formRef = ref<FormInst | null>(null)
const formValue = ref({
  email: '',
  message: ''
})

const sendMessage = () => {

}
</script>
<template>
  <div class="mx-auto mt-20 w-11/12 max-w-3xl">
    <h1 class="text-center font-display text-3xl drop-shadow-[0_1rem_2rem_rgba(255,255,255,0.2)]">
      Contact Me
    </h1>
    <div class="my-8 flex flex-col gap-8">
      <div class="relative w-full rounded-2xl px-5 py-3">
        <div class="absolute inset-0 -z-10 overflow-hidden rounded-2xl bg-black">
          <div class="absolute inset-0 bg-rainbow-conic-gradient opacity-5 blur-3xl" />
        </div>
        <div class="absolute inset-0 -z-20 translate-y-8 bg-rainbow-conic-gradient opacity-25 blur-3xl" />
        <h2 class="text-center font-display text-xl">
          Send A Message
        </h2>
        <NForm ref="formRef" :model="formValue" class="mt-4" label-placement="left" label-width="120">
          <NFormItem label="Email" path="email" :required="true" label-style="font-size: 1.25rem;">
            <NInput placeholder="your@email.com" />
          </NFormItem>
          <NFormItem label="Message" path="message" :required="true" label-style="font-size: 1.25rem;">
            <NInput type="textarea" placeholder="Hey, I found you on yskkyle.com! I would like to inquire about your web and mobile development experience." />
          </NFormItem>
          <div class="flex justify-center font-display">
            <NButton :round="true" :secondary="true" class="!px-16" @click="sendMessage">
              Submit
            </NButton>
          </div>
        </NForm>
      </div>
      <div class="relative w-full rounded-2xl px-5 py-3">
        <div class="absolute inset-0 -z-10 overflow-hidden rounded-2xl bg-black">
          <div class="absolute inset-0 rotate-180 bg-rainbow-conic-gradient opacity-5 blur-3xl" />
        </div>
        <div class="absolute inset-0 -z-20 translate-y-8 rotate-180 bg-rainbow-conic-gradient opacity-25 blur-3xl" />
        <h2 class="text-center font-display text-xl">
          Social Media
        </h2>
        <div class="mt-4 flex justify-center">
          <NButtonGroup :vertical="true" class="w-1/3 min-w-fit">
            <NButton :secondary="true">
              <template #icon>
                <NIcon>
                  <LogoLinkedin />
                </NIcon>
              </template>
              LinkedIn
            </NButton>
            <NButton :secondary="true">
              <template #icon>
                <NIcon>
                  <LogoYoutube />
                </NIcon>
              </template>
              Youtube
            </NButton>
            <NButton :secondary="true">
              <template #icon>
                <NIcon>
                  <LogoTwitter />
                </NIcon>
              </template>
              Twitter
            </NButton>
          </NButtonGroup>
        </div>
      </div>
    </div>
  </div>
</template>
