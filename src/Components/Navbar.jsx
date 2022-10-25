import React from 'react'

export const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center p-4 text-[#272727]'>
            <div className='flex flex-row justify-start items-center space-x-2 cursor-pointer'>
                <div>
                    <img src="./assets/logo.png" className='h-[64px] w-[64px]' alt="" />
                </div>
                <div className='flex flex-col uppercase justify-start items-start font-semibold text-xl tracking-wide -space-y-2.5'>
                    <div>
                        DR SPM IIIT
                    </div>
                    <div>
                        NAYA RAIPUR
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center space-x-8'>
                <div className='font-medium text-lg cursor-pointer'>About</div>
                <div className='font-medium text-lg cursor-pointer'>Themes</div>
                <div className='font-medium text-lg cursor-pointer'>Schedule</div>
                <div className='font-medium text-lg cursor-pointer'>How to participate</div>
                <div className='font-medium text-lg cursor-pointer'>Contact</div>
            </div>
            <div className='text-[#5172E7] w-[180px] h-[48px] rounded-full border drop-shadow-lg flex justify-center items-center bg-white font-semibold text-opacity-80 cursor-pointer hover:drop-shadow-xl transition duration-100'>
                Submit Your Idea
            </div>
        </div>
    )
}
