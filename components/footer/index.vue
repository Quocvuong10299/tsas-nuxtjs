<template>
  <div class="footer bg-color_2 pt60">
    <v-container>
      <div class="footer__top pb40">
        <v-row>
          <v-col
            lg="8"
            md="8"
            cols="12"
          >
            <h3 class="text-opacity0_5 text-white mb20px">
              Liên kết
            </h3>
            <ul class="d-flex px-0 menu__footer">
              <li class="position-relative mr-50 hover-item-menu">
                <NuxtLink
                  class="text-white"
                  :to="{name:'index'}"
                >
                  Trang chủ
                </NuxtLink>
              </li>
              <li class="position-relative mr-50 hover-item-menu">
                <NuxtLink
                  class="text-white"
                  :to="{name:'GioiThieu'}"
                >
                  Giới thiệu
                </NuxtLink>
              </li>
              <li class="position-relative mr-50 hover-item-menu">
                <NuxtLink
                  class="text-white"
                  :to="{name:'DichVu'}"
                >
                  Dịch vụ
                </NuxtLink>
              </li>
              <li class="position-relative mr-50 hover-item-menu">
                <NuxtLink
                  class="text-white"
                  :to="{name:'TinTuc'}"
                >
                  Tin tức
                </NuxtLink>
              </li>
              <li class="position-relative mr-50 hover-item-menu">
                <NuxtLink
                  class="text-white"
                  :to="{name:'DoiTac'}"
                >
                  Đối tác
                </NuxtLink>
              </li>
              <li class="position-relative mr-50 hover-item-menu">
                <NuxtLink
                  class="text-white"
                  :to="{name:'LienHe'}"
                >
                  Liên hệ
                </NuxtLink>
              </li>
            </ul>
          </v-col>
          <v-col
            lg="4"
            md="4"
            cols="12"
          >
            <h3 class="text-opacity0_5 text-white mb20px">
              Mạng xã hội
            </h3>
            <ul class="d-flex px-0">
              <li class="mr-30">
                <a href="#"><div v-html="icFb" /></a>
              </li>
              <li class="mr-30">
                <a href="#"><div v-html="icInta" /></a>
              </li>
              <li class="mr-30">
                <a href="#"><div v-html="icTw" /></a>
              </li>
              <li class="mr-30">
                <a href="#"><div v-html="icYou" /></a>
              </li>
            </ul>
          </v-col>
        </v-row>
      </div>
      <hr class="hr">
      <div class="footer__bottom pb60 pt40">
        <p class="copyright">
          Copyright © 2019 Goha. All Rights Reserved. Powered by Letweb
        </p>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
    name:"Footer",
    data(){
      return{};
    },
    computed: {
    icFb(){
      const icFb = require("assets/images/ic-fb.svg?raw");
      return icFb;
    },
      icInta(){
        const icInta = require("assets/images/ic-inta.svg?raw");
        return icInta;
      },
      icTw(){
        const icTw = require("assets/images/ic-tw.svg?raw");
        return icTw;
      },
      icYou(){
        const icYou = require("assets/images/ic-you.svg?raw");
        return icYou;
      }
  }
};
</script>
