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
      {{miniCart}}
    </div>
  </div>

</template>

<script>
import {mapGetters} from 'vuex';
export default {
name: "MiniCart",
  data() {
    return {
      badgeColor: 'green',
      isVisible: false
    }
  },
  methods: {
    showMinicart() {
      this.isVisible = true;
    },
    hideMiniCart() {
      this.isVisible = false;
    }
  },
  computed: {
    qtyOfBooksInCart() {
      return this.booksInCart ? this.booksInCart : '0';
    },
    ...mapGetters('miniCart',[
        'miniCart', 'booksInCart'
    ])
  }
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
</style>