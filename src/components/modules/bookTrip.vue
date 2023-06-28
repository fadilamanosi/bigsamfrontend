<template>
    <div class="bg-[#4836367d] rounded-2xl md:w-[30%] md:max-w-[30%] ">
        <div class=" relative ">
            <div class="bg-[#a51515a1] flex justify-evenly p-4 rounded-t-2xl md:gap-8 w-full">
                <div class="text-center">
                    Book a seat
                </div>
            </div>

            <div class="px-8 pb-16  pt-8 gap-6 flex flex-col relative">

                <div class="flex gap-4">
                    <button class="bg-[#943133] border border-[#943133] hover:bg-transparent  rounded-md px-3 py-2">
                        One way
                    </button>
                    <!-- <button class=" border border-[#943133] hover:bg-[#943133]  rounded-md px-3 py-2">
                        Round trip
                    </button> -->
                </div>

                <div class="grid gap-y-11">
                    <div class="grid ">
                        <label>Travelling from</label>
                        <select v-model="trip.selectedPlace"
                            class="capitalize w-full text-white bg-[#4836367d] rounded-lg border border-[#9E3334] p-2 ring-white focus:ring-white focus:border-white"
                            @change="getPlaces()">
                            <option selected disabled>select</option>

                            <option v-for="(v, i) in trip.places" :key="i" :value="v.id">{{ v.state + ' => ' + v.city }}
                            </option>
                        </select>
                    </div>

                    <div class="grid ">
                        <label>Travelling To</label>
                        <select v-model="trip.selectedDestination"
                            class="capitalize w-full text-white bg-[#4836367d] rounded-lg border border-[#9E3334] p-2 ring-white focus:ring-white focus:border-white">
                            <option selected disabled>select</option>
                            <option v-for="(v, i) in trip.destinations" :key="i" :value="v.to.id">{{ v.to.state + ' => ' +
                                v.to.city }}
                            </option>
                        </select>
                    </div>

                    <div class="flex md:flex-nowrap flex-wrap gap-4 w-full ">
                        <div class="grid  w-full">
                            <label>Departure Date</label>
                            <input v-model="trip.departure_time" placeholder="Departure Date" type="date"
                                class="w-full placeholder-white w-full text-white bg-[#4836367d] rounded-lg border border-[#9E3334] p-2 ">
                        </div>

                        <div class="grid  w-full ">
                            <label>Adults</label>
                            <input v-model="appRef.trip.toBook.persons" placeholder="1" type="number"
                                class="w-full placeholder-white text-white bg-[#4836367d] rounded-lg border border-[#9E3334] p-2  ">
                        </div>
                    </div>

                    <button @click="loadTransit()" class=" bg-[#943133]  rounded-lg px-3 py-2">Proceed</button>

                    <div v-if="error != ''" class="text-center text-red-700  text-lg font-bold">
                        Error: <span class=" font-normal text-md">{{ error }}</span>
                    </div>
                </div>


                <loaderSvg v-if="load"></loaderSvg>
            </div>
        </div>
    </div>
</template>


<script setup>

import { inject, onBeforeMount, ref } from 'vue';
import loaderSvg from './loaderSvg.vue';

import { appStore } from '@/stores/appStore.js';

const axios = inject('axios');
const load = ref(false);


const appRef = appStore();
const error = ref('');

const trip = ref({
    places: {},
    selectedPlace: 0,
    selectedDestination: 0,
    destinations: {},
    departure_time: ""
});



function getPlaces() {

    load.value = true

    axios.get('/trip/destinations?destination_id=' + trip.value.selectedPlace)
        .then((e) => {
            trip.value.destinations = e.data.data
            load.value = false
        })
        .catch((e) => {
            console.log(e)
            error.value = e.response.data.message

        });
};

function loadTransit() {

    if (parseInt(appRef.trip.toBook.persons) < 1) {
        error.value = 'Please select how many persons are travelling'
        return;
    }

    axios.get('/trip/transits?from_id=' + trip.value.selectedPlace + '&to_id=' + trip.value.selectedDestination + '&departure_time=' + trip.value.departure_time)
        .then((e) => {

            load.value = true

            if (Object.keys(e.data.data).length > 0) {
                load.value = false
                appRef.trip.list = true
                appRef.trip.transits = e.data.data
                
            } else {
                error.value = 'No trip for that day';
            }

            load.value = false
        })
        .catch((e) => {
            console.log(e)
            error.value = e.response.data.message

        })
}


onBeforeMount(() => {

    axios.get('/trip/places')
        .then((e) => {
            trip.value.places = e.data.data
        })
        .catch((e) => {
            console.log(e)
            error.value = e.response.data.message

        })
})



</script>