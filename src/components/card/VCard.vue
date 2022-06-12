<template lang="html">
  <div class="card-item cursor-pointer rounded-[4px]" @click="$router.push('/detail')">
    <img class="w-full h-[200px]" src="@/assets/imgs/banner1.jpg" />
    <div class="card-content">
      <p class="font-[700] text-lg pc:text-[1.25rem]">Tên sân bóng 1</p>
      <div class="flex justify-between">
        <p class="max-w-[70%]">Số người: 7</p>
        <div class="start">
          <span class="text-[#fadb14]"><i class="el-icon-star-on" /></span>
        </div>
      </div>
      <p>Giá: <span class="text-[#3a6026] font-[700]">300000đ - 600000đ</span> / Trận</p>
      <p class="flex justify-between">
        <span><i class="el-icon-check" />Wifi</span>
        <span><i class="el-icon-check" />Căng tin</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    initData: {
      type: Object,
      require: true,
      default: () => ({})
    }
  }
}
</script>
<style lang="scss" scoped>
.card-item {
  border: 1px solid #ededed;
}

.card-item:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.card-content {
  padding: 0.5em;
  line-height: 1.8rem;
}
</style>
