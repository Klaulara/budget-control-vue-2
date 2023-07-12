<template>
  <div class="home">
    <h1>Budget Control Project</h1>
    <h3>Review your budgets or create a new one</h3>
    <NewBudget @new-budget="addNewBudget"/>
  </div>
</template>

<script>
import axios from 'axios';
import NewBudget from '@/components/NewBudget.vue';
import router from '@/router';

export default {
  name: 'HomeView',
  components: {
    NewBudget,
  },
  methods: {
    async addNewBudget(budget) {
      await axios.post('http://localhost:3000/api/v1/budget', budget)
        .then((response) => {
          console.log(response);
          router.push({ path: "/budget" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
}
</script>
