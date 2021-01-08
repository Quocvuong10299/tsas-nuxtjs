<template>
  <div class="wrapper">
    <v-row no-gutters>
      <v-col
        cols="12"
        md="3"
        lg="3"
        class="overflow-hidden"
      >
        <div
          class="image-cover min-h100percent position-relative image-banner-hover img1"
        >
          <h2 class="max-w260 title-banner text-color_3">
            Tư vấn<br>du học
          </h2>
          <div
            class="ic-hover"
            v-html="icArrow"
          />
        </div>
      </v-col>

      <v-col
        cols="12"
        md="3"
        lg="3"
        class="overflow-hidden"
      >
        <div
          class="image-cover min-h100percent position-relative image-banner-hover img2"
        >
          <h2 class="max-w260 title-banner text-color_3">
            Tư vấn<br>định cư
          </h2>
          <div
            class="ic-hover"
            v-html="icArrow"
          />
        </div>
      </v-col>

      <v-col
        cols="12"
        md="3"
        lg="3"
        class="overflow-hidden"
      >
        <div
          class="image-cover min-h100percent position-relative image-banner-hover img3"
        >
          <h2 class="max-w260 title-banner text-color_3">
            Du lịch
          </h2>
          <div
            class="ic-hover"
            v-html="icArrow"
          />
        </div>
      </v-col>

      <v-col
        cols="12"
        md="3"
        lg="3"
        class="overflow-hidden"
      >
        <div
          class="image-cover min-h100percent position-relative image-banner-hover img4"
        >
          <h2 class="max-w260 title-banner text-color_3">
            Vé<br>máy bay
          </h2>
          <span
            class="ic-hover"
            v-html="icArrow"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  // layout: "home",
  title: "Trang chu",
  components: {},
  data () {
    return {};
  },
  computed: {
    icArrow () {
      const icArrow = require("assets/images/arrow-right.svg?raw");
      return icArrow;
    },
  },
};
</script>
<style scoped>
.img1 {
  background-image: url("~assets/images/home_1.jpg");
}

.img2 {
  background-image: url("~assets/images/home_2.jpg");
}

.img3 {
  background-image: url("~assets/images/home_3.jpg");
}

.img4 {
  background-image: url("~assets/images/home_4.jpg");
}
</style>
