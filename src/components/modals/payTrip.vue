<template>
    <div class="fixed top-0 right-0 w-full bg-[#0000009e] flex flex-col justify-center h-full">
        <div class="flex justify-center p-2 overflow-y-scroll">
            <div class=" md:px-11 px-4 py-8  bg-white  rounded-lg md:w-[80%] overflow-y-scroll">


                <div class="flex w-full justify-between pb-6">
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">
                        We just need few more details about you.
                    </h3>

                    <div>
                        <CloseIcon @click="appRef.trip.bookTrip = false"></CloseIcon>
                    </div>
                </div>

                <div class="flex flex-wrap justify-evenly gap-4">
                    <div class="w-fit grid gap-8 flex-1">


                        <ol class="relative border-l border-gray-200">
                            <li class="mb-10 ml-6">
                                <span
                                    class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
                                    1
                                </span>
                                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">
                                    Enter passenger details
                                </h3>
                                <span>
                                    Please enter name as they appear on identification document
                                </span>



                                <div>
                                    <div class="mb-6">
                                        <label class="block mb-2 text-sm font-medium text-gray-900">
                                            Full name
                                        </label>
                                        <input v-model="form.name" type="email"
                                            class=" w-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
                                            placeholder="joe doe" required>
                                    </div>
                                    <div class="mb-6">
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">
                                            Gender
                                        </label>


                                        <div class="flex flex-wrap">
                                            <div class="flex items-center mr-4">
                                                <input v-model="form.gender" id="red-radio" type="radio" value="male"
                                                    name="colored-radio"
                                                    class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500">
                                                <label for="red-radio"
                                                    class="ml-2 text-sm font-medium text-gray-900">Male</label>
                                            </div>
                                            <div class="flex items-center mr-4">
                                                <input v-model="form.gender" id="green-radio" type="radio" value="female"
                                                    name="colored-radio"
                                                    class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500">
                                                <label for="green-radio"
                                                    class="ml-2 text-sm font-medium text-gray-900">female</label>
                                            </div>

                                        </div>

                                    </div>


                                </div>


                            </li>
                            <li class="mb-10 ml-6">
                                <span
                                    class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
                                    2
                                </span>
                                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">
                                    Contact and Next of Kin Details
                                </h3>
                                <span>
                                    We need your contact details for booking confirmation
                                </span>

                                <div class="flex gap-8">
                                    <div class="mb-6">
                                        <label class="block mb-2 text-sm font-medium text-gray-900">Your
                                            Customer Email Address
                                        </label>
                                        <input v-model="form.email" type="email"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="name@flowbite.com" required>
                                    </div>

                                    <div class="mb-6">
                                        <label class="block mb-2 text-sm font-medium text-gray-900">

                                            Customer Phone Number
                                        </label>
                                        <input v-model="form.phone" type="text"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="09012345672" required>
                                    </div>
                                </div>


                                <div class="flex gap-8">
                                    <div class="mb-6">
                                        <label class="block mb-2 text-sm font-medium text-gray-900">
                                            Next of Kin Name
                                        </label>
                                        <input v-model="form.next_of_kin" type="email"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="john doe" required>
                                    </div>

                                    <div class="mb-6">
                                        <label class="block mb-2 text-sm font-medium text-gray-900">
                                            Next of Kin's Mobile Phone Number
                                        </label>
                                        <input v-model="form.next_of_kin_phone" type="text"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="09012345678" required>
                                    </div>
                                </div>


                            </li>
                            <li class="ml-6">
                                <span
                                    class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
                                    3
                                </span>
                                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">
                                    Terms and Condition
                                </h3>
                                <div>
                                    <span>
                                        Please Note that GIGM does not have a refund policy, however our tickets valid for a
                                        month
                                        from
                                        day
                                        of purchase and we have a no refund policy. By proceeding to make payment, you agree
                                        to
                                        the
                                        Terms
                                        and Conditions of GIGM.
                                    </span>
                                </div>
                            </li>
                        </ol>

                    </div>


                    <div class=" flex gap-4 flex-wrap justify-center h-fit">

                        <SelectChair :transit="appRef.trip.toBook.v"></SelectChair>
                        <div class="md:w-[30em] w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
                            <div class="grid w-full gap-8">
                                <label class="block mb-2 font-medium text-gray-900 text-center text-3xl">
                                    Trip summary
                                </label>
                                <div class="grid gap-4">
                                    <div class="flex justify-between gap-11">
                                        <div>
                                            From
                                        </div>
                                        <div class="capitalize">
                                            {{ appRef.trip.toBook.v.from.state }} => {{ appRef.trip.toBook.v.from.state }}
                                        </div>
                                    </div>
                                    <div class="flex justify-between gap-11">
                                        <div>
                                            To
                                        </div>
                                        <div class="capitalize">
                                            {{ appRef.trip.toBook.v.to.state }} => {{ appRef.trip.toBook.v.to.state }}
                                        </div>
                                    </div>


                                    <div class="flex justify-between gap-11">
                                        <div>
                                            Persons
                                        </div>
                                        <div class="capitalize">
                                            {{ appRef.trip.toBook.persons }}
                                        </div>
                                    </div>

                                    <div class="flex justify-between gap-11">
                                        <div>
                                            Seat Number(s)
                                        </div>
                                        <div v-for="(v, i) in appRef.trip.seats" :key="i" class="capitalize">
                                            {{ v }}
                                        </div>
                                    </div>

                                    <div class="flex justify-between gap-11">
                                        <div>
                                            Price
                                        </div>
                                        <div class="capitalize">
                                            <nairaCurrency>
                                                {{ new Intl.NumberFormat('en-US', {}).format(appRef.trip.toBook.v.amount) }}
                                            </nairaCurrency>
                                        </div>
                                    </div>


                                </div>

                                <button @click="book()" class="bg-gray-700 text-white py-2 rounded">
                                    Pay
                                </button>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        <loader-svg v-if="load"></loader-svg>
    </div>
</template>


<script setup>
import CloseIcon from '@/components/icons/closeIcon.vue';
import { appStore } from '@/stores/appStore.js';
import SelectChair from '@/components/modules/selectChair.vue';
import loaderSvg from '@/components/modules/loaderSvg.vue';
import nairaCurrency from '@/components/modules/nairaCurrency.vue';


import { inject, onMounted, ref } from 'vue';

const axios = inject('axios')
const appRef = appStore();
const form = ref({});


const load = ref(false)


function book() {

    load.value = true
    form.value.seats = appRef.trip.seats;
    form.value.transit_id = appRef.trip.toBook.v.id;


    axios.post('/trip/book', form.value,)
        .then((e) => {
            load.value = false
            location.href = e.data.data.data.authorization_url
        })
        .catch((e) => {
            appRef.promptError(e.response.data.message)
            load.value = false
        });
}



onMounted(() => {

    console.log(appRef.trip.toBook)
})





</script>