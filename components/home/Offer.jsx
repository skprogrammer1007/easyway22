import React from 'react'
import Image from 'next/image'
export default function Offer() {
    return (
        <div
            className='bg-blue-50'
        >
            <h1 className="text-center text-3xl font-mono font-bold pt-5">Special</h1>
            <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
                <div className='w-full px-2 py-3'>
                    <Image src={require('/public/Images/banner4.webp')} height={290} />
                </div>
                <div className='w-full px-2 py-2'>
                    <Image src={require('/public/Images/banner2.webp')} height={290} />
                </div>
                <div className='w-full px-2 py-2'>
                    <Image src={require('/public/Images/banner3.webp')} height={290} />
                </div>
            </div>
        </div>
    )
}
