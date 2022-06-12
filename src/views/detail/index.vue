<template lang="html">
  <div>
    <el-row :gutter="24">
      <el-col :sm="24" :md="16">
        <!-- main content -->
        <section class="detail-items">
          <h2 class="font-bold text-[1.25rem]">Sân bóng đá Minh Kiệt Dương Nội - Hà Đông</h2>
          <span><i class="el-icon-star-on text-[#fadb14]" v-for="i in 5" :key="i" /> (1 đánh giá)</span>
          <p class="mb-[1.5em]">
            <i class="el-icon-location" />
            <span>
              Trường phổ thông quốc tế VIS, Aeon Mall Hà Đông, Nguyễn Hoàng Quyết, Dương Nội, Hà Đông, Hà Nội
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

        <!-- service list -->
        <section class="detail-items">
          <p class="font-bold text-[1.25rem] mb-[1em]">Tiện tích tại sân</p>
          <el-row>
            <el-col :md="8" class="flex items-center h-[40px]">
              <img class="h-[30px] mr-[0.25em]" src="@/icons/wifi.svg" />Wifi
            </el-col>
            <el-col :md="8" class="flex items-center h-[40px]">
              <img class="h-[30px] mr-[0.25em]" src="@/icons/car.svg" />Giữ xe
            </el-col>
            <el-col :md="8" class="flex items-center h-[40px]">
              <img class="h-[30px] mr-[0.25em]" src="@/icons/grocery.svg" />Căng tin
            </el-col>
            <el-col :md="8" class="flex items-center h-[40px]">
              <img class="h-[30px] mr-[0.25em]" src="@/icons/livestream.svg" />Livestream
            </el-col>
          </el-row>
        </section>

        <!-- comment -->
        <section class="detail-items">
          <p class="font-bold text-[1.25rem] mb-[1em]">Đánh giá sân bóng Minh Kiệt Dương Nội</p>
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
      <!-- Booking -->
      <el-col :sm="24" :md="8">
        <section>
          <p class="font-bold text-[1.25rem] mb-[1em]">Đặt sân</p>

          <el-radio-group>
            <el-radio-button label="New York">10:00</el-radio-button>
            <el-radio-button label="Washington">11:30</el-radio-button>
            <el-radio-button label="Los Angeles"></el-radio-button>
            <el-radio-button label="Chicago"></el-radio-button>
          </el-radio-group>
        </section>
      </el-col>
    </el-row>

    <!-- near station -->
    <section class="detail-items">
      <p class="card-header">Sân bóng đá gần sân Minh Kiệt Dương Nội</p>
      <el-row :gutter="24">
        <el-col :xs="12" :md="12" :sm="12" :lg="6" :xl="6" v-for="i in 4" :key="i" class="mb-[1em]">
          <v-card />
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Detail'
}
</script>
<style lang="css">
.detail-items {
  @apply border-b-[1px] border-[#e5e5e5] mb-[1.5em] pb-[1.5em];
}
</style>
