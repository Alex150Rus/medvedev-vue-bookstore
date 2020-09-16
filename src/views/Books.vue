<template>

    <v-container fluid class="ml-4 mr-4">
      <v-row class="justify-center">
        <h1 >Книги</h1>
      </v-row>
      <v-row>
        <books-search-input @searchParamChange="setSearchParam"/>
      </v-row>
      <v-row class="justify-end">
       <add-book-form  @new-book="addNewBook"/>
      </v-row>
      <books-grid :searchParam="searchParam" :newBook="newBook"/>
    </v-container>

</template>

<script>

    import AddBookForm from "@/components/books/AddBookForm";
    import BooksGrid from "@/components/books/BooksGrid";
    import BooksSearchInput from "@/components/books/BooksSearchInput";

    export default {
      name: "Books",
      components: {AddBookForm, BooksGrid, BooksSearchInput},
      data: () => {
        return {
          searchParam: '',
          newBook: {},
        }
      },
      methods: {
        setSearchParam: function (searchParam) {
          this.searchParam = searchParam;
        },
        addNewBook: function (payload) {
          this.newBook = payload;
        }
      }
    }
</script>

<style scoped lang="sass">

</style>