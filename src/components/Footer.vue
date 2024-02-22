
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import InstagramIcon from 'vue-material-design-icons/Instagram.vue';
import FacebookIcon from 'vue-material-design-icons/Facebook.vue';
import LinkedinIcon from 'vue-material-design-icons/Linkedin.vue';

</script>

<template>
    <!-- image -->
    <div class="bg-shark text-white">

    <div class="p-5">

        <img class="text-sidecar fill-current mb-5" src="../assets/pictures/groomclub_gc.svg" />

        <p class="text-3xl my-6">Sign up for our <span class="font-bold"> newsletter </span></p>
        
        <div class="flex items-center justify-center p-4 rounded-3xl bg-white shadow-lg mb-8">
            <!-- <div> -->
                <input class="outline-none w-full h-full text-shark  placeholder:text-shark placeholder:font-normal placeholder:text-2xl" placeholder="Enter your email" type="email">
                <img class="fill-sidecar" src="../assets/pictures/forward_black.svg" />
            <!-- </div> -->
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
        </ul>

        <div class="flex gap-5 text-7xl text-shark pr-5 my-8">
            <InstagramIcon class="bg-sidecar hover:bg-white rounded-full p-3 cursor-pointer" />
            <FacebookIcon  class="bg-sidecar hover:bg-white rounded-full p-3  cursor-pointer" />
            <LinkedinIcon  class="bg-sidecar hover:bg-white rounded-full p-3  cursor-pointer" />
        </div>

    </div>
        <!-- social icons -->

        <img class="w-full h-full" src="../assets/pictures/illofooter.png" alt=""> 

    </div>

</template>