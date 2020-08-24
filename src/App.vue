<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-list dense>

        <router-link to="/" class="text-decoration-none">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Домашняя
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/books" class="text-decoration-none">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-book-open-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Книги
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/authors" class="text-decoration-none">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account-edit</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
               Авторы
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Контакты</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <router-link to="/about" class="text-decoration-none">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                О проекте
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        color="indigo"
        dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Книжный клуб Сова</v-toolbar-title>
      <v-spacer></v-spacer>
      <mini-cart/>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer
        color="indigo"
        app
    >
      <span class="white--text">&copy; Alex Medvedev {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import MiniCart from "@/components/cart/MiniCart";

export default {
  components: {MiniCart},
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
}
</script>

<!--<script>-->
<!--import HelloWorld from './components/HelloWorld';-->

<!--export default {-->
<!--  name: 'App',-->

<!--  components: {-->
<!--    HelloWorld,-->
<!--  },-->

<!--  data: () => ({-->
<!--    //-->
<!--  }),-->
<!--};-->
<!--</script>-->
