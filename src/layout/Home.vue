<template lang="html">
  <div>
    <v-header></v-header>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1.25rem;
}
</style>
