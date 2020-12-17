<template>
  <v-app dark>
    <Header />
    <v-main>
        <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Header from '~/components/header/index'
export default {
  components:{
    Header
  },
  data () {
    return {
      title: 'Vuetify.js'
    }
  }
}
</script>
