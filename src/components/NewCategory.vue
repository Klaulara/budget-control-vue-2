<template>
    <form class="container" @submit.prevent="onSubmit">
        <div class="row">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name">
        </div>
        <div class="row">
            <label for="image">Image url</label>
            <input type="number" id="image" v-model="image">
        </div>
        
        <input type="submit" value="Submit">
    </form>
</template>

<script>
export default {
    name: 'NewCategory',
    data(){
        return {
            name: null,
            image: null,
        }
    },
    methods: {
        onSubmit() {
            this.$emit('new-category', {
                name: this.name,
                image: this.image,
            });
            this.name = null;
            this.image = null;
        }
    }
}
</script>