<template>
  <div class="wrapper">
    <bannerPartner />
    <v-container class="mb70">
      <v-row>
        <v-col
          lg="3"
          cols="12"
          class="pa-0 overflow-hidden d-flex"
        >
          <div>
            <div class="logo-partner logo-partner-1 image-cover position-relative mg-auto" />
          </div>
        </v-col>
        <v-col
          lg="3"
          cols="12"
          class="pa-0 overflow-hidden d-flex"
        >
          <div>
            <div class="logo-partner logo-partner-2 image-cover position-relative mg-auto" />
          </div>
        </v-col>
        <v-col
          lg="3"
          cols="12"
          class="pa-0 overflow-hidden d-flex"
        >
          <div>
            <div class="logo-partner logo-partner-3 image-cover position-relative mg-auto" />
          </div>
        </v-col>
        <v-col
          lg="3"
          cols="12"
          class="pa-0 overflow-hidden d-flex"
        >
          <div>
            <div class="logo-partner logo-partner-4 image-cover position-relative mg-auto" />
          </div>
        </v-col>
        <v-col
          lg="3"
          cols="12"
          class="pa-0 overflow-hidden d-flex"
        >
          <div>
            <div class="logo-partner logo-partner-5 image-cover position-relative mg-auto" />
          </div>
        </v-col>
        <v-col
          lg="3"
          cols="12"
          class="pa-0 overflow-hidden d-flex"
        >
          <div>
            <div class="logo-partner logo-partner-6 image-cover position-relative mg-auto" />
          </div>
        </v-col>
        <v-col
          lg="3"
          cols="12"
          class="pa-0 overflow-hidden d-flex"
        >
          <div>
            <div class="logo-partner logo-partner-7 image-cover position-relative mg-auto" />
          </div>
        </v-col>
        <v-col
          lg="3"
          cols="12"
          class="pa-0 overflow-hidden d-flex"
        >
          <div>
            <div class="logo-partner logo-partner-8 image-cover position-relative mg-auto" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import bannerPartner from "~/components/banner/bannerPartner";
export default {
  components:{
    bannerPartner,
  },
  data () {
    return {};
  },
  computed: {
  }
};
</script>
<style scoped>
.logo-partner{
  width: 270px;
  height: 270px;
}

.logo-partner-1{
  background-image: url("~assets/images/partner-holidaytravel.png");
}

.logo-partner-2{
  background-image: url("~assets/images/partner-azad.png");
}

.logo-partner-3{
  background-image: url("~assets/images/partner-customasia.png");
}

.logo-partner-4{
  background-image: url("~assets/images/partner-redbacktravel.png");
}

.logo-partner-5{
  background-image: url("~assets/images/partner-nimbus.png");
}

.logo-partner-6{
  background-image: url("~assets/images/partner-doufexis.png");
}

.logo-partner-7{
  background-image: url("~assets/images/partner-sukoon.png");
}

.logo-partner-8{
  background-image: url("~assets/images/partner-royalhelvetia.png");
}
</style>
