<template>
    <div class="md:w-[30em] w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <div class="grid gap-8">
            <div class="flex md:gap-8 gap-4 justify-evenly">

                <div class="grid place-items-center ">
                    <div class="border-2 border-gray-800 text-center rounded-full h-[30px] w-[30px] bg-green-500">
                        1
                    </div>
                    <div>selected sit</div>
                </div>

                <div class="grid place-items-center">
                    <div class="border-2 border-gray-800 text-center rounded-full h-[30px] w-[30px] bg-blue-500">
                        2
                    </div>
                    <div>Available sit</div>
                </div>
                <div class="grid place-items-center">
                    <div class="border-2 border-gray-800 text-center rounded-full h-[30px] w-[30px] bg-gray-500">
                        3
                    </div>
                    <div>Booked sit</div>
                </div>
            </div>

            <h3 class=" capitalizeflex items-center mb-1 text-lg font-semibold text-gray-900">
                Select sit
            </h3>
            <div class="grid grid-cols-3 items-center gap-8">
                <SteeringIcon></SteeringIcon>
                <div class=" cursor-pointer col-start-3 border-4 border-gray-800 text-center rounded-full h-[40px] w-[40px] text-white grid place-content-center"
                    :id="seats.booked.includes(1) ? 'booked' : (seats.selected.includes(1) ? 'selected' : 'available')"
                    @click="selectSeat(1)">
                    1
                </div>
            </div>
            <div class="grid grid-cols-3 gap-8">

                <div v-for="(v, i) in props.transit.car.seats - 1" :key="i" class="w-fit">

                    <label :for="'seats' + (v + 1)" :value="v + 1" type="checkbox"
                        class="cursor-pointer border-4 border-gray-800 text-center rounded-full h-[40px] w-[40px] text-white grid place-content-center"
                        @click="selectSeat(v + 1)"
                        :id="seats.booked.includes(v + 1) ? 'booked' : (seats.selected.includes(v + 1) ? 'selected' : 'available')">
                        {{ v + 1 }}
                    </label>
                    <input class="hidden" type="checkbox" :id="'seats' + (v + 1)">
                </div>
                <!-- <span v-if="v != 1"> -->
                <!-- {{ v + 1 }} -->
                <!-- </span> -->

            </div>

        </div>
    </div>
</template>


<script setup>
import SteeringIcon from '@/components/icons/steeringIcon.vue';
import { inject, onMounted, ref } from 'vue';

import { appStore } from '@/stores/appStore.js';
const appRef = appStore();

const axios = inject('axios');
const seats = ref({
    booked: [],
    selected: []
});


const props = defineProps({
    transit: {
        type: Object
    }
})

function selectSeat(v) {

    if (!seats.value.booked.includes(v)) {
        if (seats.value.selected.includes(v)) {

            const index = seats.value.selected.indexOf(v);
            if (index > -1) { // only splice array when item is found
                seats.value.selected.splice(index, 1); // 2nd parameter means remove one item only
            }
        } else {
            seats.value.selected.push(v);
        }

    }
    appRef.trip.seats = seats.value.selected;
}


onMounted(() => {


    console.log(props.transit)

    axios.get('/trip/seats?trans_id=' + props.transit.id)
        .then((e) => {

            console.log(e.data.data)
            for (let v in e.data.data) {
                seats.value.booked.push(e.data.data[v].seat)
            }

            // console.log(seats.value.includes())
        })
        .catch((e) => {
            console.log(e)
        });
});

</script>


<style scoped>
#selected {
    background-color: green;
}

#available {
    background-color: blue;
}

#booked {
    background-color: gray;
}

#available:checked {
    background-color: green;
}
</style>