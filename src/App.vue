<script setup>
import FooterSection from '@/components/sections/footerSection.vue';
import HeaderSection from '@/components/sections/headerSection.vue';
</script>

<template>
  <HeaderSection></HeaderSection>

  <div class="bg-[#FBF9F2]">
    <RouterView />
  </div>

  <FooterSection></FooterSection>
</template>
