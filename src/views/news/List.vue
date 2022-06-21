<template lang="html">
  <div>
    <header class="header pl-[4em] border-b border-[#e5e5e5] mb-[4em]">
      <p class="italic capitalize text-[2.5rem]">Tin tức</p>
      <p class="text-[#172948] text-[2.5rem] italic font-semibold uppercase">Thế giới thể thao</p>
    </header>

    <section>
      <!-- <p class="card-header">{{ item.name }}</p> -->
      <el-row :gutter="24" class="mb-[2em]">
        <el-col :xs="12" :md="12" :sm="12" :lg="6" :xl="6" class="mb-[1em]" v-for="i in 8" :key="i">
          <NewsItem />
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
import NewsItem from './NewsItem'
export default {
  name: 'NewList',
  components: { NewsItem }
}
</script>
<style lang="scss">
.header {
  position: relative;
}

.header::before {
  position: absolute;
  top: 45%;
  left: 1.1rem;
  width: 0.6rem;
  height: 7rem;
  background-color: #172948;
  content: '';
  -webkit-transform: translateY(-50%) skew(-15deg);
  transform: translateY(-50%) skew(-15deg);
}
</style>
