<template>
    <div class="container">
      <ShowBudgets/>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ShowBudgets from '@/components/ShowBudgets.vue';
  
  export default {
    name: 'BudgetView',
    components: {
      ShowBudgets
    },
    methods: {
      async addNewBudget(budget) {
        await axios.post('http://localhost:3000/api/v1/budget', budget)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    }
  }
  </script>
  