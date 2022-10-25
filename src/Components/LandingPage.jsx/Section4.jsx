import React from 'react'

export const Section4 = () => {
    return (
        <div className='flex flex-col justify-center items-center py-4'>
            <div className='text-5xl font-extrabold '>
                Why Ideathon?
            </div>
            <div className='text-lg font-light pt-6 text-left w-[950px]'>
                <ol style={{ listStyleType: 'initial' }}>
                    <li className='py-1.5'>To promote the culture of innovation among school students.</li>
                    <li className='py-1.5'>  Compete with top schools across india.</li>
                    <li className='py-1.5'> Present the idea at IIIT-NR Faculties and Scholars & get evaluated by domain experts.</li>
                    {/* <li className='py-1.5'>To encourage school students for higher education in science and technology.</li> */}
                </ol>
            </div>
        </div>
    )
}
