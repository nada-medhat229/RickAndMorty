<template >
    <section class="fillter">
        <div class="item" @click="filter('')">
            All
        </div>
        <div class="item" @click="filter('Alive')">
            Alive
        </div>
        <div class="item" @click="filter('Dead')">
            Dead
        </div>
        <div class="item" @click="filter('unknown')">
            Unknown
        </div>
    </section>
</template>
<script>
import { useStore } from 'vuex';

export default {
    setup(){
        const store=useStore();
        const filter=((status)=>{
            store.dispatch('fillterByStatus',status)
        })
        return {
        filter
    }
    }
}
</script>
<style lang="scss">
    .fillter{
        width: 400px;
        overflow: hidden;
        margin: 0 auto;
        border-radius: 10px;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        margin-bottom: 2rem;
        .item{
            background-color: var(--background-card) !important;
            text-align: center;
            cursor: pointer;
            padding: 1rem 0.5rem;
            &:hover{
                color: var(--text-orange) !important;
            }
        }
    }
</style>