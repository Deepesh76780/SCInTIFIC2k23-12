import React from 'react'

export const HeroSection = () => {
    return (
        <div className='flex flex-col justify-center items-start h-[540px] px-10'>
            <div className='flex flex-col justify-start items-start  space-y-1'>
                <div className='font-extrabold text-transparent text-[5rem] bg-clip-text bg-gradient-to-r from-[#4776E6] to-[#8E54E9] '>
                    SCInTIFIC 2k23
                </div>
                <div className='text-transparent text-[1.5rem] bg-clip-text bg-gradient-to-r from-[#272727] to-[#272727CC] '>
                    Science and Technology over Fiction
                </div>
                <div className='text-2xl text-transparent  bg-clip-text bg-gradient-to-r from-[#B24592] to-[#F15F79] font-bold'>
                    Ideathon 5.0
                </div>
                <div className='text-xl italic text-transparent  bg-clip-text bg-gradient-to-r from-[#272727] to-[#414345] font-bold'>
                    Young Innovative Competition
                </div>
                <div className='text-base  text-transparent  bg-clip-text bg-gradient-to-r from-[#272727] to-[#414345] font-bold w-[550px] pt-2'>
                    Compete with the innovative and enthusiastic minds of the nation in IDEATHON 5.0.

                </div>
                <div className='text-base  text-transparent  bg-clip-text bg-gradient-to-r from-[#272727] to-[#414345] font-bold  w-[550px] pt-1'>
                    Come and join us at DSPM IIIT Naya Raipur to showcase your innovative and creative ideas and prototypes to solve real life problems.

                </div>
                <div className='flex flex-row justify-start items-center pt-4 space-x-8'>
                    <div className='text-[#5172E7] w-[180px] h-[48px] rounded-full border-2 drop-shadow-xl shadow-2xl shadow-[#F5F5F5] flex justify-center items-center bg-white font-semibold text-opacity-80 cursor-pointer '>
                        How to Participate
                    </div>
                    <div>
                        <div className='w-[180px] h-[48px] rounded-full border-2 drop-shadow-xl cursor-pointer flex justify-center items-center text-transparent  bg-clip-text bg-gradient-to-r from-[#272727] to-[#272727CC] font-bold border-[#272727]'>
                        This year’s themes
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='grid grid-cols-2 place-content-start place-items-start'> */}
            <div className='absolute top-0 right-10 w-[632px] h-[540px] -z-10'>
                <img src="./assets/landingpage.png" className='scale-90' alt="" />
            </div>
            {/* </div> */}
        </div>
    )
}