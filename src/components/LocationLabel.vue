<script setup>
const {town, soon} = defineProps(['town','soon'])
</script>


<template>
    <p 
    :class="{
    'bg-sidecar text-center p-2 rounded-md font-bold text-shark' : !soon,
    'text-shark rounded-md font-bold  border-[2px] border-shark flex items-center gap-2 p-2' : soon }">    
        <span class="lg:text-2xl"> {{town}} </span>
        <span v-if="soon" class="bg-sidecar text-center p-1 rounded-md font-bold text-shark text-xs"> coming soon </span>
        </p>

</template>