<template>
  <div class="mx-auto mt-20 w-11/12 max-w-3xl">
    <h1 class="flex flex-col drop-shadow-[0_1rem_2rem_rgba(255,255,255,0.2)]">
      <span class="text-center text-lg">
        A blog for
      </span>
      <span class="text-center font-display text-6xl text-stone-300">
        Kyle Smith
      </span>
    </h1>
    <RainbowBox class="mt-20 flex flex-col items-center gap-2 sm:flex-row sm:gap-8">
      <div class="relative h-40 w-36 shrink-0">
        <img src="~/assets/images/professional-selfie.webp" alt="" class="absolute inset-0 h-full w-full rounded-md object-cover opacity-50 blur-3xl">
        <img src="~/assets/images/professional-selfie.webp" alt="" class="absolute inset-0 h-full w-full rounded-md object-cover">
      </div>
      <p>
        <span class="font-bold">Greetings,</span> I want to start this blog as a way to share my experience with others. Many times I run across a programming topic that doesn't feel properly documented. Sometimes a technology has something I wish I knew ahead of time. This blog serves as my personal outlet to the world of programming. I wish to implement some form of feedback or comment system to allow an open discussion, but that will stay a side project.
      </p>
    </RainbowBox>
    <RainbowBox class="mt-8 flex flex-col-reverse items-center gap-2 sm:flex-row sm:gap-8">
      <p>
        I believe that AI is the future, I use it for sample content writing, programming, and basic inquiries. I do not believe that AI should be used for content writing in production. I believe personal communications would feel a lot less personal if it was known that an AI wrote it. If an article is written by AI, I will attach a note about on the top describing how AI was involved with the development of the article.
      </p>
      <div class="relative h-40 w-36 shrink-0">
        <img src="~/assets/images/handwriting.webp" alt="" class="absolute inset-0 h-full w-full rounded-md object-cover opacity-50 blur-3xl">
        <img src="~/assets/images/handwriting.webp" alt="" class="absolute inset-0 h-full w-full rounded-md object-cover">
      </div>
    </RainbowBox>
  </div>
</template>
