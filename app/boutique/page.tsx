import React from 'react'
import BHero from './_components/BHero'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='flex flex-1 flex-col'>
        <BHero />
        <Footer />
    </div>
  )
}

export default page