import React from 'react'

export const JudingCriteria = () => {
    return (
        <div className='grid grid-cols-2 place-content-start place-items-center'>
            <div className='col-span-1 flex flex-col justify-start items-start font-bold text-[#272727] text-6xl'>
                <div>
                    Judging
                </div>
                <div>
                    Criteria
                </div>
            </div>
            <div className='col-span-1 flex flex-col justify-start items-start -ml-44 space-y-5'>
                <div className='flex flex-row justify-start items-center space-x-4 font-semibold -ml-20'>
                    <div>
                        <img src="./assets/jugding/presentation.png" className='w-16' alt="" />
                    </div>
                    <div className='text-transparent text-3xl font-extrabold bg-clip-text bg-gradient-to-r from-[#348AC7] to-[#7474BF]'>
                        Presentation
                    </div>

                </div>
                <div className='flex flex-row justify-start items-center space-x-4 font-semibold -ml-10'>

                    <div>
                        <img src="./assets/jugding/scalability.png" className='w-16' alt="" />
                    </div>
                    <div className='text-transparent text-3xl font-extrabold bg-clip-text bg-gradient-to-r from-[#536976] to-[#292E49]'>
                        Scalability
                    </div>



                </div>
                <div className='flex flex-row justify-start items-center space-x-4 font-semibold'>
                    <div>
                        <img src="./assets/jugding/prototype.png" className='w-16' alt="" />
                    </div>
                    <div className='text-transparent text-3xl font-extrabold bg-clip-text bg-gradient-to-r from-[#00CDAC] to-[#02AAB0]'>
                        Prototype / Idea Based Solution
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center space-x-4 font-semibold -ml-10'>
                    <div>
                        <img src="./assets/jugding/novelty.png" className='w-16' alt="" />
                    </div>
                    <div className='text-transparent text-3xl font-extrabold bg-clip-text bg-gradient-to-r from-[#fad72a] to-[#fa8e22]'>
                        Novelty
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center space-x-4 font-semibold -ml-20'>
                    <div>
                        <img src="./assets/jugding/practicality.png" className='w-16' alt="" />
                    </div>
                    <div className='text-transparent text-3xl font-extrabold bg-clip-text bg-gradient-to-r from-[#F85032] to-[#E73827]'>
                        Practicality
                    </div>
                </div>

            </div>
        </div>
    )
}
