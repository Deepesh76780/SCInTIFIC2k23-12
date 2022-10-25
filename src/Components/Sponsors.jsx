import React from 'react'
import { SponsorCard } from './SponsorCard'

export const Sponsors = () => {
    return (
        <div className='grid grid-cols-3 place-content-center place-items-center'>
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
        </div>
    )
}
