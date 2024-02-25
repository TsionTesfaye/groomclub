<script setup>
const {part, content} = defineProps(['part','content'])

</script>

<template>
    <div class="group relative">

        <p class="content p-3 rounded-md absolute hidden group-hover:block bottom-full -translate-y-4 right-1/2 translate-x-1/2 z-10 bg-shark text-white w-96">
            {{ content }}
        </p>
        
        <div class="bg-white hover:bg-sidecar hover:outline hover:outline-shark w-fit p-2 px-4 lg:p-5 rounded-lg  relative">
            
            <div class="md:text-2xl">  {{ part }}</div>
        </div>
    </div>
</template>