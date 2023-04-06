<template>
    <div class="character">
      <img :src="character.image" :alt="character.name" />
      <div class="detail">
        <h4 class="character__card">
        {{ character.name }}
        </h4>
      <div class="status">
        <span
          :class="
            character.status == 'Alive'
              ? 'alive'
              : character.status == 'Dead'
              ? 'dead'
              : 'default'
          "
        ></span>
        <span>{{ character.status }}-{{ character.species }}</span>
      </div>
      <div class="origin">
        <span> Origin:{{ character.origin.name }} </span>
      </div>
      <div class="location">
        <span> Location:{{ character.location.name }} </span>
      </div>
      </div>
  
    </div>
</template>
<script>
export default {
  props: ["character"],
};
</script>
<style lang="scss" scoped>
  .character{
        border-radius: 25px;
    background: #444;
    overflow: hidden;
    margin-bottom: 20px;
    transition: all 200ms ease-in-out;
    height: 100%;
    &:hover{
transform: scale(1.05);
cursor: pointer;
h4{
    color: var(--text-orange) !important;
}
    }
    span{
        color: var(--text-gray) !important;
    }
    & img{
        width: 100%;
        border-radius: 25px 25px 0 0 ;
    }
    & .detail{
        padding: 10px;
    }
    .status{
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
        span{
            color: var(--text-gray) !important;
            &:first-child{
                width: 10px;
                height: 10px;
                border-radius: 50%;
                margin-right: 0.5rem;
            }
        }
        .alive{
            background-color: green;
        }
        .dead{
            background-color: red;
        }
        .default{
            background-color: white;
        }
    }
    .origin{
        margin-bottom: 0.5rem;
    }
    }
</style>
