<template>
  <div class="miniCart" v-on:mouseenter="showMinicart" v-on:mouseleave="hideMiniCart">
    <div>
      <v-icon class="miniCart__icon">mdi-cart</v-icon>
      <v-badge
          inline
          v-bind:color="badgeColor"
          v-bind:content="qtyOfBooksInCart"
          class="miniCart__badge"
      ></v-badge>
    </div>
    <div class="miniCart__block"
         v-show="isVisible"
    >
      <v-container>
        <v-row dense>
          <v-col
              v-for="(item, i) in miniCart"
              :key="i"
              cols="12"
          >
          <v-card
              dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                    class="headline"
                    v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.authors"></v-card-subtitle>
                <v-card-text
                    v-text="getQtyAndTotalAmount(item.ISBN)"
                >
                </v-card-text>
                <v-card-actions>
                  <v-btn small @click="removeBookFromCart(item.ISBN)"><span>убрать из корзины</span></v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                  class="ma-3"
                  size="125"
                  tile
              >
                <v-img :src="'/assets/img/card/' + item.img"></v-img>
              </v-avatar>
            </div>
          </v-card>
            </v-col>
        </v-row>
        <v-row v-show="miniCart.length">
          <v-col cols="12">
            <v-card dark>
              <v-card-title
                  v-text="`${getTotalQty} шт ${getTotalAmount} р.`"
              >
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
name: "MiniCart",
  data() {
    return {
      badgeColor: 'green',
      isVisible: false,
    }
  },

  methods: {
    showMinicart() {
      this.isVisible = true;
    },
    hideMiniCart() {
      this.isVisible = false;
    },
    ...mapActions('miniCart', [
      'removeBookFromCart'
    ]),
    getQtyAndTotalAmount(isbn) {
        const item = this.miniCart.find(item => item.ISBN === isbn)
        return item.qty + ' шт' + ` ${new Intl.NumberFormat('ru-RU').format(item.qty * item.price)} р.`
    },
  },
  computed: {
    qtyOfBooksInCart() {
      return this.booksInCart ? this.booksInCart : '0';
    },
    ...mapGetters('miniCart',[
        'miniCart','getTotalQty', 'getTotalAmount', 'booksInCart'
    ])
  },
}
</script>

<style scoped lang="sass">
  .miniCart
    position: relative
    &__badge
      font-weight: 900
    &__block
      position: absolute
      right: 0
      padding-top: 35%
      color: black
      height: 860px
      overflow: auto

  .v-card
    &__title
      word-break: unset
</style>