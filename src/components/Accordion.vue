<script setup>
const {question} = defineProps(['question'])
</script>

<template>
    
        <div class="group bg-shark text-white text-xl font-bold p-4 m-5 rounded-3xl flex justify-between">
            
            <p class="">{{question}}</p>
            <!-- <p class="hidden group-focus:block">
                Groom Club provides wellness-focused mobile grooming services, developed by vets, delivered to your doorstep.
            </p> -->
            <img class="w-5 h-auto text-white fill-current " src="../assets/pictures/downward.svg" alt=""> 

        </div>

</template>