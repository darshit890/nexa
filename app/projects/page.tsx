import React from 'react'
import PHero from './_component.tsx/PHero'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='flex flex-col flex-1'>
        <PHero />
        <Footer />
    </div>
  )
}

export default page