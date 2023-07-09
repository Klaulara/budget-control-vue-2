<template>
    <div class="container d-flex flex-wrap justify-content-evenly" v-if="expenses.length > 0">
        
        <ul>
            <li v-for="expense in expenses" :key="expense.id" >
                {{ expense.name }}
            </li>
        </ul>

    </div>
  </template>
  
  <script>
  import axios from "axios";

  export default {
    name: "ShowExpenses",
    data() {
      return {
        expenses: [],
      };
    },
    methods: {
      async getExpensesbyBudget(id) {
        id = this.$route.params.id
        await axios
          .get(`http://localhost:3000/api/v1/expenses/${id}`)
          .then((response) => {
            this.expenses = response.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    mounted() {
      this.getExpensesbyBudget();
    },
  };
  </script>
  