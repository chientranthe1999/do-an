<template lang="html">
  <div>
    <header class="header pl-[4em] border-b border-[#e5e5e5] mb-[4em] relative flex items-center py-[4px]">
      <p class="italic capitalize text-[1.5rem] mr-auto">Tìm đối thủ xứng tầm</p>
      <el-button type="success">Tạo mới</el-button>
    </header>
    <main class="content-main-container">
      <el-row :gutter="24">
        <el-col :xs="12" :md="6" :sm="12" :lg="6" :xl="6" class="mb-[1em]" v-for="i in 8" :key="i">
          <div class="card-item">
            <p class="text-lg font-bold text-main">Cần tìm đối chơi tốt</p>
            <div class="card-name flex items-center">
              <img src="@/icons/location.svg" alt="" class="icon-class" />
              <p class="overflow-hidden text-ellipsis whitespace-nowrap">
                Địa chỉ:
                <span class="ml-1 font-[600]"> Sân lê Khúc Triều Dương Phố cô Nội</span>
              </p>
            </div>
            <p class="card-name flex items-center">
              <img src="@/icons/time.svg" alt="" class="icon-class" />
              Thời gian: <span class="ml-1 font-[600]"> 08:30 27/05/2022</span>
            </p>
            <p class="card-name flex items-center">
              <img src="@/icons/phone.svg" alt="" class="icon-class" />
              <span class="ml-1 font-[600]">0868594538</span>
            </p>
            <p class="text-sm italic">Đăng bởi: Nguyên Vũ</p>
          </div>
        </el-col>
      </el-row>

      <el-pagination
        :hide-on-single-page="true"
        align="center"
        background
        :total="total"
        :page-size="limit"
        :current-page="page"
        layout="prev, pager, next"
        class="py-[1em]"
        @current-change="changePage"
      />
    </main>
  </div>
</template>
<script>
import { getNews } from '@/api/news'
export default {
  data() {
    return {
      loading: false,
      isOpen: false,
      total: 10,
      page: 1,
      limit: 1,
      reloadPagination: 1,
      results: []
    }
  },
  methods: {
    async getNews() {
      const res = await getNews({
        page: 1,
        limit: 10
      })

      console.log(res)
    },
    changePage(page) {
      this.page = page
    }
  }
}
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

.card-item {
  border: 1px solid #ededed;
  padding: 0.5em;
  border-radius: 10px;
  margin-bottom: 1em;
  cursor: pointer;

  > p {
    margin-bottom: 0.5rem;
  }
}
.card-item:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.icon-class {
  height: 20px;
  margin-right: 0.25em;
}
</style>
