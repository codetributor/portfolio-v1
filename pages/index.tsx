import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Intro from '@/components/Intro/Intro'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-6xl">
      <div>
      <Intro />
      <Hero />
      </div>
      </div>
    </>
  )
}
