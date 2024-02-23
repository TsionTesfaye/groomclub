
<script setup>
import InstagramIcon from 'vue-material-design-icons/Instagram.vue';
import FacebookIcon from 'vue-material-design-icons/Facebook.vue';
import LinkedinIcon from 'vue-material-design-icons/Linkedin.vue';

</script>

<template>
    <!-- image -->
    <div class="bg-shark text-white rounded-t-2xl">

        <div class="p-5 flex flex-col md:flex-1 md:flex-row md:justify-around md:flex-wrap md:gap-3">

            <img class=" fill-current text-sidecar mb-5 md:w-[22rem]" src="../assets/pictures/groomclub_gc.svg" />
            
            <div class="md:order-2   md:w-full">

                <p class="text-3xl md:text-4xl my-6 md:text-center">Sign up for our <span class="font-bold"> newsletter </span></p>
                
                <div class="flex items-center justify-center p-4 rounded-3xl bg-white shadow-lg mb-8">
                    <!-- <div> -->
                        <input class="outline-none w-full h-full text-shark  placeholder:text-shark placeholder:font-normal placeholder:text-2xl text-2xl" placeholder="Enter your email" type="email">
                        <img class="fill-sidecar" src="../assets/pictures/forward_black.svg" />
                    <!-- </div> -->
                </div>
            </div>    
            
            <div class="md:order-1 md:w-[0.5] md:mb-5">

                <p class="text-3xl md:text-5xl mb-8">Find your <span class="font-bold"> way </span></p>

                <ul class="text-white flex flex-col gap-5 text-2xl cursor-pointer">
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

                <div class="flex gap-5 text-7xl text-shark mt-8">
                    <InstagramIcon class="bg-sidecar hover:bg-white rounded-full p-3 cursor-pointer" />
                    <FacebookIcon  class="bg-sidecar hover:bg-white rounded-full p-3  cursor-pointer" />
                    <LinkedinIcon  class="bg-sidecar hover:bg-white rounded-full p-3  cursor-pointer" />
                </div>

            </div>

        </div>
        
        <div class="flex justify-end">
            <img class="w-full h-full md:w-auto md:h-60" src="../assets/pictures/illofooter.png" alt=""> 
        </div>
    </div>

</template>