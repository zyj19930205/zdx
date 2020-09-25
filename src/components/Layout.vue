<template>
<div class="main-container">
    <div class="main-content">
    <slot></slot>
    </div>

</div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss" scoped>
    .main-container{
        padding: 0;
        margin-top: 56px;
    }
    .main-content{
        width: 1300px;
        margin: 0 auto;
    }
</style>
