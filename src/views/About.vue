<script>
import { defineComponent } from 'vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';


export default defineComponent({
    components: { Header, Footer }

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
                <img src="../assets/pictures/groomclub-4-p-800.webp" class="w-full h-[480px] object-cover rounded-3xl" />
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
            class="bg-white flex flex-col items-center justify-center px-10 mx-6 py-6 text-center rounded-[50px] shadow-2xl">
            <img src="../assets/pictures/dog_groom_test 1.png" class="object-cover h-32" />
            <p class="text-6xl mb-4">Groom Club</p>
            <p class="text-6xl mb-7 font-extrabold">4 Good</p>


            <p>We’re committed to supporting organizations that find loving homes for our four-legged friends. Because we
                believe that well-being is for all beings.</p>

            <!-- image -->


        </div>

        <div>
            <!-- icon -->

            <p>Comprehensive rewards</p>

            <ul>
                <li>Strong compensation</li>
                <li>Comprehensive health benefits</li>
                <li>Generous time off</li>
                <li>Professional development opportunities</li>
            </ul>

        </div>

        <div>
            <!-- icon -->

            <p>Work-life balance</p>

            <ul>
                <li>Consistent work schedule</li>
                <li>28 paid days off per year</li>
                <li>Team events</li>
                <li>Empathetic culture</li>
            </ul>

        </div>

        <div>
            <!-- icon -->

            <p>Career growth</p>

            <ul>
                <li>Veterinarian-developed training</li>
                <li>Mentorship program</li>
                <li>Specialized skills development</li>
                <li>Advancement opportunities</li>
            </ul>

        </div>

        <p>Happy team, <span>healthy members</span></p>

        <p>Join our team and grow your career with our paid training and mentorship program, earn strong compensation that
            respects your experience, and find work-life balance with 28 paid days off per year.</p>

        <div>
            <!-- small dog image -->

            <p>"He loves hanging with his Groom Club friends and comes back smelling//looking better than ever."</p>

            <p>Michael, Lemon's dad</p>
        </div>

        <div>
            <p>Join our <span>team</span></p>

            <p>If you share our belief that well-being is for all beings, join us in reimagining the grooming experience for
                both our members and our team.</p>

            <p>Don’t see a fit? Email us—</p>

            <p>careers@groomclub.com</p>

            <button>Dog Groomer (Total Care Partner)</button>
            <button>Grooming Instructor</button>
            <button>Member Experience Manager</button>

        </div>


        <div>
            <p><span>Wellness-focused</span> grooming, delivered to your doorstep</p>

        <!-- image -->

        <button>Join the club</button>

        <p>Call or text (615) 619-3647</p>
    </div>
</div></template>
