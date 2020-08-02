<template>
    <div>
        <book-card :item="item" v-for="(item, index) in books" :key="index"></book-card>
    </div>
</template>

export default {
name: 'Home',
components: {
HelloWorld
}
<script>
    // @ is an alias to /src
    import BookCard from '@/components/cards/BookCard.vue'

    export default {
        name: "Books",
        components: {
            BookCard
        },
        data(){
            return {
                books: []
            }
        },
        mounted() {
            fetch('../json/books.json')
                .then(response => response.json())
                .then(json => this.books = json);
        }
    }
</script>

<style scoped>

</style>