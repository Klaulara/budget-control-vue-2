<template>
  <EditCategory @edit-category="editCategory" />
</template>

<script>
import axios from "axios";
import router from "@/router";
import EditCategory from "@/components/EditCategory.vue";

export default {
  name: "EditCategoryView",
  components: {
    EditCategory,
  },
  methods: {
    async editCategory(category) {
      await axios
        .put(`http://localhost:3000/api/v1/category/${category.id}`, category)
        .then((response) => {
          console.log(response);
          router.push({ path: "/category" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
