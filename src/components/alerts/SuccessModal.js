import Popup from "reactjs-popup";
import React from 'react';
import { VscChromeClose } from "react-icons/vsc";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {CheckCircleIcon, XMarkIcon} from '@heroicons/react/24/solid'

const SuccessModal = ({isError, setIsError, open, setOpen}) => {
   return (
       <div>
           <Popup open={open} modal closeOnDocumentClick={true} lockScroll={true}>
               <button
                   className="text-black mr-2 mt-2 absolute top-1 right-1"
                   onClick={() => {
                       setOpen(false);
                   }}
               >
                   <VscChromeClose />
               </button>
               <div className="w-96 bg-green-50 h-96 bg-white rounded-2xl">
                   <div className="flex justify-center">
                       <CheckCircleIcon className="h-40 mt-10 w-40 text-green-400"/>
                   </div>

                   <div className="text-2xl flex justify-center font-semibold mt-1 text-black">Successfully sent!</div>
                   <button onClick={() => {
                       setOpen(false);
                   }} className="bg-green-500 mt-16 ml-32 mr-32 py-2 px-3 rounded-md shadow-lg text-white font-medium m-7">
                       Back to form
                   </button>
               </div>
           </Popup>
       </div>
   )
}

export default SuccessModal;