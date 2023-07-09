<template>
  <div class="container d-flex flex-wrap justify-content-evenly" v-if="budgets.length > 0">
    <div
      class="card m-2"
      style="width: 18rem"
      v-for="budget in budgets"
      :key="budget.id"
    >
      <div class="card-body">
        <h5 class="card-title">{{ budget.name }}</h5>
        <p class="card-text">Amount: {{ budget.value }}</p>
        <p class="card-text">{{ budget.created_at }}</p>
        <router-link class="btn btn-success" :to="{name: 'expenses', params: {id: budget.id}}">Review Budget</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShowBudgets",
  data() {
    return {
      budgets: [],
    };
  },
  methods: {
    async getBudgets() {
      await axios
        .get("http://localhost:3000/api/v1/budget")
        .then((response) => {
          this.budgets = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getBudgets();
  },
};
</script>
