import Popup from "reactjs-popup";
import React from 'react';
import { VscChromeClose } from "react-icons/vsc";

const SuccessModal = ({isError, setIsError, open, setOpen}) => {
   return (
       <div className="w-10">
           <Popup open={open} modal closeOnDocumentClick={false} lockScroll={true}>
               <div className="bg-blue-dark px-10 py-10 rounded-2xl">
                   <button
                       className="bg-purple-dark text-white mr-2 mt-2 absolute top-1 right-1 p-1 rounded-full"
                       onClick={() => {
                           setOpen(false);
                       }}
                   >
                       <VscChromeClose />
                   </button>
                   <p className="text-3xl font-semibold text-grey-whitetinge mb-5">
                       TITLE
                   </p>
                   <p className="text-xl font-medium mb-4 text-grey-whitetinge">
                       TEXT
                   </p>
               </div>
           </Popup>
       </div>
   )
}

export default SuccessModal;