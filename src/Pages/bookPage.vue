<template>
    <div class="flex justify-center">
        <div class="w-[30%]">
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-6">
                    <span
                        class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        1
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Enter passenger details
                    </h3>
                    <span>
                        Please enter name as they appear on identification document
                    </span>



                    <div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" id="email"
                                class=" w-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@flowbite.com" required>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Gender
                            </label>


                            <div class="flex flex-wrap">
                                <div class="flex items-center mr-4">
                                    <input id="red-radio" type="radio" value="" name="colored-radio"
                                        class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="red-radio"
                                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                </div>
                                <div class="flex items-center mr-4">
                                    <input id="green-radio" type="radio" value="" name="colored-radio"
                                        class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="green-radio"
                                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">female</label>
                                </div>

                            </div>

                        </div>


                    </div>


                </li>
                <li class="mb-10 ml-6">
                    <span
                        class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        2
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Contact and Next of Kin Details
                    </h3>
                    <span>
                        We need your contact details for booking confirmation
                    </span>

                    <div class="flex gap-8">
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@flowbite.com" required>
                        </div>

                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@flowbite.com" required>
                        </div>
                    </div>


                    <div class="flex gap-8">
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@flowbite.com" required>
                        </div>

                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@flowbite.com" required>
                        </div>
                    </div>


                </li>
                <li class="ml-6">
                    <span
                        class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        3
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Terms and Condition
                    </h3>
                    <div >
                        <span >
                            Please Note that GIGM does not have a refund policy, however our tickets valid for a month from
                            day
                            of purchase and we have a no refund policy. By proceeding to make payment, you agree to the
                            Terms
                            and Conditions of GIGM.
                        </span>
                    </div>
                </li>
            </ol>

        </div>


        <div class="w-[20%]">
            <div class="max-w-md w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
                <div class="grid">
                    <div class="grid grid-cols-2 gap-11">
                        <span>
                            From
                        </span>
                        <span>
                            From
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>