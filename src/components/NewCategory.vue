<template>
  <div class="row justify-content-center">
    <div class="col-8 bg-success m-3 p-3 rounded text-light">
      <h4>Add a New Category</h4>
      <form @submit.prevent="onSubmit">
        <div class="row fs-5 m-3">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" />
        </div>
        <div class="row fs-5 m-3">
          <label for="image">Image url</label>
          <input type="text" id="image" v-model="image" />
        </div>

        <input class="btn btn-outline-light" type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewCategory",
  data() {
    return {
      name: null,
      image: null,
    };
  },
  methods: {
    onSubmit() {
      this.$emit("new-category", {
        name: this.name,
        image: this.image,
      });
      this.name = null;
      this.image = null;
    },
  },
};
</script>
