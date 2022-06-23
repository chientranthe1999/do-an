<template lang="html">
  <header class="p-[1em] mb-[1.5em] box-shadow-1 flex justify-between items-center">
    <p>Logo</p>

    <div class="flex items-center">
      <p class="mr-[1.5em] hover:text-main cursor-pointer" @click="$router.push({ name: 'NewsList' })">
        <i class="el-icon-notebook-1" />
        <span>Tin tức</span>
      </p>

      <p class="mr-[1.5em] hover:text-main cursor-pointer" @click="$router.push({ name: 'FindOpponent' })">
        <i class="el-icon-search" />
        <span>Tìm đối</span>
      </p>
      <p class="mr-[1.5em] hover:text-main cursor-pointer">
        <i class="el-icon-s-goods" />
        <span>Giỏ hàng</span>
      </p>

      <p class="mr-[1em] hover:text-main cursor-pointer" @click="$router.push({ name: 'Login' })" v-if="!token">
        <i class="el-icon-s-custom" />
        <span>Đăng nhập</span>
      </p>

      <div class="right-menu" v-else>
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper no-select flex items-center">
            <el-avatar icon="el-icon-user-solid" class="avt-image" />
            <span>{{ name }}</span>
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <el-dropdown-item @click.native="$router.push({ name: 'Charge' })">
              <span style="display: block">Nạp tiền</span>
            </el-dropdown-item>
            <el-dropdown-item @click.native="logout">
              <span style="display: block">Đăng xuất</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'VHeader',

  computed: {
    name() {
      return this.$store.getters['name']
    },

    token() {
      return this.$store.getters['token']
    }
  },

  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
<style lang="scss">
.right-menu {
  float: right;
  height: 100%;
  line-height: 50px;

  &:focus {
    outline: none;
  }

  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    font-size: 18px;
    color: #5a5e66;
    vertical-align: text-bottom;

    &.hover-effect {
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
  }

  .avatar-container {
    margin-right: 30px;

    .avatar-wrapper {
      cursor: pointer;
      font-weight: 600;
      position: relative;

      .avt-image {
        margin-right: 8px;
      }
    }
  }
}
</style>
