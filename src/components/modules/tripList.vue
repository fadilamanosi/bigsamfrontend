<template>
    <div class="relative w-full  flex flex-col justify-center h-full">
        <div class="flex justify-center">
            <div class="grid gap-8 p-8 rounded-lg md:w-[80%]">
                <h1 class="text-xl font-bold ">
                    Select your bus type
                </h1>


                <div class="grid gap-8">
                    <div v-for="(v, i) in appRef.trip.transits" :key="i"
                        class="flex flex-col items-center bg-white   border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 ">

                        <!-- bg-slate-500 -->
                        <div class=" bg-gray-200 h-full flex flex-col justify-center p-2">
                            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src="../../assets/images/home.png" alt="">
                        </div>
                        <div class="flex flex-wrap justify-between w-full px-8 py-4">
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tigh    t text-gray-900 dark:text-white">
                                    {{ v.car.name }}
                                </h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Departure: {{ v.from.state }} => {{ v.from.state }} Arrival: {{ v.to.state }} ==>{{
                                        v.to.state }}
                                </p>
                                <span>
                                    <!-- 10 seats(available) 07:45 AM -->
                                </span>

                                <span>
                                    Adult: {{ appRef.trip.toBook.persons }}
                                </span>
                            </div>
                            <div class="flex flex-col justify-center text-center gap-4">
                                <h5 class="text-3xl font-bold">
                                    <NairaCurrency>{{ new Intl.NumberFormat('en-US', {}).format(v.amount) }}</NairaCurrency>
                                </h5>

                                <button @click="book(v)" class="bg-gray-700 text-white px-5 py-1 rounded-md">
                                    Book
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

import { appStore } from '@/stores/appStore.js';
import { ref } from 'vue';
import NairaCurrency from './nairaCurrency.vue';

const appRef = appStore();


function book(v) {

    appRef.trip.bookTrip = true;
    appRef.trip.toBook = {
        persons: appRef.trip.toBook.persons,
        v
    }

    // console.log(appRef.trip.toBook)
}

</script>