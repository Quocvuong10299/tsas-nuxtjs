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
import Header from "@/components/layout/header/index";
import Footer from "@/components/layout/footer/index";
export default {
  transitions: "page",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      title: "Vuetify.js",
      isFooter: true,
    };
  },
  computed: {
    // getFooter() {
    //   if (this.$route.name === "index") {
    //     return (this.isFooter = false);
    //   }
    //   return (this.isFooter = true);
    // },
  },
};
</script>
