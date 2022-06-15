<template lang="html">
  <div>
    <header class="header">
      <p class="italic capitalize text-[3.5rem]">Tin tức</p>
      <p class="text-[#172948] text-[3.5rem] italic font-semibold uppercase">Thế giới thể thao</p>
    </header>
  </div>
</template>
<script>
export default {}
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
  height: 9rem;
  background-color: #172948;
  content: '';
  -webkit-transform: translateY(-50%) skew(-15deg);
  transform: translateY(-50%) skew(-15deg);
}
</style>
