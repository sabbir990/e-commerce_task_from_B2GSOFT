import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosSync } from "react-icons/io";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function Features_section() {
    return (
        <div className="bg-[#6441C2] w-full lg:px-8 lg:py-3 p-4 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-4 space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
                <TbTruckDelivery size={28} color="white" />
                <div>
                    <h2 className="font-semibold">FREE SHIPPING</h2>
                    <p className="text-sm">BUY BDT 3000+ & GET FREE DELIVERY</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <IoIosSync size={28} color="white" />
                <div>
                    <h2 className="font-semibold">7 DAYS EXCHANGE</h2>
                    <p className="text-sm">EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <RiSecurePaymentLine size={28} color="white" />
                <div>
                    <h2 className="font-semibold">100% PAYMENT SECURE</h2>
                    <p className="text-sm">CASH ON DELIVERY AND SECURED ONLINE PAYMENT</p>
                </div>
            </div>
        </div>
    )
}
