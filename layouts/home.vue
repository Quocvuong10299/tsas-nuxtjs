<template>
  <v-app dark>
    <Header />
    <transition name="home">
      <v-main>
        <nuxt />
      </v-main>
    </transition>
  </v-app>
</template>

<script>
import Header from "~/components/layout/header/index";
export default {
  transitions: "home",
  components: {
    Header,
  },
  data() {
    return {
      title: "Vuetify.js",
    };
  },
};
</script>
