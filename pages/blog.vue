<template>
  <div class="mx-auto mt-20 w-11/12 max-w-3xl">
    <h1 class="text-center font-display text-3xl drop-shadow-[0_1rem_2rem_rgba(255,255,255,0.2)]">
      Contact Me
    </h1>
    <div class="mt-6 flex flex-col">
      <NuxtLink to="/top-5-tips" class="group relative px-4 py-2">
        <div class="absolute inset-0 -z-10 overflow-hidden rounded-2xl bg-black">
          <div class="absolute inset-0 bg-rainbow-conic-gradient opacity-5 blur-3xl transition-opacity group-hover:opacity-10" />
        </div>
        <div class="absolute inset-0 -z-20 translate-y-8 bg-rainbow-conic-gradient opacity-25 blur-3xl transition-opacity group-hover:opacity-40" />
        <div class="flex gap-3">
          <div class="grow">
            <h2 class="line-clamp-2 font-display text-xl">
              Blog Title Blog Title Blog Title
            </h2>
            <p class="line-clamp-3">
              Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary
            </p>
          </div>
          <div class="relative h-32 w-36 shrink-0">
            <img src="~/assets/images/professional-selfie.webp" alt="" class="absolute inset-0 h-full w-full rounded-md object-cover opacity-50 blur-3xl">
            <img src="~/assets/images/professional-selfie.webp" alt="" class="absolute inset-0 h-full w-full rounded-md object-cover">
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
