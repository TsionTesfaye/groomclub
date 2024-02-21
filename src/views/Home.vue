
<script setup>
import Accordion from '../components/Accordion.vue';
import Footer from '../components/Footer.vue';
import JoinButton from '../components/JoinButton.vue';
import LabelBody from '../components/LabelBody.vue';
import LabelService from '../components/LabelService.vue';
import LocationLabel from '../components/LocationLabel.vue';
</script>
<template>
    <h1 class="text-5xl p-5 text-center"> <span class="font-bold block">Wellness-focused </span> grooming, delivered to your doorstep </h1>
    <p class="text-3xl text-center p-5">The first mobile dog grooming service developed by vets for happy, healthy pets</p>
    
    
    <JoinButton />
    <!-- hero image -->
    <img class="w-full h-full" src="../assets/pictures/groomclub-hero.png" />
    <p class="text-3xl text-center p-5">The feeling is <span class="font-bold">mutual</span></p>
    <!-- slider -->
    <div>

        <div class="flex gap-2 items-center h-fit bg-white p-5 rounded-2xl shadow-xl mx-5">
            <img class="w-auto h-14 rounded-full" src="../assets/pictures/Alyson-p-500.jpg" />
            <p class="text-shark font-bold">
                "Groom Club is the best of ALL worlds if you're looking to get your dog the groom and love they deserve with the convenience of not having to leave your home."
                Megan, Cinco's mom
                <span class="block font-extrabold">Megan, Cinco's mom</span>
            </p>
        </div>
        
    </div>

    <div class="flex flex-wrap gap-5 justify-around p-10">
        
        <LocationLabel town="Germantown" :soon="false" />
        
        <LocationLabel town="East Nashville" :soon="false" />
        
        <LocationLabel town="Downtown" :soon="true" />
        
        <LocationLabel town="The Gulch" :soon="true" />
        
        <LocationLabel town="Belmont-Hillsboro" :soon="true" />
        
        <LocationLabel town="12 South" :soon="true" />
       
    </div>

        <!-- video -->
        <div class="p-5">
            <img class="w-full h-full rounded-xl" src="../assets/pictures/dog_need_grooming.jpg" />
        </div>

        <p class="text-shark text-3xl text-center p-6">Don't see your neighborhood? 
            <span class="font-bold"> Don't worry. </span>
        </p>

        <p class="text-lg font-bold text-center p-5">
            Follow us on Instagram and message us for updates on new neighborhoods! 
        </p>

        <div class="border flex justify-center">
        
        <Button class="m-auto bg-shark p-5 rounded-full my-8">
            <span class="text-sidecar font-bold text-xl">@groomclub4dogs</span>
        </Button>
        
    </div>

        <div class="bg-shark text-white_linen mx-5 my-7 rounded-3xl p-5 flex justify-center flex-col items-center text-center gap-5">
            <!-- image -->
            <img class="w-full h-92 rounded-2xl" src="../assets/pictures/groomclub-15.webp" />
            <p class="text-sidecar text-3xl text-cente p-5"> Mobile grooming, <span class="font-bold block">totally reimagined </span></p>
            
            <div class="text-center flex flex-col gap-4 items-center">
                <!-- icon  -->
                <img class="w-24 h-auto" src="../assets/pictures/Frame 96.png" />

                <h3 class="font-bold">Convenience for you </h3>
                <p>
                    Give your dog a better life—without sacrificing your own. We make it easy with online scheduling, upfront pricing and convenient same-week appointments.
                </p>
            </div>
            
            <div class="text-center flex flex-col gap-4 p-8 items-center">
                <!-- icon  -->
                <img class="w-24 h-auto" src="../assets/pictures/Frame 95.png" />
                <h3>Wellness for your pup </h3>
                <p>
                    We combine grooming, preventative care, and our nose-to-tail wellness check to keep your best friend in tip-top shape.
                </p>
            </div>

        </div>

        <h2 class="text-center text-3xl m-10">Well-being <span class="font-bold"> isn't </span> just for human beings.</h2>

        <!-- image x2 -->
    <div class="relative m-5">

        <img class="w-full h-auto shadow-xl rounded-3xl" src="../assets/pictures/baily.svg" />
            
        <img class="w-full h-auto rounded-full" src="../assets/pictures/dog-text-p-800.png" />
        
    </div>

        <p class="text-3xl text-center m-8">Total <span class="font-bold"> Care </span> </p>

        <p class="text-lg text-center m-5">Not all dogs need haircuts, but every dog needs consistent care to stay healthy. Our Total Care grooming service is all-inclusive without add-ons or upsells and focuses on what really matters — your dog's health.</p>

        <p class="font-bold text-center m-5">Included with Total Care:</p>
        
        <div class="flex flex-wrap gap-4 justify-center m-8">
            <LabelService service="Wellness check" />
            <LabelService service="Soothing bath" />
            <LabelService service="Nail trim & Dremel" />
            <LabelService service="Blow dry" />
            <LabelService service="Teeth brushing" />
            <LabelService service="Brush out" />
            <LabelService service="Ear cleaning" />
            <LabelService service="Eye cleaning" />
            <LabelService service="Anal gland expression" />
            <LabelService service="Sanitary trim" />
            <LabelService service="Facial scrub" />
            
        </div>
        
        <hr class="">

        <div class="m-8 ">

            <p class="font-bold block text-center">Optional services:</p>
            <div class="flex gap-10 items-center justify-center m-5">

                <LabelService service="Haircut" />  
                <LabelService service="De-shedding" />
            </div>
        
        </div>

        <JoinButton />

        <div class="bg-sidecar p-8 rounded-[3rem] my-6 text-shark font-semibold">
            
            <h3 class="text-center text-2xl text-shark">
                Health and wellness <span class="font-bold"> from nose to tail </span>
            </h3>

            <p class="text-center text-lg font-normal"> Early detection is critical to managing diseases. Groom Club members see a veterinary professional up to 12 times more per year than non-members, increasing the chances of catching a health issue early. </p>

            <div class="flex flex-wrap gap-5 relative mx-2 my-8 items-center justify-center"> 
                
                <LabelBody part="Eye" />
                <LabelBody part="Ear" />
                <LabelBody part="Nose" />
                <LabelBody part="Dental" />
                <LabelBody part="Paw" />
                <LabelBody part="Skin" />
                <LabelBody part="Sanitary" />

                <!-- image -->
                <div>
                    <img class="w-full h-full" src="../assets/pictures/vet_illo.png" />
                </div>
            </div>

            <div class="flex flex-col gap-5">

                <div class="bg-shark p-5 text-2xl font-light text-center text-white rounded-3xl flex flex-col gap-5 items-center">
                    <!-- image -->
                    <img class="w-24 h-auto" src="../assets/pictures/reportcard.png" />

                    <p>
                        Stay informed with digital health reports and records
                    </p>
                </div>

                <div class="bg-shark p-5 text-2xl font-light text-center text-white rounded-3xl flex flex-col gap-5 items-center">
                    <!-- image -->
                    <img class="w-24 h-auto" src="../assets/pictures/reportcard.png" />

                    <p>
                        Don't worry about finding your vaccine info — we got you
                    </p>
                </div>

                <div class="bg-shark p-5 text-2xl font-light text-center text-white rounded-3xl flex flex-col gap-5 items-center">
                    <!-- image -->
                    <img class="w-24 h-auto" src="../assets/pictures/reportcard.png" />

                    <p>
                        Rest easy knowing we're veterinary professionals
                    </p>
                </div>
            </div>

        </div>

        <div class="bg-white shadow-xl rounded-3xl text-center p-2 m-6">
            
            <p class="text-3xl text-shark mb-10">We don't make you <span class="font-bold"> play fetch </span></p>

            <div class="mx-10 relative my-5">

                <img class="w-full h-auto" src="../assets/pictures/circle.svg" />

                <div class="absolute inset-0 top-20">
                    <p class="text-6xl font-bold text-shark">150</p>
                    <p class="text-xs w-[34ch] font-bold"> premium mobile grooming without add-ons or upsells </p> 
                </div>
            </div>

            <ul class="flex flex-col gap-4 text-start font-bold p-6">
                <li> 
                    <img class="w-12 h-auto inline" src="../assets/pictures/right_mar.svg"> 
                    Same-week appointments 
                </li>
                <li> 
                    <img class="w-12 h-auto inline" src="../assets/pictures/right_mar.svg"> 
                    Stress-free grooming experience 
                </li>
                <li> 
                    <img class="w-12 h-auto inline" src="../assets/pictures/right_mar.svg"> 
                    Clean and safe environment 
                </li>
                <li> 
                    <img class="w-12 h-auto inline" src="../assets/pictures/right_mar.svg"> 
                    Premium grooming products 
                </li>
            </ul>

            <Button class="bg-shark text-2xl font-bold text-white p-4 rounded-tr-none rounded-full">
                Get Pricing
            </Button>

            <p class="text-shark m-6 text-lg font-bold">
                Call or text (615) 619-DOGS
            </p>
        </div>

        <h2 class="text-3xl text-center text-shark m-8 mt-6">
            Forget everything you know <span class="font-bold">about grooming</span>
        </h2>

        <p class="text-xl text-shark text-center m-5">We're reimagining grooming to make it easy for pet parents to give their best friend the long, healthy life they deserve.</p>
        
        <div class="bg-white rounded-3xl shadow-xl flex flex-col justify-center items-center gap-5 m-5 px-5 pb-5 overflow-hidden">
        <!-- image -->
        <img class="w-[0.8] h-full" src="../assets/pictures/groomclub-compare.svg" />

        <p class="text-shark text-2xl text-center p-5">Mobile grooming, <span class="font-bold"> totally reimagined </span></p>
            <ul class="flex flex-col gap-5 font-semibold mg-4">
                <li class="flex gap-2 items-center "> 
                    <img class="w-12 h-auto inline" src="../assets/pictures/check-02.png" alt=""> 
                    Grooming focused on health 
                </li>
                <li class="flex gap-2 items-center "> 
                    <img class="w-12 h-auto inline" src="../assets/pictures/check-02.png" alt=""> 
                    Delivered to your home </li>
                <li class="flex gap-2 items-center "> 
                    <img class="w-12 h-auto inline" src="../assets/pictures/check-02.png" alt=""> 
                    Same-week appointments 
                </li>
                <li class="flex gap-2 items-center "> 
                    <img class="w-12 h-auto inline" src="../assets/pictures/check-02.png" alt=""> 
                    Fear Free™ certified groomers 
                </li>
                <li class="flex gap-2 items-center "> 
                    <img class="w-12 h-auto inline" src="../assets/pictures/check-02.png" alt=""> 
                    Transparent pricing 
                </li>
                <li class="flex gap-2 items-center "> 
                    <img class="w-12 h-auto inline" src="../assets/pictures/check-02.png" alt=""> 
                    Easy online scheduling 
                </li>
            </ul>
            <JoinButton />
        </div>

        <div class="rounded-3xl  bg-transparent border-shark border-2 p-5 m-5 flex flex-col items-center">
            <p class="text-shark text-3xl p-5">
                Traditional <span class="font-bold"> groomer </span>
            </p>

            <ul class="font-bold flex flex-col gap-5 text-base">
                <li class="flex gap-2 items-center "> 
                    <img class="w-12 h-auto inline" src="../assets/pictures/check-no.png" alt=""> 
                    Grooming focused on health </li>
                <li class="flex gap-2 items-center "> 
                    <img class="w-12 h-auto inline" src="../assets/pictures/check-no.png" alt=""> 
                    Delivered to your home </li>
                <li class="flex gap-2 items-center "> 
                    <img class="w-12 h-auto inline" src="../assets/pictures/check-no.png" alt=""> 
                    Same-week appointments </li>
                <li class="flex gap-2 items-center "> 
                    <img class="w-12 h-auto inline" src="../assets/pictures/check-no.png" alt=""> 
                    Grooming focused on health </li>
                <li class="flex gap-2 items-center "> 
                    <img class="w-12 h-auto inline" src="../assets/pictures/check-no.png" alt=""> 
                    Grooming focused on health </li>
                <li class="flex gap-2 items-center "> 
                    <img class="w-12 h-auto inline" src="../assets/pictures/check-no.png" alt=""> 
                    Grooming focused on health </li>
            </ul>
        </div>

        <h2 class="text-center m-10 text-3xl">
            Have a question? <span class="font-bold block">We got you</span>
        </h2>

        <div class="flex flex-1 gap-2 bg-beryl_green m-auto rounded-full rounded-tr-none w-fit h-fit p-4">

        <img class="w-auto h-12" src="../assets/pictures/callus-groom.png" alt=""> 
        
        <p class=" ">
            Call or text (615) 619-DOGS
            <span class="block text-base font-bold">Available now!</span>
        </p>
        </div>

        <div class="flex justify-center p-5">    
            <img class="w-auto h-52 m-5" src="../assets/pictures/manicure.png" alt=""> 
        </div>

        <h2 class="font-bold text-2xl text-center m-5 text-shark">FAQ</h2>

        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />

        <div class="bg-sidecar mx-2 mt-16 p-5 rounded-3xl rounded-b-none flex flex-col items-center gap-5">
            <h2 class="text-3xl text-center"> <span class="font-bold"> Wellness-focused </span> grooming, delivered to your doorstep</h2>

            <!-- image -->
            <img class="w-full h-full m-auto" src="../assets/pictures/Dog_Footer.png" /> 


            <JoinButton />

            <p class="text-xl text-shark font-semibold">Call or text (615) 619-DOGS</p>
        </div>
        <Footer />


      
</template>
