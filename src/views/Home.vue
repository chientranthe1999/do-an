<template lang="html">
  <div>
    <div class="mb-[1em]">
      <!-- <carousel :perPage="1">
        <slide><img class="h-[400px] mx-auto" src="@/assets/imgs/banner1.jpg" /></slide>
        <slide><img class="h-[400px] mx-auto" src="@/assets/imgs/banner2.jpg" /></slide>
        <slide><img class="h-[400px] mx-auto" src="@/assets/imgs/banner3.jpg" /></slide>
        <slide><img class="h-[400px] mx-auto" src="@/assets/imgs/banner4.jpg" /></slide>
      </carousel> -->
    </div>

    <p class="font-bold text-[1.25rem] py-[1em]">Tìm kiếm sân ngay</p>
    <div class="form-search p-[2em] flex items-center w-full mb-[2em] rounded-lg border border-[#adadad]">
      <!-- Search form -->
      <el-form class="w-full">
        <el-row :gutter="12">
          <el-col :xs="24" :sm="24" :md="5" :lg="5" :xl="5" class="mb-[1em] pc:mb-0">
            <el-form-item>
              <el-select placeholder="Chọn Tỉnh/Thành phố" class="w-full" v-model="filters.city">
                <el-option value="">Chọn T</el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="5" :lg="5" :xl="5" class="mb-[1em] pc:mb-0">
            <el-form-item>
              <el-select placeholder="Chọn Quận/Huyện" class="w-full" v-model="filters.pref">
                <el-option value="">Chọn T</el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="mb-[1em] pc:mb-0">
            <el-form-item>
              <el-select placeholder="Chọn Sân" class="w-full" v-model="filters.stadium_type">
                <el-option value="">Chọn T</el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7" class="mb-[1em] pc:mb-0" v-model="filters.stadium_name">
            <el-form-item>
              <el-input placeholder="Nhập vào tên sân" />
            </el-form-item>
          </el-col>
          <el-col :xs="4" :sm="4" :md="3" :lg="3" :xl="3" class="mb-[1em] pc:mb-0">
            <el-button type="success" class="w-full">Tìm kiếm</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <section v-for="(item, i) in places" :key="'type' + i">
      <div v-if="item.place.length">
        <p class="card-header">{{ item.name }}</p>
        <el-row :gutter="24" class="mb-[2em]">
          <el-col
            :xs="12"
            :md="12"
            :sm="12"
            :lg="6"
            :xl="6"
            v-for="(place, i) in item.place"
            :key="'stadium' + i"
            class="mb-[1em]"
          >
            <v-card :init-data="place" />
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>
<script>
import { getPlace } from '@/api/place'
export default {
  name: 'HomeView',
  async created() {
    try {
      const { data } = await getPlace()
      this.places = data.data
      console.log(this.places)
    } catch (e) {
      console.log(e)
    }
  },

  data() {
    return {
      filters: {
        pref: null,
        city: null,
        stadium_type: null,
        stadium_name: null
      },
      places: []
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-form-item {
  margin-bottom: 0;
}
</style>
