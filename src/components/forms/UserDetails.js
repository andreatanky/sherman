import React, { useContext, useState, useCallback } from "react";
import ErrorAlert from "../alerts/ErrorAlert";
import SuccessModal from "../alerts/SuccessModal";

const UserDetailsForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isError, setIsError] = useState(false);
    const [open, setOpen] = useState(false);

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handleVerification = async (event) => {
        event.preventDefault();
        // Back-end call
        setFirstName("");
        setLastName("");
        setAge("");
        setPhoneNumber("");
        
        setOpen(true)
        setIsError(true)
    };


    return (
        <div>
            <form onSubmit={handleVerification} className="max-w-2xl h-fit m-20 shadow-xl rounded-lg bg-white" action="#" method="POST">
                <div className="max-w-2xl justify-center sm:rounded-lg">
                    <div className="space-y-6 py-6 px-4 sm:p-6">
                        <div className="md:col-span-1 text-left p-3 block">
                            <h3 className="font-semibold text-xl text-gray-900">Complete this survey and get $2 off when you spend a min. $10 in store. </h3>
                            <p className="mt-2 text-lg text-gray-500">Please key in a valid mobile number to receive your verification pin.</p>

                            <p className="mt-2 text-lg text-gray-500">Please key in a valid mobile number to receive your verification pin.</p>
                        </div>
                        <div>
                            <div className=" block col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm text-left font-medium text-gray-700">
                                    First name
                                </label>
                                <input
                                    onChange={handleFirstNameChange}
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    value={firstName}
                                    required
                                    className="mt-1 block w-full mb-3 bg-gray-200 rounded-md border border-gray-300 py-3 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm text-left font-medium text-gray-700">
                                    Last name
                                </label>
                                <input
                                    onChange={handleLastNameChange}
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    value={lastName}
                                    autoComplete="given-last-name"
                                    required
                                    className="mt-1 block w-full mb-3 bg-gray-200 rounded-md border border-gray-300 py-3 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm text-left font-medium text-gray-700">
                                    Age
                                </label>
                                <input
                                    onChange={handleAgeChange}
                                    type="number"
                                    name="age"
                                    id="age"
                                    value={age}
                                    autoComplete="age"
                                    required
                                    className="mt-1 block w-full mb-3 bg-gray-200 rounded-md border border-gray-300 py-3 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="phone-number" className="block text-sm text-left font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <div className=" flex justify-center relative mt-1 rounded-md">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label htmlFor="country" className="sr-only">
                                            Country
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            className="h-full rounded-md mb-2 border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        >
                                            <option>SG</option>
                                            <option>US</option>
                                            <option>EU</option>
                                        </select>
                                    </div>
                                    <input
                                        onChange={handlePhoneNumberChange}
                                        type="number"
                                        name="phone-number"
                                        id="phone-number"
                                        value={phoneNumber}
                                        required
                                        className="mt-1 block w-full mb-3 bg-gray-200 rounded-md border pl-20 border-gray-300 py-3 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="1234 5678"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="bg-indigo-500 py-2 px-3 rounded-md shadow-lg text-white font-medium shadow-indigo-500/50 m-7">
                        Confirm
                    </button>
                </div>
            </form>
            {open ? <SuccessModal open={open} setOpen={setOpen}/> : undefined}
        </div>
    )
};

export default UserDetailsForm;