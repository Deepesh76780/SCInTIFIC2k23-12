import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className='hidden sm:grid grid-cols-2 place-content-center place-items-start w-full my-2' id='contact'>
                <div className='flex flex-col justify-start items-start space-y-20 px-6 lg:px-10 xl:px-24'>
                    <div className='flex flex-col justify-start items-start text-4xl lg:text-5xl xl:text-6xl font-extrabold -space-y-1'>
                        <div className='drop-shadow-xl shadow-[#5172E7]'>
                            Get in TOUCH
                        </div>
                        <div className='drop-shadow-xl shadow-[#5172E7]'>
                            with US.
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-start text-sm lg:text-base  space-y-2'>
                        <div>
                            <img src="./assets/logo.png" className='h-12 lg:w-16 w-12 lg:h-16' alt="" />
                        </div>
                        <div className='drop-shadow-2xl shadow-[#5172E7] font-semibold'>
                            Dr SPM International Institute of
                            Information Technology, Naya Raipur
                        </div>
                        <div className='drop-shadow-2xl shadow-[#5172E7] font-semibold'>
                            Plot No-07, Sector-24, Near Purkhoti Muktangan, Nava Raipur, Atal Nagar, Chattisgarh-493661
                        </div>
                        <div className='drop-shadow-2xl shadow-[#5172E7] font-semibold'>
                            Ph: 0771-2474040
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start px-6 lg:px-10'>
                    <div className='flex flex-col justify-between items-start space-y-4'>
                        <div className='flex flex-col justify-start items-start space-y-2'>
                            <div className='uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg'>
                                Faculty Co-ordinator
                            </div>
                            <div className='text-sm lg:text-base'>
                                Dr. Lakhindar Murmu : +91 9425000000
                            </div>
                        </div>
                        <div className='flex flex-col justify-start items-start space-y-2'>
                            <div className='uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg'>
                                Student Co-ordinators
                            </div>
                            <div className='flex flex-col justify-start items-start space-y-0.5'>
                                <div className='text-sm lg:text-base'>
                                    Nishoak Kosaraju : +91 9425000000
                                </div>
                                <div className='text-sm lg:text-base'>
                                    Supriya K : +91 9425000000
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-start items-start space-y-2'>
                            <div className='uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg'>
                                Organizing Student team members
                            </div>
                            <div className='grid grid-cols-2 place-content-center place-items-start'>
                                <div className='text-sm lg:text-base'>
                                    Rony Joseph
                                </div>
                                <div className='text-sm lg:text-base'>
                                    Anand Bachker
                                </div>
                                <div className='text-sm lg:text-base'>
                                    Sai Prabhat
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center space-y-6 sm:hidden px-2'>
                <div className='flex flex-col justify-center items-center text-3xl'>
                    <div className='drop-shadow-xl shadow-[#5172E7] uppercase'>
                        Get in TOUCH WITH US.
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start space-y-3'>
                    <div className='flex flex-col justify-start items-start space-y-1'>
                        <div className='uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg'>
                            Faculty Co-ordinator
                        </div>
                        <div className='text-sm lg:text-base'>
                            Dr. Lakhindar Murmu : +91 9425000000
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-start space-y-1'>
                        <div className='uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg'>
                            Student Co-ordinators
                        </div>
                        <div className='flex flex-col justify-start items-start space-y-0.5'>
                            <div className='text-sm lg:text-base'>
                                Nishoak Kosaraju : +91 9425000000
                            </div>
                            <div className='text-sm lg:text-base'>
                                Supriya K : +91 9425000000
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-start space-y-2'>
                        <div className='uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base'>
                            Organizing Student team members
                        </div>
                        <div className='grid grid-cols-2 place-content-center place-items-start'>
                            <div className='text-sm lg:text-base'>
                                Rony Joseph
                            </div>
                            <div className='text-sm lg:text-base'>
                                Anand Bachker
                            </div>
                            <div className='text-sm lg:text-base'>
                                Sai Prabhat
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-start text-sm lg:text-base  space-y-2'>
                        <div>
                            <img src="./assets/logo.png" className='h-12 lg:w-16 w-12 lg:h-16' alt="" />
                        </div>
                        <div className='drop-shadow-2xl shadow-[#5172E7] font-semibold'>
                            Dr SPM International Institute of
                            Information Technology, Naya Raipur
                        </div>
                        <div className='drop-shadow-2xl shadow-[#5172E7] font-semibold'>
                            Plot No-07, Sector-24, Near Purkhoti Muktangan, Nava Raipur, Atal Nagar, Chattisgarh-493661
                        </div>
                        <div className='drop-shadow-2xl shadow-[#5172E7] font-semibold'>
                            Ph: 0771-2474040
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
