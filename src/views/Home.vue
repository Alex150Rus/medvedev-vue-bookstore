<template>

  <div class="home">


  <h1 class="green white--text text-center">

    &#171;Ничего не может быть приятнее, как жить в уединении, наслаждаться зрелищем природы и почитать иногда какую-нибудь книгу.&#187; Н.В. Гоголь.

  </h1>
    <div class="new-books float-right white--text">
      <p>каталог</p>
      <p>магазин</p>
      <p>стиль</p>
    </div>
  </div>


</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped lang="sass">
  .home
    background: url("../assets/img/nature-reading-pleasure.jpg")
    background-size: cover
    height: 100%
    h1
      font-size: 19px

  .new-books
    height: 100%
    padding-top: 25%
    p
      text-align: right
      font-size: 25px
      margin-right: 30px

  @media screen and (max-width: 400px)
    .home
      background-position-x: -255px

  @media (min-width: 401px) and (max-width: 520px)
      .home
        background-position-x: -155px


</style>
