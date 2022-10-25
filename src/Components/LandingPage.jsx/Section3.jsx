import React from 'react'

export const Section3 = () => {
    return (
        <div className='flex flex-row-reverse justify-center items-center'>
            <div className='w-[750px] h-[600px]'>
                <img src="./assets/section3.png" className='scale-75' alt="" />
            </div>
            <div className='flex flex-col justify-center items-center w-[480px] h-[600px] mr-14 space-y-6 px-4'>
                <div className='text-5xl text-transparent  bg-clip-text bg-gradient-to-r from-[#B24592] to-[#F15F79] font-bold'>
                    Ideathon 5.0
                </div>
                <div className='text-center font-semibold text-base'>
                    Innovative brain and enthusiasm to convert ideas into reality is key to solve real-life problems. Do you have a desire to solve the daily life problems around you? There is a well-known proverb “There is a way there is will”. If you want to present your creative idea to solve the problems in day to day life or the problems of great significance in human life, then we have a challenge for you.
                </div>
                <div className='text-center font-semibold text-base'>
                    Compete with the innovative and enthusiastic minds of the nation in IDEATHON 5.0. Come and join us at DSPM IIIT Naya Raipur to showcase your innovative and creative ideas and prototypes to solve real life problems.
                </div>
            </div>
        </div>
    )
}
