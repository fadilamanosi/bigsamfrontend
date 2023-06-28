<template>
    <div>
        <section class=" bg-image  bg-cover bg-center min-w-full relative ">
            <div class="flex flex-col justify-center h-full z-50 text-white  w-full py-8 md:px-8 px-2">

                <div class="flex flex-wrap justify-center w-full gap-8">

                    <div class="flex flex-col justify-center">
                        <div class="flex justify-center">
                            <div class="grid h-fit md:w-[545px] md:text-start text-center  gap-4">
                                <h1 class="md:text-[48px] text-[26px] font-bold">
                                    The modern way to commute across cities
                                </h1>
                                <p class="md:text-[26px]">
                                    GIGM is an African technology powered company, providing seamless mobility services to
                                    commuters
                                    across
                                    Africa
                                </p>
                            </div>
                        </div>
                    </div>

                    <book-trip></book-trip>

                </div>
            </div>
        </section>


        <section class="bg-[#FBF9F2]">

            <div class="flex flex-wrap lg:justify-evenly justify-center py-16 lg:gap-8 gap-y-8 p-4 ">
                <div class="bg-white rounded-md p-8 shadow-lg flex items-center gap-8 ">
                    <div class="flex flex-col justify-center">
                        <ChatIcon :width="36" :height="36" :fill="'#943133'"></ChatIcon>
                    </div>
                    <div class="grid">
                        <h2 class="text-2xl">24/7 support</h2>
                        <p>Call +1 555 666 888 to contact us</p>
                    </div>
                </div>

                <div class="bg-white rounded-md p-8 shadow-lg flex items-center gap-8 ">
                    <div>
                        <BusIcon :width="36" :height="36" :fill="'#943133'"></BusIcon>
                    </div>
                    <div class="">
                        <h2 class="text-2xl">Smart booking</h2>
                        <p>Book a seat from the comfort of your home.</p>
                    </div>
                </div>

                <div class="bg-white rounded-md p-8 shadow-lg flex items-center gap-8">
                    <div class="flex flex-col justify-center">
                        <WheelchairIcon :width="36" :height="36" :fill="'#943133'"></WheelchairIcon>
                    </div>
                    <div class="grid">
                        <h2 class="text-2xl">100% comfort</h2>
                        <p>Get the best experience using our services</p>
                    </div>
                </div>
            </div>

            <RandomTrips></RandomTrips>

        </section>
        <!-- <finalizeBooking></finalizeBooking> -->
    </div>
</template>

<script setup>

// Icons
import BusIcon from '@/components/icons/busIcon.vue';
import ChatIcon from '@/components/icons/chatIcon.vue';
import WheelchairIcon from '@/components/icons/wheelchairIcon.vue';

//Modules
import bookTrip from '@/components/modules/bookTrip.vue';
import RandomTrips from '@/components/modules/randomTrips.vue';

//Modals
// import finalizeBooking from '@/components/modals/bookTrip.vue';
</script>

<style scoped>
.bg-image {
    background-image: linear-gradient(to right, #363f48b2, #a515151c), url('../../assets/images/home.png');
}

/* 248.08deg, */
</style>