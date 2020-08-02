<template>
  <div class="home">
    <img alt="book club logo" src="../assets/books_logo.jpg">
    <HelloWorld msg="Добро пожаловать в книжный клуб Сова"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
