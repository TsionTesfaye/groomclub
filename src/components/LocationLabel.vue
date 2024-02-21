<script setup>
const {town, soon} = defineProps(['town','soon'])
</script>


<template>
    <p 
    :class="{
    'bg-sidecar text-center p-2 rounded-md font-bold text-shark' : !soon,
    'p-3 rounded-md font-bold text-shark border-[2px] border-shark' : soon }">    
        <span> {{town}} </span>
        <span v-if="soon" class="bg-sidecar p-2 m-2 rounded-md font-bold text-shark text-xs"> coming soon </span>
    
        </p>

</template>