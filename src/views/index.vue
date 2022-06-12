<template>
  <div>
    <div class="mb-[1em]">
      <carousel :perPage="1">
        <slide><img class="h-[400px] mx-auto" src="@/assets/imgs/banner1.jpg" /></slide>
        <slide><img class="h-[400px] mx-auto" src="@/assets/imgs/banner2.jpg" /></slide>
        <slide><img class="h-[400px] mx-auto" src="@/assets/imgs/banner3.jpg" /></slide>
        <slide><img class="h-[400px] mx-auto" src="@/assets/imgs/banner4.jpg" /></slide>
      </carousel>
    </div>

    <!-- <div class="mb-[1em]">
        <div class="form-search p-[1em] flex items-center">
          <el-form>
            <el-form-item>
              <el-input placeholder="Search" />
            </el-form-item>
          </el-form>
        </div>
      </div> -->

    <p class="card-header">Sân Nổi bật</p>
    <el-row :gutter="24" class="mb-[2em]">
      <el-col :xs="12" :md="12" :sm="12" :lg="6" :xl="6" v-for="i in 8" :key="i" class="mb-[1em]">
        <v-card />
      </el-col>
    </el-row>

    <p class="card-header">Sân gần bạn</p>
    <el-row :gutter="24">
      <el-col :xs="12" :md="12" :sm="12" :lg="6" :xl="6" v-for="i in 8" :key="i" class="mb-[1em]">
        <v-card />
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'HomeView'
}
</script>
<style lang="scss"></style>
