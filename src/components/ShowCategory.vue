<template>
  <div class="container" v-if="categories.length > 0">
    <ul>
      <li v-for="category in categories" :key="category.id">
        <p>{{ category.name }}</p>
        <p>{{ category.url }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShowCategory",
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    async getCategories() {
      await axios
        .get("http://localhost:3000/api/v1/category")
        .then((response) => {
          this.categories = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>
