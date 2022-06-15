<template lang="html">
  <div
    class="card-item cursor-pointer rounded-[4px]"
    @click="$router.push({ name: 'InforDetail', params: { id: initData.id } })"
  >
    <img class="w-full h-[200px]" src="@/assets/imgs/banner2.jpg" />
    <div class="card-content">
      <p class="font-[700] text-lg pc:text-[1.25rem] mb-1">Chế độ dinh dưỡng cho người chơi tennis p</p>
      <p>Dinh dưỡng trong tennis chính xác là một phần thiết yếu trong chế độ hàng ngà</p>
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
