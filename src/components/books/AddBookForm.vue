<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="green lighten-10"
              dark
              v-bind="attrs"
              v-on="on"
              class="mb-2 mr-10"
          >
            Добавить книгу
          </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Информация о книге
        </v-card-title>

        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="ma-4"
        >
          <v-text-field
              v-model="title"
              :counter="150"
              :rules="titleRules"
              label="Название"
              required
          ></v-text-field>

          <v-text-field
              v-model="authors"
              :counter="150"
              :rules="authorsRules"
              label="Авторы"
              required
          ></v-text-field>

          <v-text-field
              v-model="ISBN"
              :counter="150"
              :rules="ISBNRules"
              label="ISBN"
              required
          ></v-text-field>

          <v-text-field
              v-model="img"
              :counter="150"
              :rules="imgRules"
              label="Название картинки"
              required
          ></v-text-field>

          <v-text-field
              v-model="shortDescription"
              :counter="250"
              :rules="shortDescriptionRules"
              label="Аннотация"
              required
          ></v-text-field>

          <v-text-field
              v-model="tags"
              :counter="150"
              :rules="tagsRules"
              label="Теги"
              required
          ></v-text-field>

          <v-text-field
              v-model="price"
              :counter="10"
              :rules="priceRules"
              label="Цена"
              required
          ></v-text-field>

          <v-text-field
              v-model="cat"
              :counter="150"
              :rules="catRules"
              label="Категория"
              required
          ></v-text-field>

          <v-text-field
              v-model="year"
              :counter="4"
              :rules="yearRules"
              label="Год выпуска"
              required
              class="mb-5"
          ></v-text-field>

          <v-btn
              color="error"
              class="mr-4 mb-4"
              @click="reset"
          >
            Reset Form
          </v-btn>

          <v-btn
              color="warning"
              class="mr-4 mb-4"
              @click="resetValidation"
          >
            Reset Validation
          </v-btn>

          <v-btn
              @click="submit"
              class="mb-4"
          >
            submit
          </v-btn>
        </v-form>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="dialog = false"
          >
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>
export default {
  'name' : 'addBookForm',
  data: () => ({
    valid: true,
    dialog: false,

    title: '',
    titleRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 150) || 'Title must be less than 150 characters',
    ],
    authors: '',
    authorsRules : [
      v => !!v || 'Authors are required',
      v => (v && v.length <= 150) || 'Authors must be less than 150 characters',
    ],
    ISBN: '',
    ISBNRules: [
      v => !!v || 'ISBN is required',
      v => (v && v.length <= 150) || 'ISBN must be less than 150 characters',
    ],
    img: '',
    imgRules: [
      v => !!v || 'image name is required',
      v => (v && v.length <= 150) || 'image name must be less than 150 characters',
    ],
    shortDescription: '',
    shortDescriptionRules: [
      v => !!v || 'shortDescription is required',
      v => (v && v.length <= 250) || 'shortDescription must be less than 250 characters',
    ],
    tags: '',
    tagsRules: [
      v => !!v || 'tag names are required',
      v => (v && v.length <= 150) || 'tag names must be less than 150 characters',
    ],
    price: '',
    priceRules: [
      v => !!v || 'price is required',
      v => (v && v.length <= 10) || 'price must be less than 10 characters',
      v => /^[0-9]+$/.test(v) || 'price must contain digits only',
    ],
    cat: '',
    catRules: [
      v => !!v || 'category name cat required',
      v => (v && v.length <= 150) || 'category name must be less than 150 characters',
    ],
    year: '',
    yearRules: [
      v => !!v || 'year is required',
      v => (v && v.length === 4) || 'year must consist of 4 characters',
      v => (v && Number.isInteger(+v)) || 'year must be integer'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    submit () {

      if (this.$refs.form.validate()) {
        const book = {
          ISBN: this.ISBN,
          title: this.title,
          authors: this.authors,
          img: this.img,
          shortDescription: this.shortDescription,
          tags: this.tags,
          price: this.price,
          cat: this.cat,
          year: this.year,
        };
        this.$emit('new-book', book);
        this.reset();
      }
    },
  },
}
</script>

<style scoped>

</style>