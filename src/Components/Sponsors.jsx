import React from 'react'
import { SponsorCard } from './SponsorCard'

export const Sponsors = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 place-content-center place-items-center mx-4'>
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
        </div>
    )
}
