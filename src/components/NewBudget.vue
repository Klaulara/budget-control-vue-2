<template>
  <div class="row justify-content-center">
    <div class="col-4 bg-success m-3 p-3 rounded text-light">
      <h4>Add a New Budget</h4>
      <form class="container" @submit.prevent="onSubmit">
        <div class="row fs-5 m-3">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" />
        </div>
        <div class="row fs-5 m-3">
          <label for="value">Value</label>
          <input type="number" id="value" v-model="value" />
        </div>

        <input class="btn btn-outline-light" type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "NewBudget",
  data() {
    return {
      name: null,
      value: null,
      status: "active",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("new-budget", {
        name: this.name,
        value: this.value,
        status: this.status,
      });
      this.name = null;
      this.value = null;
    },
  },
};
</script>
