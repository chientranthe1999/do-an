<template lang="html">
  <div>
    <div class="mb-[1em]">
      <carousel :perPage="1">
        <slide><img class="h-[400px] mx-auto" src="@/assets/imgs/banner1.jpg" /></slide>
        <slide><img class="h-[400px] mx-auto" src="@/assets/imgs/banner2.jpg" /></slide>
        <slide><img class="h-[400px] mx-auto" src="@/assets/imgs/banner3.jpg" /></slide>
        <slide><img class="h-[400px] mx-auto" src="@/assets/imgs/banner4.jpg" /></slide>
      </carousel>
    </div>

    <p class="font-bold text-[1.25rem] py-[1em]">Tìm kiếm sân ngay</p>
    <div class="form-search p-[2em] flex items-center w-full mb-[2em] rounded-lg border border-[#adadad]">
      <el-form class="w-full">
        <el-row :gutter="12">
          <el-col :xs="24" :sm="24" :md="5" :lg="5" :xl="5">
            <el-form-item>
              <el-select placeholder="Chọn Tỉnh/Thành phố" class="w-full">
                <el-option>Chọn T</el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="5" :lg="5" :xl="5">
            <el-form-item>
              <el-select placeholder="Chọn Quận/Huyện" class="w-full">
                <el-option>Chọn T</el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
            <el-form-item>
              <el-select placeholder="Chọn Sân" class="w-full">
                <el-option>Chọn T</el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
            <el-form-item>
              <el-input placeholder="Nhập vào tên sân" />
            </el-form-item>
          </el-col>
          <el-col :xs="4" :sm="4" :md="3" :lg="3" :xl="3">
            <el-button type="success" class="w-full">Tìm kiếm</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>

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
<style lang="scss" scoped>
::v-deep .el-form-item {
  margin-bottom: 0;
}
</style>
