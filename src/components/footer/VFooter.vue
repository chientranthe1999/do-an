<template lang="html">
  <footer>
    <div class="w-full">
      <el-row>
        <el-col :span="6">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Web design</a></li>
            <li><a href="#">Development</a></li>
            <li><a href="#">Hosting</a></li>
          </ul>
        </el-col>
        <el-col :span="6">
          <h3>About</h3>
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Legacy</a></li>
          </ul>
        </el-col>
        <el-col :span="6">
          <h3>Careers</h3>
          <ul>
            <li><a href="#">Job openings</a></li>
            <li><a href="#">Employee success</a></li>
            <li><a href="#">Benefits</a></li>
          </ul>
        </el-col>
        <el-col :span="6">
          <a href="#"><i class="icon ion-social-facebook"></i></a>
          <a href="#"><i class="icon ion-social-twitter"></i></a>
          <a href="#"><i class="icon ion-social-snapchat"></i></a>
          <a href="#"><i class="icon ion-social-instagram"></i></a>
        </el-col>
      </el-row>
    </div>
    <p class="text-center bg-[#1f2d4f] text-[white] w-full py-[1em]">Company Name © 2018</p>
  </footer>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
footer {
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  margin-top: 28px;
}

footer > div {
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 2em 1.25rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
}
</style>
