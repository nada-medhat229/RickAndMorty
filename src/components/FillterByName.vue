<template >
    <div class="search">
     <input type="text" placeholder="Search By Name" v-model="name" class="form-control" @input="filter()">
    </div>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    setup(){
        const name=ref('')
        const store=useStore();
        const filter=(()=>{
            store.dispatch('fillterByName',name.value)
        })
        return {
        filter,name
    }
    }
}
</script>
<style lang="scss">
    .search{
        width: 400px;
        margin: 1.5rem auto ;
     
    }
</style>