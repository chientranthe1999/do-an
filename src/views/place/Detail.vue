<template lang="html">
  <div v-loading="loading">
    <el-row :gutter="24">
      <el-col :sm="24" :md="16">
        <!-- main content -->
        <section class="detail-items">
          <h2 class="font-bold text-[1.25rem]">{{ place.name }}</h2>
          <span><i class="el-icon-star-on text-[#fadb14]" v-for="i in 5" :key="i" /> (1 đánh giá)</span>
          <p class="mb-[1.5em]">
            <i class="el-icon-location" />
            <span>
              {{ place.address }}
            </span>
          </p>
          <img class="w-full mb-[1em]" src="@/assets/imgs/banner1.jpg" />
          <p>
            Sân đá bóng Minh Kiệt Dương Nội tọa lạc ngay cạnh trung tâm thương mại Aeon Mall Hà Đông, gồm cụm 4 sân bóng
            cỏ nhân tạo 7 người được đầu tư khai thác rất mới và đẹp. Lòng sân có kích thước 28 x 44, là một trong những
            sân bóng có chiều ngang rộng những chiều dài hơi ngắn. Mặt sân được đầu tư với cỏ đẹp, mềm mại, không trơn
            tượt. Hệ thống luới đèn, bảng hiệu tỷ số rất hiện đại. Hệ thống đèn chiếu sáng đường chạy, lưới chắn bóng
            đều đẹp và đồng bộ, cũng cấp đủ ảnh sáng cho các đội chơi. Có lẽ vì thế mà sân bóng Minh Kiệt trở thành một
            trong những điểm đến thường xuyên của các dân Phủi Hà Đông, Không gian thoáng mát, xung quanh không có nhà
            cao tầng nên tâm nhìn của sân rất rộng. Sân rất nổi tiếng và là điểm tô chức nhiều giải bóng đá lớn dành cho
            phủi thủ khắp Hà thành
          </p>
        </section>

        <!-- comment -->
        <section class="detail-items">
          <p class="font-bold text-[1.25rem] mb-[1em]">Đánh giá sân bóng {{ place.name }}</p>
          <div>
            <span class="text-[1.25rem] font-bold text-main mr-[0.5em]">4.6</span>
            <span><i class="el-icon-star-on text-[#fadb14]" v-for="i in 5" :key="i" /> (1 đánh giá)</span>

            <div class="rounded-[5px] border border-[#e5e5e5] p-[1em]">
              <div class="flex items-center mb-[0.5em] font-[700]">Voting <el-rate class="ml-[0.5em]"></el-rate></div>
              <el-form>
                <el-row :gutter="12">
                  <el-col :md="16">
                    <el-input
                      type="textarea"
                      rows="4"
                      placeholder="Nhập bình luận của bạn"
                      class="w-full h-[120px] border-1 border-"
                    />
                  </el-col>
                  <el-col :md="8">
                    <el-form-item>
                      <el-input placeholder="Họ và tên" />
                    </el-form-item>

                    <el-form-item>
                      <el-input placeholder="Số điện thoại" />
                    </el-form-item>
                  </el-col>
                </el-row>
                <div class="w-full mx-auto pc:w-fit">
                  <el-button type="primary" class="w-full px-[4em]">Gửi đánh giá</el-button>
                </div>
              </el-form>
            </div>
          </div>
        </section>
      </el-col>
      <!-- Booking time -->
      <el-col :sm="24" :md="8">
        <section>
          <p class="font-bold text-[1.5rem] mb-[1em]">Đặt sân</p>
          <div class="border rounded-lg p-[1em] border-[#e5e5e5] text-center">
            <p class="font-bold text-[1.25rem] mb-[1em]">Chọn thời gian</p>

            <el-date-picker
              v-model="form.orderDay"
              type="date"
              placeholder="Pick a day"
              class="mb-[1em] w-100"
              format="yyyy/MM/dd"
              value-format="yyyy/MM/dd"
              @change="getData"
            >
            </el-date-picker>
            <el-row :gutter="24" class="mb-[1em]" v-if="time.length">
              <el-col :span="8" v-for="item in time" :key="item.time" class="mb-[1em]">
                <el-checkbox
                  v-model="form.timeBooks"
                  border
                  class="w-full"
                  :label="item.time"
                  :disabled="!item.isReady"
                >
                  {{ item.time }}
                </el-checkbox>
              </el-col>
            </el-row>

            <!-- service list -->
            <section class="detail-items" v-if="place.services.length">
              <p class="font-bold text-[1.25rem] mb-[1em]">Tiện ích trên sân</p>

              <div v-for="(service, index) in place.services" :key="service.id" class="mb-[1em]">
                <el-checkbox v-model="form.services" border class="w-full flex items-center" :label="index">
                  <div class="flex flex-1">
                    <p class="mr-auto">{{ service.name }}</p>
                    <p>+{{ service.price }}đ</p>
                  </div>
                </el-checkbox>
              </div>
            </section>

            <!-- Voucher -->
            <section class="detail-items" v-if="place.voucherCreate.length">
              <p class="font-bold text-[1.25rem] mb-[1em]">Voucher</p>

              <div v-for="(voucher, index) in place.voucherCreate" :key="voucher.id" class="mb-[1em]">
                <el-checkbox v-model="form.voucher" class="w-full h-auto flex items-center" :label="index" border>
                  <div class="flex">
                    <p class="mr-auto">{{ voucher.name }}</p>
                    <p>-{{ voucher.value }}{{ voucher.type === voucherType.CASH ? 'đ' : '%' }}</p>
                  </div>
                </el-checkbox>
              </div>
            </section>

            <!-- Phone -->
            <section class="detail-items" v-if="place.voucherCreate">
              <p class="font-bold text-[1.25rem] mb-[1em]">Số điện thoại liên hệ</p>
              <el-input v-model="form.phoneNumber"></el-input>
            </section>

            <div v-if="price && Object.keys(price).length" class="box-shadow-1 rounded-lg p-[0.5em] mb-[1em]">
              <p class="text-left mb-[1em] font-[600] text-md flex">
                <span class="w-[80%] mr-auto"> Tổng tiền:</span>
                <span class="text-main flex-1">{{ price.money }}đ</span>
              </p>
              <p class="text-left mb-[1em] font-[600] text-md flex">
                <span class="w-[80%] mr-auto"> Phí gas:</span>
                <span class="text-main flex-1">{{ price.gasFee }}đ</span>
              </p>
              <p class="text-left font-[600] text-md flex">
                <span class="w-[80%] mr-auto"> Voucher giảm giá:</span>
                <span class="text-main flex-1">{{ price.moneyDown }}đ</span>
              </p>
            </div>

            <el-button type="primary" class="w-[140px]" @click="sendFormData">Đặt sân</el-button>
          </div>
        </section>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getPlaceById, getTime } from '@/api/place'
