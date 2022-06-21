<template lang="html">
  <div class="card-item cursor-pointer rounded-[4px]" @click="$router.push({ name: 'NewsDetail' })">
    <img class="w-full h-[200px]" src="@/assets/imgs/banner2.jpg" />
    <div class="card-content">
      <p class="font-[700] text-lg pc:text-[1.25rem] mb-1 news-title">
        Chế độ dinh dưỡng cho người chơi tensdfdfsd fsdf sdf sdfsdfsdf sdf sdf snis p
      </p>
      <p>Dinh dưỡng trong tennis chính xác là một phần thiết yếu trong chế độ hàng ngà</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewsItem',
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
.news-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  font-weight: 600;
  transition: 0.3s ease;
  -webkit-line-clamp: 2;
}
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
