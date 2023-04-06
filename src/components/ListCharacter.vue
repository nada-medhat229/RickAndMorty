<template>
    <section class="">
        <div class="characters row">
            <div class="character__item col-lg-3 col-md-6" v-for="character in characters" :key="character.id" >
               <CardCharacter :character="character"/>
            </div>
        </div>
    </section>
</template>
<script>
import { onMounted,computed } from 'vue';
import { useStore } from 'vuex';
import CardCharacter from './CardCharacter'
export default {
    components:{
        CardCharacter
    },
    setup(){
        const store=useStore();
        const characters=computed(()=>{
            return store.state.characterfillter
        })
        onMounted(()=>{
            store.dispatch('getcharacter')
        })
        return {characters}
    }
}
</script>
<style lang="scss" scoped>
  .character__item{
    margin-bottom: 25px;
  }
</style>