<template>

    <v-container fluid>
      <v-row dense>
        <v-col
            v-for="(book, idx) of books"
            :key="idx"
            :cols=3
        >
          <v-card
              class="mx-auto book mb-5"
              max-width="344"
          >
            <v-img
                :src="'/assets/img/card/' + book.img"
                height="380px"
            ></v-img>

            <v-card-title class="book__title">
              {{book.title}}
            </v-card-title>

            <v-card-subtitle class="book__author">
              {{ book.authors }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn text>Share</v-btn>

              <v-btn
                  color="purple"
                  text
              >
                Explore
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                  icon
                  @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  {{book.shortDescription}}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

</template>

<script>

    export default {
        name: "Books",
        data(){
            return {
                books: [],
                show: false
            }
        },
        mounted() {
            fetch('../json/books.json')
                .then(response => response.json())
                .then(json => this.books = json);

        }
    }
</script>

<style scoped lang="sass">

.book
  &__title
    word-break: unset
    height: 78px
    font-size: 1rem
    line-height: 1.1rem
  &__author
    height: 34px

</style>