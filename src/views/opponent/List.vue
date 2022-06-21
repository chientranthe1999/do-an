<template lang="html">
  <header class="header pl-[4em] border-b border-[#e5e5e5] mb-[4em] relative">
    <p class="italic capitalize text-[1.5rem]">Tìm đối thủ xứng tầm</p>
  </header>
</template>
<script>
export default {}
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
