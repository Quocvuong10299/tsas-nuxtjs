<template>
  <v-app dark>
    <Header />
    <transition name="page">
      <v-main>
        <nuxt />
      </v-main>
    </transition>
    <Footer />
  </v-app>
</template>
<script>
import Header from "~/components/header/index";
import Footer from "~/components/footer/index";
export default {
  transitions: "page",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      title: "Vuetify.js",
    };
  },
  computed: {},
};
</script>
