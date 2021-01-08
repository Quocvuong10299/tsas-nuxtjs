<template>
  <div class="wrapper">
    <bannerContact />
    <div class="d-flex mb70">
      <div class="row">
        <div class="container col-lg-6 col-md-6 col-12 bg-color_3">
          <h1 class="pb20 text-red ml-135 mt-78">
            <b>Thông tin liên hệ</b>
          </h1>
          <div class="w-contact-text ml-135">
            <h3 class="mb16">
              <b>CÔNG TY TSAS</b>
            </h3>
            <p><b>Địa chỉ:</b> 01 Lê Duẩn, P. Bến Nghé, Q.1, TPHCM</p>
            <p><b>HOTLINE:</b> 1900 0909</p>
            <p><b>Email:</b> contact@gmail.com</p>
            <p><b>Website:</b> tsas.com</p>
          </div>
        </div>
        <div class="mg-0 col-lg-6 col-md-6 col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501725.3392797349!2d106.41435305930801!3d10.755340456434432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1609960821487!5m2!1svi!2s"
            width="100%"
            height="400"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </div>
      </div>
    </div>
    <contactForm />
  </div>
</template>
<script>
import contactForm from "~/components/form/contactForm";
import bannerContact from "~/components/banner/bannerContact";
export default {
  components:{
    contactForm,
    bannerContact,
  },
  data () {
    return {};
  },
  computed: {
  }
};
</script>
<style scoped>
.w-contact-text{
  width: 470px;
  height: 177px;
}
</style>
