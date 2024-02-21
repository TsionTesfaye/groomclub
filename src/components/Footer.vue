<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
    <!-- image -->
    <div class="bg-shark text-white">

    <div class="p-5">

        <img class="fill-sidecar mb-5" src="../assets/pictures/groomclub_gc.svg" />

        <p class="text-3xl my-8">Sign up for our <span class="font-bold"> newsletter </span></p>
        
        <div class="">
            <input class="mb-8 px-10 py-5 rounded-xl text-shark bg-white placeholder:text-shark placeholder:font-semibold" placeholder="Enter your Email" type="email">
            <img class="fill-sidecar mb-5" src="../assets/pictures/forward_black.svg" />
        </div>

        <p class="text-3xl mb-5">Find your <span class="font-bold"> way </span></p>

        <ul class="text-white flex flex-col gap-5 text-xl cursor-pointer">
            <li>
                <a>Home</a>
            </li>
            
            <li>
                <a>About</a>
            </li>
            
            <li>
                <a>Privacy Policy</a>
            </li>
            
            <li>
                <a>Terms of services</a>
            </li>
        </ul
        >
    </div>
        <!-- social icons -->
        <font-awesome-icon class="w-full h-full" icon="instagram" />
        <img class="w-full h-full" src="../assets/pictures/illofooter.png" alt=""> 

    </div>

</template>