import { applyVoucher, order } from '@/api/order'
import { getDay } from '@/utils/day'
import { HTTP_CODE, VOUNCHER_TYPE } from '@/utils/constants'

export default {
  name: 'Detail',

  async created() {
    try {
      this.form.orderDay = getDay(Date.now())
      await this.getData(this.form.orderDay)
    } catch (e) {
      console.log(e)
    }
  },
  data() {
    return {
      loading: false,
      voucherType: VOUNCHER_TYPE,
      form: {
        orderDay: '',
        timeBooks: [],
        services: [],
        voucher: [],
        phoneNumber: ''
      },
      place: {
        services: [],
        voucherCreate: []
      },
      time: [],
      price: {}
    }
  },

  watch: {
    form: {
      handler() {
        this.price = {}
      },
      deep: true
    }
  },
  methods: {
    async getData(day) {
      const [stadium, time] = await Promise.all([
        getPlaceById(this.$route.params.id),
        getTime(this.$route.params.id, { day })
      ])

      this.place = stadium.data.data
      this.time = time.data.data
    },

    async sendFormData() {
      try {
        this.loading = true
        const formData = {
          ...this.form,
          services: this.form.services?.map((item) => {
            return this.place.services[item]
          }),

          voucher: this.form.voucher?.map((item) => {
            return this.place.voucherCreate[item]
          }),

          place: {
            id: this.place.id
          }
        }

        if (Object.keys(this.price).length) {
          this._placeOrder(formData)
        } else {
          this._getPrice(formData)
        }
      } catch (e) {
        this.$vmess.error('There is an error')
      } finally {
        this.loading = false
      }
    },

    async _getPrice(formData) {
      const res = await applyVoucher(formData)
      this.price = res.data
    },

    async _placeOrder(formData) {
      if (!this.$store.getters['token']) {
        return this.$vmess.error('Xin vui lòng đăng nhập để thực hiện chức năng này')
      }

      const res = await order(formData)
      if (res.status === HTTP_CODE.CREATED) {
        this.$vmess('Chúc mừng bạn đã đặt sân thành công!!')
      }
    }
  }
}
</script>
<style lang="css" scoped>
.detail-items {
  @apply border-b-[1px] border-[#e5e5e5] mb-[1.5em] pb-[1.5em];
}

.w-100 {
  width: 100% !important;
}

::v-deep .el-checkbox__label {
  flex: 1;
}

::v-deep .el-checkbox__input {
  display: none;
}
</style>
