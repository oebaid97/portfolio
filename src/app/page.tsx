'use client'

import Footer from '@/components/Footer'
import Form from '@/components/Form'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Images from '@/components/Images'
import Work from '@/components/Work'

export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-7xl m-auto bg-base-100">
      <Header />
      <Hero />
      <Images />
      <div className='flex flex-row w-full' id='contact'>
        <Form />
        <Work />
      </div>
      <Footer />
    </main >
  )
}
