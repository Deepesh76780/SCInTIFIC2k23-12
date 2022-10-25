import React from 'react'

export const Section1 = () => {
    return (
        <div className='grid grid-cols-2 place-content-center place-items-center'>
            <div className='w-[699px]'>
                <img src="./assets/section1.png" className='scale-[0.85]' alt="" />
            </div>
            <div className='flex flex-col justify-center items-center space-y-6'>
                <div className='text-4xl font-extrabold'>
                SCInTIFIC 2k23
                </div>
                <div className='w-[400px] font-semibold text-center text-[0.9rem]'>
                It is a science and technology showcase and exhibition aimed at school students across the nation. It boosts the students’ enthusiasm to learn about the latest advancements and innovations in the modern world. It projects a positive image of technology in their minds by empowering them to develop strategic use cases to solve real-world problems.
                </div>
            </div>
        </div>
    )
}
