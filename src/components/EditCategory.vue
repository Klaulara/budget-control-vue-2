<template>
  <div class="row justify-content-center">
    <div class="col-8 bg-success m-3 p-3 rounded text-light">
      <h4>Edit Category</h4>
      <form @submit.prevent="onUpdate">
        <div class="row fs-5 m-3">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" />
        </div>
        <div class="row fs-5 m-3">
          <label for="image">Image url</label>
          <input type="text" id="image" v-model="image" />
        </div>

        <input class="btn btn-outline-light" type="submit" value="Edit" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditCategory",
  data() {
    return {
      name: null,
      image: null,
    };
  },
  methods: {
    onUpdate() {
      this.$emit("edit-category", {
        id: this.$route.params.id,
        name: this.name,
        image: this.image,
      });
      this.name = null;
      this.image = null;
    },
    async getCategory() {
      await axios
        .get(`http://localhost:3000/api/v1/category/${this.$route.params.id}`)
        .then((response) => {
          this.name = response.data.data.name;
          this.image = response.data.data.image;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getCategory();
  },
};
</script>
