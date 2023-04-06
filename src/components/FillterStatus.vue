<template >
    <section class="fillter">
        <div class="item">
            All
        </div>
        <div class="item">
            Alive
        </div>
        <div class="item">
            Dead
        </div>
        <div class="item">
            Unknown
        </div>
    </section>
</template>
<script>
export default {
    
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