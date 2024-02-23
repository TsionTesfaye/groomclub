
<script setup>
import Accordion from '../components/Accordion.vue';
import Footer from '../components/Footer.vue';
import JoinButton from '../components/JoinButton.vue';
import LabelBody from '../components/LabelBody.vue';
import LabelService from '../components/LabelService.vue';
import LocationLabel from '../components/LocationLabel.vue';
import InstagramIcon from 'vue-material-design-icons/Instagram.vue';
</script>

<template>

    <h1 class="text-3xl md:text-6xl p-5 text-center text-shark"> <span class="font-bold block">Wellness-focused </span> grooming, delivered to your doorstep </h1>
    <p class="text-xl md:text-2xl text-center text-shark p-5">The first mobile dog grooming service developed by vets for happy, healthy pets</p>

    <JoinButton />
    <!-- hero image -->
    <div class="flex overflow-x-hidden">
        <img class="lg:w-3/4 lg:mx-auto w-screen h-52 md:h-auto animate-scroll_infinite md:animate-none" src="../assets/pictures/groomclub-hero.png" />
        <img class="md:hidden w-screen h-52 animate-scroll_infinite md:animate-none" src="../assets/pictures/groomclub-hero.png" />
    </div>

    <p class="text-5xl md:text-6xl text-center p-5 text-shark">The feeling is <span class="font-bold">mutual</span></p>
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


    <div class="flex overflow-x-hidden text-shark text-8xl text-center whitespace-nowrap py-10">
        <p class="animate-scroll_infinite">
        Hey <span class="font-bold"> Nashville </span> we're on your doorstep
        </p>
        <p class="animate-scroll_infinite">
        Hey <span class="font-bold"> Nashville </span> we're on your doorstep
        </p>
    </div>

    <div class="flex flex-wrap gap-5 md:gap-2 lg:gap-6 lg:w-3/4 lg:mx-auto justify-center p-10">
        
        <LocationLabel town="Germantown" :soon="false" />
        
        <LocationLabel town="East Nashville" :soon="false" />
        
        <LocationLabel town="Downtown" :soon="true" />
        
        <LocationLabel town="The Gulch" :soon="true" />
        
        <LocationLabel town="Belmont-Hillsboro" :soon="true" />
        
        <LocationLabel town="12 South" :soon="true" />
       
    </div>

        <!-- video -->
        <div class="p-5 md:p-0">
            <img class="w-full h-full rounded-xl" src="../assets/pictures/dog_need_grooming.jpg" />
        </div>

        <div class="lg:flex lg:items-center lg:px-16 lg:m-10" >
            
            <p class="text-shark text-3xl md:text-6xl text-center p-6 md:p-16 lg:p-0 lg:text-start">Don't see your neighborhood? 
                <span class="font-bold"> Don't worry. </span>
            </p>
            
            <div>
                <p class="text-xl md:w-[40ch] m-auto font-bold text-center px-5">
                    Follow us on Instagram and message us for updates on new neighborhoods! 
                </p>

                <div class="flex justify-center">
                
                <Button class="group transition-all duration-500 m-auto bg-shark hover:bg-sidecar p-5 rounded-full my-8 flex gap-2 items-center">
                    <InstagramIcon class="group-hover:bg-shark group-hover:text-sidecar bg-sidecar hover:bg-white rounded-full p-2 cursor-pointer" />
                    <span class="group-hover:text-shark text-sidecar  font-bold text-2xl">
                        @groomclub4dogs
                    </span>
                </Button>
            </div>
        </div>
        
    </div>

    <div class="bg-shark lg:flex-row lg:w-11/12 lg:m-auto lg:mb-10 text-white_linen mx-5 my-7 rounded-3xl p-8 flex justify-center flex-col items-center text-center gap-5">
        <!-- image -->
        <img class="w-full h-92 rounded-3xl md:p-4" src="../assets/pictures/groomclub-15.webp" />
        
        <div class="lg:flex lg:flex-col lg:gap-8">
            
            <p class="text-sidecar text-3xl md:text-6xl text-cente p-5"> Mobile grooming, <span class="font-bold block">totally reimagined </span></p>
            
            <div class="text-center lg:text-start flex flex-col lg:flex-row gap-4 items-center">
                <!-- icon  -->
                <img class="w-24 h-auto" src="../assets/pictures/Frame 96.png" />

                <div>
                    <h3 class="font-bold md:text-2xl">Convenience for you </h3>
                    <p>
                        Give your dog a better life—without sacrificing your own. We make it easy with online scheduling, upfront pricing and convenient same-week appointments.
                    </p>
                </div>
            </div>
            
            <div class="text-center lg:text-start flex flex-col lg:flex-row gap-4 items-center">
                <!-- icon  -->
                <img class="w-24 h-auto" src="../assets/pictures/Frame 95.png" />
                <div>
                    <h3 class="font-bold md:text-2xl">Wellness for your pup </h3>
                    <p>
                        We combine grooming, preventative care, and our nose-to-tail wellness check to keep your best friend in tip-top shape.
                    </p>
                </div>
            </div>
        </div>

    </div>

    <div class="text-shark md:grid md:grid-cols-2 md:flex-1 md:justify-evenly md:gap-2 md:mb-20 lg:w-11/12 lg:m-auto">
    
        <div class="relative mt-5 ml-4">

            <h2 class="text-center md:text-start text-3xl md:text-5xl m-10 md:mx-0 md:my-2">Well-being <span class="font-bold"> isn't </span> just for human beings.</h2>

            <div class="relative">
            
            <img class="w-full md:w-6/12 h-auto shadow-xl rounded-3xl absolute top-0 right-0" src="../assets/pictures/baily.svg" />
                
            <img class="w-full h-auto rounded-full mt-6" src="../assets/pictures/dog-text-p-800.png" />
            </div>
            
        </div>

        <div class="md:text-start text-center">
            <p class="text-3xl md:text-5xl  m-8">Total <span class="font-bold"> Care </span> </p>

            <p class="text-lg md:text-2xl  m-5">Not all dogs need haircuts, but every dog needs consistent care to stay healthy. Our Total Care grooming service is all-inclusive without add-ons or upsells and focuses on what really matters — your dog's health.</p>

            <p class="font-bold m-5">Included with Total Care:</p>
            
            <div class="flex flex-wrap gap-4 justify-center md:justify-start m-8">
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

            <div class="m-8 text-center md:text-start">

                <p class="font-bold block">Optional services:</p>
                <div class="flex gap-8 items-center justify-center md:justify-start m-5 md:ml-0">

                    <LabelService service="Haircut" />  
                    <LabelService service="De-shedding" />
                </div>
            
            </div>

            <JoinButton />
        </div>
    
    </div>

    <div class="bg-sidecar p-8 rounded-[3rem] my-6 text-shark font-semibold">
        
        <h3 class="text-center text-2xl md:text-5xl md:p-5 text-shark">
            Health and wellness <span class="font-bold"> from nose to tail </span>
        </h3>

        <p class="text-center text-lg font-normal md:text-2xl lg:max-w-[800px] lg:m-auto"> Early detection is critical to managing diseases. Groom Club members see a veterinary professional up to 12 times more per year than non-members, increasing the chances of catching a health issue early. </p>

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

        <div class="flex flex-col md:flex-row gap-5 lg:w-11/12 lg:m-auto">

            <div class="bg-shark p-5 text-2xl font-light text-center text-white rounded-3xl flex flex-col gap-5 items-center">
                <!-- image -->
                <img class="w-24 h-auto" src="../assets/pictures/reportcard.png" />

                <p>
                    Stay informed with digital health reports and records
                </p>
            </div>

            <div class="bg-shark p-5 text-2xl font-light text-center text-white rounded-3xl flex flex-col gap-5 items-center">
                <!-- image -->
                <img class="w-24 h-auto" src="../assets/pictures/snap.png" />

                <p>
                    Don't worry about finding your vaccine info — we got you
                </p>
            </div>

            <div class="bg-shark p-5 text-2xl font-light text-center text-white rounded-3xl flex flex-col gap-5 items-center">
                <!-- image -->
                <img class="w-24 h-auto" src="../assets/pictures/fearfree.png" />

                <p>
                    Rest easy knowing we're veterinary professionals
                </p>
            </div>
        </div>

    </div>

    <div class="bg-white shadow-xl rounded-3xl text-center p-8 m-4 lg:w-11/12 lg:m-auto">
        
        <p class="text-4xl md:text-7xl text-shark mb-10">We don't make you <span class="font-bold"> play fetch </span></p>
        
        <div class="lg:flex lg:justify-around">
            <div class="mx-10 relative my-5 md:flex md:justify-center">
            
                <img class="w-full md:w-96 h-auto outline" src="../assets/pictures/circle.svg" />

                <div class="absolute inset-0 top-16 md:top-24">
                    <p class="text-6xl md:text-9xl font-extrabold text-shark">150</p>
                    <p class="text-xs md:text-base font-bold p-4 md:px-40 lg:px-16"> premium mobile grooming without add-ons or upsells </p> 
                </div>
            </div>

            <div>
                <ul class="flex flex-col gap-4 text-start font-bold p-6">
                    <li> 
                        <img class="w-12 h-auto inline" src="../assets/pictures/right_mark.svg"> 
                        Same-week appointments 
                    </li>
                    <li> 
                        <img class="w-12 h-auto inline" src="../assets/pictures/right_mark.svg"> 
                        Stress-free grooming experience 
                    </li>
                    <li> 
                        <img class="w-12 h-auto inline" src="../assets/pictures/right_mark.svg"> 
                        Clean and safe environment 
                    </li>
                    <li> 
                        <img class="w-12 h-auto inline" src="../assets/pictures/right_mark.svg"> 
                        Premium grooming products 
                    </li>
                </ul>
    
                <div class="md:flex md:justify-center md:gap-4">
        
                    <Button class="bg-shark text-2xl font-bold text-white p-4 rounded-tr-none rounded-full">
                        Get Pricing
                    </Button>
        
                    <p class="text-shark m-6 text-lg font-bold">
                        Call or text (615) 619-DOGS
                    </p>
                </div>
            </div>
        </div>
    </div>

    <h2 class="text-3xl md:text-6xl md:pt-10 text-center text-shark m-8 mt-6">
        Forget everything you know <span class="font-bold">about grooming</span>
    </h2>

    <p class="text-xl md:text-2xl text-shark text-center m-5">
        We're reimagining grooming to make it easy for pet parents 
        to give their best friend the long,healthy life they deserve.
    </p>
        
    <div class="md:flex lg:justify-center md:flex-1 md:gap-4 md:items-center md:p-5">

        <div class="bg-white rounded-3xl shadow-xl flex flex-col items-center gap-2 m-5 md:m-0 px-5 pb-10 overflow-hidden">
            <!-- image -->
            <img class="w-[0.8] h-full" src="../assets/pictures/groomclub-compare.svg" />

            <p class="text-shark text-2xl md:text-3xl text-center">
                Mobile grooming, 
                <span class="font-bold"> 
                    totally reimagined 
                </span>
            </p>

                <ul class="flex flex-col gap-5 font-semibold md:font-bold mb-4">
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

        <div class="rounded-3xl md:h-fit  bg-transparent border-shark outline p-5 md:p-0 m-5 md:m-0 flex flex-col items-center">
                <p class="text-shark text-3xl p-5">
                    Traditional <span class="font-bold"> groomer </span>
                </p>

                <ul class="font-bold flex flex-col gap-5 text-base p-4">
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
    </div>

    <div class="md:flex">
    
        <div class="md:flex md:flex-col md:justify-start">
            <h2 class="text-shark text-center md:text-start m-10 text-3xl md:text-6xl">
                Have a question? <span class="font-bold block">We got you</span>
            </h2>

            <div class="flex flex-1 gap-2 bg-beryl_green m-auto md:m-0 md:ml-10 rounded-full rounded-tr-none w-fit h-fit p-4 text-lg">

                <img class="w-auto h-12" src="../assets/pictures/callus-groom.png" alt=""> 
            
                <p class=" ">
                    Call or text (615) 619-DOGS
                    <span class="block text-base font-bold">Available now!</span>
                </p>
            </div>
        </div>
        
        <div class="flex justify-center p-5">    
            <img class="w-auto h-64 m-5" src="../assets/pictures/manicure.png" alt=""> 
        </div>
    </div>

        <h2 class="font-extrabold text-2xl md:text-4xl text-center m-5 md:text-start text-shark">FAQ</h2>

        <Accordion question="What is Groom Club" />
        <Accordion question="How does it work?" />
        <Accordion question="How much does each service cost?" />
        <Accordion question="Will my dog still need regular veterrinary care" />
        <Accordion question="What vaccinaiton are required" />
        <Accordion question="What style cuts do you offer" />

        <div class="bg-sidecar relative mx-4 mt-16 p-24 rounded-3xl rounded-b-none flex flex-col items-center gap-5 overflow-hidden">
            <h2 class="text-4xl text-center text-shark"> <span class="font-bold"> Wellness-focused </span> grooming, delivered to your doorstep</h2>

            <img class="w-full h-full m-auto md:absolute  md:h-[9rem] md:w-auto  md:-left-2 md:-bottom-1" src="../assets/pictures/Dog_Footer.png" /> 

            <JoinButton />

            <p class="text-xl text-shark font-bold">Call or text (615) 619-3647</p>
        </div>

        <Footer />

</template>
