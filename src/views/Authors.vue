<template>
  <v-container fluid class="ml-4 mr-4">
    <v-row class="justify-center">
      <h1>Авторы</h1>
    </v-row>
    <v-row>
      <v-col :md=4 offset-md=4 :sm=8 offset-sm="2">
        <authors-list></authors-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import AuthorsList from "@/components/authors/AuthorsList";

    export default {
      components: {AuthorsList},
        name: "Authors"
    }
</script>

<style scoped>

</style>