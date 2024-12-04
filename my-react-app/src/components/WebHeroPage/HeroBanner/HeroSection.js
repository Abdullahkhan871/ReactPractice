import React from 'react'
import HeroSectionLeft from './HeroSectionLeft'
import HeroSectionRight from './HeroSectionRight'

export const HeroSection = () => {
  return (
    <section className='hero-section'>
        <HeroSectionLeft />
        <HeroSectionRight />
    </section>
  )
}
