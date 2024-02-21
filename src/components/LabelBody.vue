<script setup>
const {part} = defineProps(['part'])

</script>

<template>
    <div class="bg-white hover:bg-sidecar hover:outline hover:outline-shark w-fit p-2 px-5 rounded-lg group">
        
        <p class="p-3 rounded-md absolute hidden group-hover:block top-0  bg-shark text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est fugiat facilis exercitationem cupiditate? Quas omnis eos ipsam sequi deserunt. Vitae, laudantium. Ratione atque pariatur cumque asperiores voluptatem explicabo tenetur eum repellendus placeat, ipsum rerum vitae sapiente at quaerat eius obcaecati! Blanditiis assumenda dicta modi quibusdam explicabo? Dignissimos, nesciunt. Reiciendis, debitis.</p>
        <div>  {{ part }}</div>
    
    </div>
</template>