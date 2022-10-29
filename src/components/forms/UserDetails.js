import React, { useContext, useState, useCallback } from "react";
import ErrorAlert from "../alerts/ErrorAlert";
import SuccessModal from "../alerts/SuccessModal";
import countries_code from "../../data/data";
import axios from "axios";

const UserDetailsForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("65");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isError, setIsError] = useState(false);
    const [open, setOpen] = useState(false);
    const q1_options = [
        { description: 'Rising cost of living', col: '2' },
        { description: 'Safety net for family', col: '3' },
        { description: 'Achieve financial freedom', col: '4' },
    ]
    const q2_options = [
        { description: 'Take it slow' },
        { description: 'Fast and furious' },
        { description: 'Consistency is key' },
    ]
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

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    }

    const handleVerification = async (event) => {
        event.preventDefault();
        console.log(country);
        const personInfo = {
            name: firstName + " " + lastName,
            phoneNum: country + phoneNumber,
            age: age
        }
        // Back-end call
        fetch('http://localhost:8080/api/sms', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(personInfo)
          }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(":DATA.SUCESS");
                    setOpen(true)
                    setIsError(false);
                    axios.post(process.env.GOOGLE_SHEET_URL)
                } else {
                    console.log(":DATA.FAILURE");
                    setOpen(false);
                    setIsError(true);
                }
        });
        setFirstName("");
        setLastName("");
        setAge("");
        setPhoneNumber("");
        setCountry("65");
    };


    return (
        <div>
            <form onSubmit={handleVerification} className="max-w-2xl h-fit m-20 scroll-smooth shadow-xl rounded-lg bg-white" action="#" method="POST">
                <div className="max-w-2xl justify-center sm:rounded-lg">
                    <div className="space-y-6 py-6 px-4 sm:p-6">
                        <div className="md:col-span-1 text-left p-2 block">
                            <h2 className="font-semibold text-2xl text-gray-900 mb-2">Welcome to Naked Ice Cream! </h2>
                            <h3 className="font-semibold text-xl text-gray-900">Complete this survey and get $2 off when you spend a min. $10 in store. </h3>
                            <p className="mt-2 text-lg text-gray-500">Please key in your information below and you will a receive an SMS which you can use to redeem the discount.</p>
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
                                            onChange={handleCountryChange}
                                            value={country}
                                            required
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            className="h-full rounded-md mb-2 border-transparent bg-transparent py-0 pl-2 pr-1 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        >
                                            {countries_code.map(code => (
                                                <option value={code}>+{code}</option>
                                            ))}
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
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white px-2 text-sm text-gray-500">Understanding your interests</span>
                        </div>
                    </div>
                    <p className="mt-8 mb-4 font-semibold text-md text-left ml-6 mr-2">
                        Which among the following is your biggest concern at the moment? (1 - Highest Priority, 3 - Least Priority)
                    </p>
                    <div className="grid block ml-6 mr-6 grid-rows-4 gap-1">
                        <div className="row-span-1 mb-2">
                            <div className="grid grid-cols-4 items-center">
                                <div className="col-start-2 text-sm">Rising cost of living</div>
                                <div className="col-start-3 text-sm">Safety net for family</div>
                                <div className="col-start-4 text-sm">Achieve financial freedom</div>
                            </div>
                        </div>
                        <div className="row-span-1 h-10 bg-gray-100">
                            <fieldset aria-required={true} className="grid grid-cols-4 justify-items-center mt-2 items-center">
                                <div className="col-start-1 text-sm text-left">1st Priority</div>
                                {q1_options.map((option) => (
                                    <input
                                        value={option.description}
                                        id="first-priority"
                                        name="first-priority"
                                        type="radio"
                                        defaultChecked={false}
                                        className={`h-4 col-start-${option.col} w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500`}
                                    />
                                ))}
                            </fieldset>
                        </div>
                        <div className="row-span-1 h-10 bg-gray-100">
                            <fieldset aria-required={true} className="grid grid-cols-4 justify-items-center mt-2 items-center">
                                <div className="col-start-1 text-sm text-left">2nd Priority</div>
                                {q1_options.map((option) => (
                                    <input
                                        value={option.description}
                                        id="second-priority"
                                        name="second-priority"
                                        type="radio"
                                        defaultChecked={false}
                                        className={`h-4 col-start-${option.col} w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500`}
                                    />
                                ))}
                            </fieldset>
                        </div>
                        <div className="row-span-1 h-10 bg-gray-100">
                            <fieldset aria-required={true} className="grid grid-cols-4 justify-items-center mt-2 items-center mb-10">
                                <div className="col-start-1 text-sm text-left">Last Priority</div>
                                {q1_options.map((option) => (
                                    <input
                                        value={option.description}
                                        id="last-priority"
                                        name="last-priority"
                                        type="radio"
                                        defaultChecked={false}
                                        className={`h-4 col-start-${option.col} w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500`}
                                    />
                                ))}
                            </fieldset>
                        </div>
                    </div>
                    <p className="mt-8 font-semibold text-md text-left ml-6 mr-2">
                        Towards your goals, which describe you best?
                    </p>
                    <fieldset aria-required={true} className="ml-6 mt-4 mb-10">
                        <div className="space-y-5">
                            {q2_options.map((option) => (
                                <div key={option.description} className="relative flex items-start">
                                    <div className="flex h-5 items-center">
                                        <input
                                            id={option.description}
                                            aria-describedby={`${option.description}-description`}
                                            name="plan"
                                            type="radio"
                                            defaultChecked={option.description === 'Take it slow'}
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor={option.description} className="font-medium text-gray-700">
                                            {option.description}
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                    <p className="mt-8 text-md text-left ml-6 mr-2">
                        By clicking the <span className="font-bold">Submit</span> button below, I confirm that I have read, understood and given my consent for Prudential Assurance Company Singapore and its related corporations, respective representatives, agents, third party service providers, contractors and/or appointed distribution/business partners (collectively referred to as “Prudential and its authorised representatives”) to collect, use, disclose and/or process my/our personal data for the purpose of contacting me about products
                        and services distributed, marketed and/or introduced by Prudential through marketing activities via all channels including but not limited to SMS, Social Media, In-app Push Notification, Phone Call etc and perusing my contact details which Prudential and its authorised representatives has in its records from time to time and in accordance to the Prudential Data Privacy Notice, which is available at http://www.prudential.com.sg/Privacy- Notice.
                        I hereby expressly understand and agree that my given consent(s) herein do not supersede or replace any other consents and/or previous consents which I may have previously given to Prudential in respect of my personal data and is without prejudice to any legal rights available to Prudential to collect, use or disclose my personal data.
                        I understand that I can refer to Prudential Data Privacy, which is available at https://www.prudential.com.sg/Privacy- Notice for more information.
                        I may contact Justin Chan, a representative of PACS at justinchankk@pruadviser.com.sg on how I may access and correct my personal data or withdraw consent to the collection, use or disclosure of my personal data.
                    </p>
                    <fieldset className="ml-6 mt-4 mb-10">
                        <div className="space-y-5">

                                <div key="accept" className="relative flex items-start">
                                    <div className="flex h-5 items-center">
                                        <input
                                            id="accept"
                                            aria-describedby="accept"
                                            name="plan"
                                            type="radio"
                                            required
                                            defaultChecked={false}
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="accept" className="font-medium text-gray-700">
                                            I accept
                                        </label>
                                    </div>
                                </div>

                        </div>
                    </fieldset>
                    <button type="submit" className="bg-indigo-500 py-2 px-3 rounded-md shadow-lg text-white font-medium shadow-indigo-500/50 m-7">
                        Submit
                    </button>
                </div>
            </form>
            {open ? (isError ? <ErrorAlert open={open} setOpen={setOpen}/> :
                <SuccessModal open={open} setOpen={setOpen}/> ): undefined}
        </div>
    )
};

export default UserDetailsForm;