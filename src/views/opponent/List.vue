<template lang="html">
  <div>
    <header class="header pl-[4em] border-b border-[#e5e5e5] mb-[4em] relative">
      <p class="italic capitalize text-[1.5rem]">Tìm đối thủ xứng tầm</p>
    </header>
    <main class="content-main-container">
      <div class="box-shadow-1 rounded-lg">div</div>
    </main>
  </div>
</template>
<script>
import { getNews } from '@/api/news'
export default {
  methods: {
    async getNews() {
      const res = await getNews({
        page: 1,
        limit: 10
      })

      console.log(res)
    }
  }
}
</script>
<style lang="scss" scoped>
.header::before {
  width: 0.4rem;
  height: 3rem;
  position: absolute;
  top: 45%;
  left: 1.1rem;
  background-color: #172948;
  content: '';
  -webkit-transform: translateY(-50%) skew(-15deg);
  transform: translateY(-50%) skew(-15deg);
}
</style>
