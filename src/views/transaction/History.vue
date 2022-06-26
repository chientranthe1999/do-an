<template lang="html">
  <div>
    <header class="header pl-[4em] border-b border-[#e5e5e5] mb-[4em] relative">
      <p class="italic capitalize text-[1.5rem]">Lịch sử giao dịch</p>
    </header>
    <div class="content-main-container">
      <div class="bg-white box-shadow-1 p-[0.5em] rounded-md">
        <v-table
          :table-data="results"
          :columns="cols"
          :limit="limit"
          :page="page"
          :total="total"
          @onChangePage="changePage"
        >
          <template #status="{ row }">
            <div
              class="text-center bg-[#00b5ad] text-[white] rounded-lg py-[0.5rem] w-[80px] mx-auto"
              v-if="row.status"
            >
              Done
            </div>
            <el-tag type="warning" v-else>Waiting</el-tag>
          </template>

          <template #time="{ row }">
            <div>
              <el-tag v-for="item in row.time" :key="item" class="mr-2 mb-2" type="success">{{ item }}</el-tag>
            </div>
          </template>

          <template #totalMoney="{ row }">
            <div>
              <p class="text-center" v-if="row.totalMoney">{{ row.totalMoney | formatMoney }}</p>
              <p class="text-center" v-else>0 VND</p>
            </div>
          </template>
        </v-table>
      </div>
    </div>
  </div>
</template>
<script>
import { getOrder } from '@/api/order'
export default {
  async created() {
    await this.getData()
  },

  data() {
    return {
      loading: false,
      isOpen: false,
      total: 1,
      page: 1,
      limit: 10,
      gas: 10,
      results: [],

      cols: [
        {
          prop: 'stadium',
          label: 'Sân',
          minWidth: '20'
        },
        {
          prop: 'time',
          label: 'Thời gian',
          minWidth: '20'
        },
        {
          prop: 'totalMoney',
          label: 'Tổng tiền',
          minWidth: '10'
        },
        // {
        //   prop: 'status',
        //   label: 'Số điện thoại',
        //   minWidth: '15'
        // },
        {
          prop: 'status',
          label: 'Trạng thái',
          minWidth: '10'
        },
        {
          prop: 'dayOrder',
          label: 'Ngày đặt',
          minWidth: '10'
        }
      ]
    }
  },

  methods: {
    async changePage(page) {
      this.page = page
      await this.getData()
    },

    async getData() {
      try {
        this.results = []
        const res = await getOrder({
          pageSize: this.limit,
          page: this.page
        })
        if (res.data.records.length) {
          this.results = res.data.records.map((item) => {
            return {
              dayOrder: item.dayOrder,
              status: item.status,
              stadium: item.place?.address,
              time: this._getTime(item.timeBlocks),
              totalMoney: this._getMoney(item)
            }
          })
          console.log()
          this.total = res.data.total
        }
      } catch (error) {
        console.log(error)
      }
    },

    _getTime(times) {
      if (!times) return ''
      return times.map((item) => {
        return item.timeStart
      })
    },

    _getMoney(money) {
      return money.money + money.gasFee - money.downPrice
    }
  }
}
</script>
<style lang="css" scoped>
.header::before {
  width: 0.4rem;
  height: 3rem;
}
</style>
