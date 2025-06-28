<template>
<div class="spinner-square">
        <div class="square-1 square"></div>
        <div class="square-2 square"></div>
        <div class="square-3 square"></div>
</div>
</template>
<script>
export default{
    name:'loadingSpinner'
}
</script>
<style lang="scss" scoped>
// Just to show spinner bar in center of body
// DELETE body css before using


.spinner-square {
    display: flex;
    flex-direction: row;
    width: 5vw;
    height: 7.65vw;
}

.spinner-square > .square {
    width: 1vw;
    height: 5.1vw;
    margin: auto auto;
    border-radius: 4px;
}

.square-1 {
    animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s infinite;
}

.square-2 {
    animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 200ms infinite;
}

.square-3 {
    animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 400ms infinite;
}

@keyframes square-anim {
    0% {
        height: 5.1vw;
        background-color: rgb(111, 163, 240);
    }
    20% {
        height: 5.1vw;
    }
    40% {
        height: 7.65vw;
        background-color: rgb(111, 200, 240);
    }
    80% {
        height: 5.1vw;
    }
    100% {
        height: 5.1vw;
        background-color: rgb(111, 163, 240);
    }
}
</style>