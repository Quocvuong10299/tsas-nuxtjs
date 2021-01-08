<template>
  <div class="header d-flex align-center">
    <v-container>
      <div class="d-flex justify-space-between align-center header__top">
        <a class="header__logo">
          <img
            src="~/assets/images/logo.png"
            alt=""
            style="max-width:163px"
          >
        </a>
        <div class="header__menu">
          <ul class="d-flex my-0 px-0">
            <li class="ml-40 text-nav">
              <NuxtLink :to="{ name: 'index'}">
                Trang chủ
              </NuxtLink>
            </li>

            <li class="ml-40 text-nav">
              <NuxtLink :to="{ name: 'GioiThieu'}">
                Giới thiệu
              </NuxtLink>
            </li>

            <li class="ml-40 text-nav">
              <NuxtLink :to="{ name: 'DichVu'}">
                Dịch vụ
              </NuxtLink>
            </li>

            <li class="ml-40 text-nav">
              <NuxtLink :to="{ name: 'TinTuc'}">
                Tin tức
              </NuxtLink>
            </li>

            <li class="ml-40 text-nav">
              <NuxtLink :to="{ name: 'DoiTac'}">
                Đối tác
              </NuxtLink>
            </li>

            <li class="ml-40 text-nav">
              <NuxtLink :to="{ name: 'LienHe'}">
                Liên hệ
              </NuxtLink>
            </li>
          </ul>
        </div>
        <a
          href="tel:0909 090 909"
          class="btn btn-primary custom-responsive"
        >
          <div v-html="icPhone" />
          0909 090 909
        </a>
      </div>
    </v-container>
  </div>
</template>
<script>

export default {
    name:"Header",
    components:{

    },
    computed: {
        icPhone() {
            const icPhone = require("~/assets/images/ic-phone.svg");
            return icPhone;
        }
    }
};
</script>
