<template>
  <div class="wrapper">
    <div class="header__banner mb70">
      <div class="image-banner-top pt_35percent pl135 bg_1 position-relative">
        <div class="ellipse">
          <h2 class="max-w200">Giới thiệu về chúng tôi</h2>
        </div>
      </div>
    </div>
    <div class="container mb70">
      <div class="row">
        <div class="col-lg-6 col-md-6 cl-12">
          <h2 class="max-w570">Với sứ mệnh tạo điều kiện thuận lợi cho thế hệ trẻ Việt Nam có cơ hội giao lưu, học
            tập</h2>
        </div>
        <div class="col-lg-6 col-md-6 cl-12">
          <p class="max-w570">Với sứ mệnh tạo điều kiện thuận lợi cho thế hệ trẻ Việt Nam có cơ hội giao lưu, học tập,
            nâng cao kỹ năng và phát triển năng lực bản thân trong môi trường quốc tế chuyên nghiệp, T.SAS đã và đang
            phấn đấu trở thành một trong những công ty cung cấp các dịch vụ du lịch và tư vấn du học hàng đầu tại Việt
            Nam.<br>
            <br>
            Với phương châm hoạt động: "Uy tín, Trách nhiệm, Tận tình, Hiệu quả", T.SAS đã tạo ra nhiều điểm khác biệt
            trong dịch vụ mà TSAS đang cung cấp. </p>
        </div>
      </div>
    </div>
    <div class="services mb100">
      <div class="products">
        <v-container>
          <div class="products__content">
            <v-row>
              <v-col lg="6" cols="12" class="pa-0 overflow-hidden">
                <div class="pt100percent image-cover position-relative product img_about1">
                  <div class="product__content">
                    <h4 class="text-white">01.</h4>
                    <h2 class="max-w405 text-white">Tư vấn dịch vụ du học,
                      Định cư, hồ sơ xin visa</h2>
                  </div>
                </div>
              </v-col>
              <v-col lg="6" cols="12" class="pa-0 overflow-hidden">
                <div class="pt100percent image-cover position-relative product img_about2">
                  <div class="product__content">
                    <h4 class="text-white">02.</h4>
                    <h2 class="max-w405 text-white">Dịch vụ tổ chức các tour du lịch </h2>
                  </div>
                </div>
              </v-col>
              <v-col lg="6" cols="12" class="pa-0 overflow-hidden">
                <div class="pt100percent image-cover position-relative product img_about3">
                  <div class="product__content">
                    <h4 class="text-white">03.</h4>
                    <h2 class="max-w405 text-white">Đại lý vé máy bay cấp 2</h2>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </div>
    <div class="usp bg-color_1 pt70">
      <v-container>
        <h1 class="text-white mb50">Điểm khác biệt trong dịch vụ của TSAS</h1>
        <v-row class="pb70">
          <div class="col-20 box">
            <div class="icon mb30px" v-html="icOne"></div>
            <h4 class="box__title max-w200 text-white">
              Miễn phí tư vấn
            </h4>
          </div>
          <div class="col-20 box">
            <div class="icon mb30px" v-html="icTwo"></div>
            <h4 class="box__title max-w200 text-white">
              Chất lượng trường tư vấn tốt, tỷ lệ đậu cao
            </h4>
          </div>
          <div class="col-20 box">
            <div class="icon mb30px" v-html="icThree"></div>
            <h4 class="box__title max-w200 text-white">
              Chú trọng đến thị trường Úc, Mỹ, Nhật với nhiều lợi thế về mối quan hệ đối
              tác và các trường
            </h4>
          </div>
          <div class="col-20 box">
            <div class="icon mb30px" v-html="icFour"></div>
            <h4 class="box__title max-w200 text-white">
              Chương trình Tour du lịch trải nghiệm Nhật Bản với nhiều điểm hấp dẫn, mới
              lạ, phù hợp với yêu cầu và sự quan tâm của du khách
            </h4>
          </div>
          <div class="col-20 box">
            <div class="icon mb30px" v-html="icFive"></div>
            <h4 class="box__title max-w200 text-white">
              Được sự hỗ trợ rất lớn từ phía các trường và đối tác tại Nhật Bản
            </h4>
          </div>
        </v-row>
      </v-container>
    </div>

  </div>
</template>
<script>

export default {
  data(){
    return{}
  },
  computed:{
    icOne(){
      const icOne = require(`assets/images/ic-money.svg?raw`)
      return icOne
    },
    icTwo(){
      const icOne = require(`assets/images/ic-recommended.svg?raw`)
      return icOne
    },
    icThree(){
      const icOne = require(`assets/images/ic-money.svg?raw`)
      return icOne
    },
    icFour(){
      const icOne = require(`assets/images/ic-handshake.svg?raw`)
      return icOne
    },
    icFive(){
      const icOne = require(`assets/images/ic-air.svg?raw`)
      return icOne
    }
  }
}
</script>
<style scoped>
.bg_1 {
  background-image: url("~assets/images/bg_2.jpg");
}

.img_about1 {
  background-image: url("~assets/images/about1.jpg");
}

.img_about2 {
  background-image: url("~assets/images/about2.jpg");
}

.img_about3 {
  background-image: url("~assets/images/about3.jpg");
}
</style>
