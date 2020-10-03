<template>
 <div class="favs">
   <v-icon class="favs__icon" color="red">mdi-heart</v-icon>
   <v-badge
       inline
       :color="badgeColor"
       :content="getFavsQty"
       class="favs__badge"
   ></v-badge>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
name: "Favs",
  data() {
    return {
      badgeColor: 'green',
    }
  },
  computed: {
  ...mapGetters('favourites', ['getFavsQty'])
  }
}
</script>

<style scoped lang="sass">
.favs
  &__badge
    font-weight: 900
</style>