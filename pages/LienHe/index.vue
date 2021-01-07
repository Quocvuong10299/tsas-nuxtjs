<template>
  <div class="wrapper">
    <div class="header__banner">
      <div class="image-banner-top pt_35percent pl135 bg_1 position-relative">
        <div class="ellipse">
          <h2 class="max-w200">
            Liên hệ với chúng tôi
          </h2>
        </div>
      </div>
    </div>
    <div class="container d-flex mb70">
      <div class="col-lg-6 col-md-6 col-12 bg-color_3">
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
      <div class="w-100 mg-0">
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
    <div class="container mb70">
      <h1 class="text-center font-weight-700">
        Để lại lời nhắn
      </h1>
      <div class="mb50 mt-30 ">
        <form
          action="#"
          method="post"
          enctype="multipart/form-data"
        >
          <ul>
            <li>
              <input
                class="contact-form"
                type="text"
                placeholder="Họ và tên"
                aria-label="Label"
              >
            </li>
            <li>
              <input
                class="contact-form"
                type="text"
                placeholder="SĐT"
                aria-label="Label"
              >
            </li>
            <li>
              <input
                class="contact-form"
                type="text"
                placeholder="Email"
                aria-label="Label"
              >
            </li>
            <li>
              <textarea
                id=""
                class="contact-textarea"
                name=""
                cols="30"
                rows="10"
                placeholder="Lời nhắn"
              />
            </li>
          </ul>
        </form>
      </div>
      <a
        type="submit"
        href="#"
        class="btn btn-primary custom-responsive d-block text-center mg-auto w-submit"
      >
        Gửi
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {};
  },
  computed: {
  }
};
</script>
<style scoped>
.bg_1 {
  background-image: url("~assets/images/bg_7.jpg");
}
.w-contact-text{
  width: 470px;
  height: 177px;
}

.w-submit{
  width: 120px;
  height: 60px;
}


</style>
