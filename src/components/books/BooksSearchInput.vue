<template>
  <v-col :md=4 offset-md=4 :sm=8 offset-sm="2" class="pr-12">
    <v-text-field label="Название, год выпуска, категория, цена" v-model.trim.lazy="searchParam" v-on:input="newSearchParam">
      <v-icon slot="append" color="red">mdi-magnify</v-icon>
    </v-text-field>
  </v-col>
</template>

<script>
export default {
name: "BooksSearchInput",
  data(){
    return {
      searchParam: '',
    }
  },
  methods: {
    newSearchParam: function() {
      this.$emit('searchParamChange', this.searchParam)
    }
  }
}
</script>

<style scoped>

</style>