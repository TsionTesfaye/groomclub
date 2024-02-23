<script setup>
const {service, clr} = defineProps(['service','clr'])
</script>

<template>
    
    <button :class="{
    'bg-beryl_green p-2 rounded-xl font-bold' :(clr=='green'),
    'bg-zinnwaldite p-2 rounded-xl font-bold' :(clr=='red'),
    'bg-heather p-2 rounded-xl font-bold' :(clr=='blue'),
    'bg-sidecar p-2 rounded-xl font-bold' :(clr=='yellow'),
    }">{{service}}</button>

</template>