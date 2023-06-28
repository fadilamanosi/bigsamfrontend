import { ref } from 'vue'
import { defineStore } from 'pinia'

export const appStore = defineStore('app', () => {

  const trip = ref({
    list: false,
    transits: {},
    toBook: {
      persons: 1
    },
    seats: [],
    bookTrip: false
  })


  const error = ref({
    status: false,
    message: 'An error occured'
  })

  function promptError(m) {

    error.value.message = m;
    error.value.status = true;

    setTimeout(()=>{
      closeError();
    }, 2000)

  }

  function closeError(){
    error.value.status = false;
    error.value.message = '';
  }

  return { trip, error, promptError, closeError};
})
