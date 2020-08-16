<template>
  <v-expansion-panels>
    <v-expansion-panel
        v-for="(item, i) in authors"
        :key="i"
        class="js-listItem"
    >
      <v-expansion-panel-header>{{item.fullName}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import axios from 'axios';
export default {
<<<<<<< HEAD
name: "AuthorsList",
  data() {
    return {
      authors: []
    }
  },
  mounted() {
    axios.get('../json/authors.json')
        .then(response => this.authors = response.data)
  },
=======
name: "AuthorsList"
>>>>>>> parent of 63facc3... test work now))
}
</script>

<style scoped>

</style>