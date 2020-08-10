<template>

    <v-container fluid>
      <v-row>
        <v-col :md=4 offset-md="4">
          <v-text-field label="Название, год выпуска, категория, цена" v-model.trim.lazy="searchParam" v-on:input="findBooks">
            <v-icon slot="append" color="red">mdi-magnify</v-icon>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col
            v-for="(book, idx) of computedBooks"
            :key="idx"
            :lg=3
            :md=4
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
              <v-btn text>{{book.price}} руб</v-btn>

              <v-btn
                  color="purple"
                  text
              >
                В корзину
              </v-btn>

              <v-btn text>
                <v-icon color="grey">mdi-heart</v-icon>
              </v-btn>

              <v-btn
                  icon
                  @click="chevronClick(idx)"
              >
                <v-icon>{{ shortDescriptionToggleState[idx] ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div :id="idx" v-show="shortDescriptionToggleState[idx]">
                <v-divider></v-divider>

                <v-card-text class="text-justify">
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
                shortDescriptionToggleState: [],
                searchParam: '',
            }
        },
        mounted() {
            fetch('../json/books.json')
                .then(response => response.json())
                .then(json => {
                  this.books = this.computedBooks = json;
                  this.shortDescriptionToggleState = new Array(this.books.length).fill(false);
                })
        },
        methods: {
          chevronClick: function (idx) {
            this.shortDescriptionToggleState = this.shortDescriptionToggleState.map((elem, index) => {
              if(index === idx)
                return elem =!elem;
            })
          },
          findBooks: function()  {
            this.computedBooks = this.books;
            const array = []
            let elem;
            let item = new RegExp(this.searchParam, 'i');
            for (elem of this.books) {
              if(item.test(elem.title) || item.test(elem.year) || item.test(elem.cat) || item.test(elem.price)) {
                array.push(elem);
              }
            }

            this.computedBooks = array;
          }
        },
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