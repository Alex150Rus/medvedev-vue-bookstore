<template>
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
              @click="addBookToCart(book)"
          >
            В корзину
          </v-btn>

          <v-btn text @click="doFavsArrayMutation(book)">
            <v-icon :color="isInFavs(book)">mdi-heart</v-icon>
          </v-btn>

          <v-btn
              icon
              @click="chevronClick(idx)"
              :id="idx"
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
</template>

<script>
import axios from 'axios';
import {mapActions, mapGetters, mapMutations} from 'vuex';
export default {
name: "BooksGrid",
  props: ['searchParam', 'newBook'],
  data(){
    return {
      books: [],
      shortDescriptionToggleState: [],
    }
  },
  created() {
  console.log(this.getFavs);
    axios.get('../json/books.json')
        .then(response => {
          this.books = this.computedBooks = response.data;
          this.shortDescriptionToggleState = new Array(this.books.length).fill(false);
        })
  },
  watch: {
    newBook: function () {
      this.books = this.books.concat([this.newBook])
    }
  },
  methods: {
    chevronClick: function (idx) {
      this.shortDescriptionToggleState = this.shortDescriptionToggleState.map((elem, index) => {
        if(index === idx)
          return elem =!elem;
      })
    },
    isInFavs: function(book) {
     return this.getFavs.find(elem => elem.ISBN === book.ISBN) === undefined ? 'grey' : 'red';
    },
    ...mapActions('miniCart', [
      'addBookToCart'
    ]),
    ...mapMutations('favourites', ['doFavsArrayMutation'])
  },
  computed: {
      computedBooks: {
        get: function() {
          return this.books.filter((elem) => {
            const item = new RegExp(this.searchParam, 'i');
            return item.test(elem.title) || item.test(elem.year) || item.test(elem.cat) || item.test(elem.price)
          });
        },
        set: function(){
          //без сетера ругается на его отсутствие
            return this.books;
        }
      },

    ...mapGetters('favourites', ['getFavs']),
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