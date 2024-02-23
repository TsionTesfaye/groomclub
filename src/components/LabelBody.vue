<script setup>
const {part} = defineProps(['part'])

</script>

<template>
    <div class="group relative">

        <!-- <p class="p-3 rounded-md absolute hidden group-hover:block -top-10 z-10 bg-shark text-white w-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est fugiat facilis exercitationem cupiditate? Quas omnis eos ipsam sequi deserunt. Vitae, laudantium.
        </p> -->
        
        <div class="bg-white hover:bg-sidecar hover:outline hover:outline-shark w-fit p-2 px-4 lg:p-5 rounded-lg  relative">
            
            <div class="md:text-2xl">  {{ part }}</div>
        </div>
    </div>
</template>