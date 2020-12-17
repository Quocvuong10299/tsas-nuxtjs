<template>
  <v-app dark>
    <Header />
    <v-main>
        <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '~/components/header/index'
import Footer from '~/components/footer/index'
export default {
  components:{
    Header,
    Footer
  },
  data () {
    return {
      title: 'Vuetify.js'
    }
  }
}
</script>
