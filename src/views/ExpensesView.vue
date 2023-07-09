<template>
    <div class="container">
        <ShowExpenses />
    </div>
  </template>
  
  <script>
    import ShowExpenses from '@/components/ShowExpenses.vue';
  
  export default {
    name: "ExpensesView",
    components: {
        ShowExpenses,
    },
  };
  </script>