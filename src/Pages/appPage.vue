<template>
    <div class="">
        <HomeModule v-if="!appRef.trip.list"></HomeModule>
        <trip-list v-else></trip-list>

        <payTrip v-if="appRef.trip.bookTrip"></payTrip>
        
        <ErrorAlert v-if="appRef.error.status"></ErrorAlert>
    </div>
</template>

<script setup>

import { onMounted } from 'vue';


import { appStore } from '@/stores/appStore.js';

// modules
import HomeModule from '@/components/modules/homeModule.vue';
import tripList from '@/components/modules/tripList.vue';


//Modals
import payTrip from '../components/modals/payTrip.vue';
import ErrorAlert from '../components/modals/errorAlert.vue';


const appRef = appStore();

onMounted(() => {
    console.log(appRef.trip.list)
});


</script>

