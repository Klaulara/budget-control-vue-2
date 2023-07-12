<template>
  <div class="row justify-content-center">
    <div class="col-8 bg-white m-3 p-3 rounded text-success border border-success">
      <h4>Category List</h4>
      <div class="container" v-if="categories.length > 0">
        <ol class="mt-3">
          <li class="m-2" v-for="category in categories" :key="category.id">
              <img class="d-inline" width="30px" v-bind:src="category.image" :alt="category.name" />
              <p class="ms-3 d-inline me-3">{{ category.name }}</p>
              <input class="btn btn-success me-2" type="button" @click="onEdit(category.id)" value="Edit"/>
              <input class="btn btn-danger" type="button" @click="onDelete(category.id)"  value="Delete"/>
          </li>
        </ol>
      </div>
    </div>
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
    onEdit(id) {
      this.$router.push(`/category/${id}`);
    },
    async onDelete(id) {
      await axios.delete(`http://localhost:3000/api/v1/category/${id}`)
      .then((response) => {
        console.log(response);
        this.getCategories();
      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
  mounted() {
    this.getCategories();
  },
};
</script>
