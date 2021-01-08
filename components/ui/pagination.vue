<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="5"
    />
  </div>
</template>

<script>
export default {
  name: "pagination.vue",
  data () {
    return {
      page: 1,
    };
  },
};
</script>

<style scoped>

</style>
