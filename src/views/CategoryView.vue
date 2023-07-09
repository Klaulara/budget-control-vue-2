<template>
  <div class="container">
    <ShowCategory />
    <NewCategory @new-category="addNewCategory" />
  </div>
</template>

<script>
import axios from "axios";
import ShowCategory from "../components/ShowCategory.vue";
import NewCategory from "../components/NewCategory.vue";

export default {
  name: "CategoryView",
  components: {
    ShowCategory,
    NewCategory,
  },
  methods: {
    async addNewCategory(category) {
      await axios
        .post("http://localhost:3000/api/v1/category", category)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
