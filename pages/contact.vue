<script lang="ts" setup>
import { FormInst } from 'naive-ui'
import { LogoLinkedin, LogoYoutube, LogoTwitter } from '@vicons/ionicons5'
import { breakpointsTailwind } from '@vueuse/core'

const message = useMessage()

const formRef = ref<FormInst | null>(null)
const spinContainerRef = ref<HTMLDivElement | null>(null)
const formValue = ref({
  email: '',
  message: ''
})
const formSending = ref<boolean>(false)

const sendMessage = async () => {
  formSending.value = true

  spinContainerRef.value?.style.setProperty('height', '3rem')

  await $fetch('/api/mail', {
    method: 'POST',
    body: {
      message: formValue.value.message,
      email: formValue.value.email
    }
  })

  formSending.value = false

  spinContainerRef.value?.style.setProperty('height', '0rem')
  message.success('Successfully sent message to YSK Kyle.')
}

const breakpoints = useBreakpoints(breakpointsTailwind)
const smallBreakpoint = breakpoints.smaller('sm')
</script>
<template>
  <div class="mx-auto mt-20 w-full max-w-3xl sm:w-11/12">
    <h1 class="text-center font-display text-3xl drop-shadow-[0_1rem_2rem_rgba(255,255,255,0.2)]">
      Contact Me
    </h1>
    <div class="my-8 flex flex-col gap-8">
      <RainbowBox>
        <h2 class="text-center font-display text-xl">
          Send A Message
        </h2>
        <NForm
          ref="formRef"
          :model="formValue"
          :label-placement="smallBreakpoint ? 'top' : 'left'"
          class="mt-4"
          label-width="120"
        >
          <NFormItem label="Email" path="email" :required="true" label-style="font-size: 1.25rem;">
            <NInput v-model:value="formValue.email" :disabled="formSending" placeholder="your@email.com" />
          </NFormItem>
          <NFormItem label="Message" path="message" :required="true" label-style="font-size: 1.25rem;">
            <NInput v-model:value="formValue.message" :disabled="formSending" type="textarea" placeholder="Hey, I found you on yskkyle.com! I would like to inquire about your web and mobile development experience." />
          </NFormItem>
          <div ref="spinContainerRef" class="relative flex h-0 w-full justify-center overflow-hidden transition-all">
            <NSpin class="absolute mx-auto h-8 w-8 overflow-hidden" />
          </div>
          <div class="flex justify-center font-display">
            <NButton :round="true" :secondary="true" class="!px-16" :disabled="formSending" @click="sendMessage">
              Submit
            </NButton>
          </div>
        </NForm>
      </RainbowBox>
    </div>
    <RainbowBox>
      <h2 class="text-center font-display text-xl">
        Social Media
      </h2>
      <div class="mt-4 flex justify-center">
        <NButtonGroup :vertical="true" class="w-1/3 min-w-fit">
          <NButton tag="a" :secondary="true" target="_blank" href="https://www.linkedin.com/in/kylesmith0905/">
            <template #icon>
              <NIcon>
                <LogoLinkedin />
              </NIcon>
            </template>
            LinkedIn
          </NButton>
          <NButton tag="a" :secondary="true" target="_blank" href="https://www.youtube.com/channel/UC05aorP0c1mGhZldI5JimIA">
            <template #icon>
              <NIcon>
                <LogoYoutube />
              </NIcon>
            </template>
            Youtube
          </NButton>
          <NButton tag="a" :secondary="true" target="_blank" href="https://twitter.com/KyleSmith0905">
            <template #icon>
              <NIcon>
                <LogoTwitter />
              </NIcon>
            </template>
            Twitter
          </NButton>
        </NButtonGroup>
      </div>
    </RainbowBox>
  </div>
</template>
