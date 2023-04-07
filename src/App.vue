<template>
  <section class="container">
    <h1 class="text-center my-4"> Rick and Morty</h1>
    <FillterStatus/>
    <FillterByName/>
    <ListCharacter/>

  </section>
</template>

<script>
import ListCharacter from './components/ListCharacter.vue';
import FillterStatus from './components/FillterStatus.vue';
import FillterByName from './components/FillterByName.vue';
export default {
  name: 'App',
  components: {
    ListCharacter,
    FillterStatus,FillterByName
  }
}
</script>

<style lang="scss">
:root{
  --background-body:#24282f;
  --background-card:#3c3e44;
  --text-white:#ffffff;
  --text-gray:#c0c0c0;
  --text-orange:#ff9800;
}
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  background-color: var(--background-body) !important;
  color: var(--text-white) !important;
}
</style>
