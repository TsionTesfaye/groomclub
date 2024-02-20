<script>
import { defineComponent } from 'vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import JoinButton from '../components/JoinButton.vue';


export default defineComponent({
    components: { Header, Footer, JoinButton }

})

</script>

<template>
    <div class="bg-white_linen">
        <div class="bg-shark flex flex-col px-7 pt-20 pb-7 text-white_linen justify-between rounded-b-3xl">
            <div class="text-center">
                <p class="text-4xl  "> We’re reimagining <span class="font-bold">grooming</span></p>

                <p class="text-xl mt-7">Groom Club is the first mobile grooming service developed by veterinarians. We’re
                    reimagining grooming to make it
                    easy for pet parents to give their best friend the long, healthy life they deserve.</p>

                <button class="my-9 w-full h-14 rounded-l-full rounded-br-full bg-white text-shark font-bold text-xl">Join
                    our team</button>
            </div>

            <img src="../assets/pictures/groomclub-4-p-800.webp" class="w-full h-[520px] object-cover rounded-3xl" />
            <!-- image -->
        </div>

        <div class="bg-sidecar mx-6 my-16 h-44 rounded-2xl flex items-center">
            <p class="text-6xl text-center">Join our <span class="font-bold">team</span></p>
        </div>

        <p class="text-center text-4xl">Our guiding <span class="font-bold">values</span></p>
        <div class="pl-14 pr-10 text-center">
            <div class=" my-14">
                <img src="../assets/pictures/groomclub-9-p-800.webp" class="w-full h-[480px] object-cover rounded-3xl" />
                <p class="text-3xl mt-7">We get on the <span class="font-bold">floor</span></p>

                <p class="mt-3">We believe that trust is earned, and we demonstrate this by getting on the floor. We
                    establish a genuine
                    connection with our four-legged members and prioritize their needs.</p>

            </div>

            <div class="my-14">
                <img src="../assets/pictures/groomclub-39-p-500.webp" class="w-full h-[320px] object-cover rounded-3xl" />
                <p class="text-3xl mt-7"> Happy team, <span class="font-bold">healthy members</span></p>

                <p class="mt-3"> We champion the wellbeing and career growth of our team members. We build an environment
                    founded on empathy, open
                    communication, and compassion.</p>

                <!-- image -->

            </div>

            <div class="my-14">
                <img src="../assets/pictures/groomclub-29-p-500.webp" class="w-full h-[320px] object-cover rounded-3xl" />

                <p class="text-3xl mt-7">Details <span class="font-bold">matter</span></p>

                <p class="mt-3">Precision and attention to detail are our cornerstones. We establish clear expectations,
                    follow through on
                    promises, and always act in the best interests of our members and their parents.</p>

            </div>

            <div class="my-14">
                <img src="../assets/pictures/groomclub-17-p-800.webp" class="w-full h-[320px] object-cover rounded-3xl" />
                <p class="text-3xl mt-7">Own <span class="font-bold">it</span></p>

                <p class="mt-3">Everything we do—from how we conduct ourselves with pet parents to the cleanliness of our
                    facilities and
                    everything in between—is to provide the highest standard of care. When we encounter an unmet need, we
                    step up
                    and own it.</p>



            </div>

            <div class="my-14">
                <img src="../assets/pictures/groomclub-27-p-500.webp" class="w-full h-[320px] object-cover rounded-3xl" />

                <p class="text-3xl mt-7">Commited to our <span class="font-bold">community</span></p>

                <p class="mt-3">We proudly support Nashville organizations that find loving homes for dogs, bring people
                    together at community
                    events, and cultivate a workplace where veterinary professionals can enjoy fulfilling careers with a
                    work-life
                    balance that respects their expertise and dedication</p>

            </div>
        </div>

        <div
            class="bg-white flex flex-col items-center justify-center px-8 mx-6 py-6 text-center rounded-[50px] shadow-2xl">
            <img src="../assets/pictures/dog_groom_test 1.png" class="object-cover h-32" />
            <p class="text-6xl mb-4">Groom Club</p>
            <p class="text-6xl mb-7 font-extrabold">4 Good</p>


            <p>We’re committed to supporting organizations that find loving homes for our four-legged friends. Because we
                believe that well-being is for all beings.</p>




        </div>
        <div class="my-16 px-7">
            <div class="text-center">
                <p class="text-3xl">Happy team, <span class="font-extrabold">healthy members</span></p>

                <p class="text-xl my-7">Join our team and grow your career with our paid training and mentorship program,
                    earn strong compensation that
                    respects your experience, and find work-life balance with 28 paid days off per year.</p>

                <div
                    class="bg-sidecar flex text-left px-5 py-5 rounded-2xl shadow-2xl justify-center items-center font-bold ">
                    <img src="../assets/pictures/Avatar 5.png" class="w-20 h-20 mr-4" />
                    <div>
                        <p class="text-xl  leading-relaxed">"He loves hanging with his Groom Club friends and comes back
                            smelling/looking better than ever."</p>

                        <p class="mt-2">Michael, Lemon's dad</p>
                    </div>
                </div>
            </div>
            <div class="mt-10">
                <img src="../assets/pictures/Comprehensive Rewards.png" class="w-24 h-24  mb-5" />

                <p class="text-3xl font-bold mb-2">Comprehensive rewards</p>

                <ul class="list-disc pl-6 text-xl leading-relaxed">
                    <li>Strong compensation</li>
                    <li>Comprehensive health benefits</li>
                    <li>Generous time off</li>
                    <li>Professional development opportunities</li>
                </ul>

            </div>

            <div>
                <img src="../assets/pictures/WorkLifeBalance.png" class="w-24 h-24 mt-7 mb-5" />

                <p class="text-3xl font-bold mb-2">Work-life balance</p>

                <ul class="list-disc pl-6 text-xl leading-relaxed">
                    <li>Consistent work schedule</li>
                    <li>28 paid days off per year</li>
                    <li>Team events</li>
                    <li>Empathetic culture</li>
                </ul>

            </div>

            <div>
                <img src="../assets/pictures/CareerGrowth.png" class="w-24 h-24 mt-7 mb-5" />

                <p class="text-3xl font-bold mb-2"> Career growth</p>

                <ul class="list-disc pl-6 text-xl leading-relaxed">
                    <li>Veterinarian-developed training</li>
                    <li>Mentorship program</li>
                    <li>Specialized skills development</li>
                    <li>Advancement opportunities</li>
                </ul>

            </div>

        </div>

        <div class="bg-white mx-6 p-6 mb-16 rounded-2xl shadow-2xl flex flex-col">
            <p class="text-3xl  ">Join our <span class="font-extrabold">team</span></p>

            <p class="text-xl pr-16 my-4">If you share our belief that well-being is for all beings, join us in reimagining
                the grooming experience for
                both our members and our team.</p>

            <p class="text-xl font-bold">Don’t see a fit? Email us—</p>

            <p class="text-xl font-bold pl-3 my-5">careers@groomclub.com</p>

            <button class="bg-beryl_green text-xl font-bold h-16 rounded-lg text-left pl-6 mt-5">Dog Groomer (Total Care
                Partner)</button>
            <button class="bg-sidecar text-xl font-bold h-16 rounded-lg text-left pl-6 mt-5">Grooming Instructor</button>
            <button class="bg-zinnwaldite text-xl font-bold h-16 rounded-lg text-left pl-6 mt-5">Member Experience
                Manager</button>

        </div>


        <div class="bg-sidecar mx-6 rounded-[10px] py-16 px-10 text-center">
            <p class="text-3xl"><span class="font-extrabold">Wellness-focused</span> grooming, delivered to your doorstep
            </p>

            <img src="../assets/pictures/Dog 1 Footer-p-500.png" class="my-10" />

            <button class="bg-shark text-white text-2xl p-5 w-56 h-16 mx-auto rounded-full rounded-tr-none mb-6">Join the
                club</button>

            <p class="text-xl font-bold">Call or text (615) 619-3647</p>
        </div>
    </div>
</template>
