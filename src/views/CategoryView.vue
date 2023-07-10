<template>
  <div class="container">
    <div class="row justify-content-center">
    <div class="col">
      <ShowCategory />
    </div>
    <div class="col">
      <NewCategory @new-category="addNewCategory" />
    </div>
  </div>
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
    async editCategory(id, category){
      await axios
        .put(`http://localhost:3000/api/v1/category/${id}`, category)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>
