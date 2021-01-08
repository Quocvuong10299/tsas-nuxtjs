<template>
  <div class="container mb70">
    <h1 class="text-center font-weight-700">
      Để lại lời nhắn
    </h1>
    <div class="mb50 mt-30 ">
      <v-form
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
      </v-form>
    </div>
    <v-row
      align="center"
      justify="space-around"
    >
      <v-btn
        class="btn btn-primary custom-responsive d-block text-center mg-auto w-submit"
      >
        Gửi
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "contactForm.vue",

};
</script>

<style scoped>

</style>
