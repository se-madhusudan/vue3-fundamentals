<template>
    <button @click="count++"> {{ text }} </button>
    <span> Clicked:  {{ count }} times.</span>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    props: ['text']
}
</script>