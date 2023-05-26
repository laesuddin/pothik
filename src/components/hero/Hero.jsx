import React from 'react'
import heroimage from '../../assets/heroimage.svg'
import './hero.css'
const Hero = () => {
  return (
    <section className="hero_section flex flex-col justify-center items-center text-center">
        <span className="text-5xl font-semibold uppercase text-slate-100 mb-4">
          The journey of a thousand miles <br />
        </span>
        <span className="text-5xl font-semibold uppercase text-slate-100 mb-9">begins with a single step</span>
        <a className="bg-[#FFCE0C] text-slate-100 rounded px-6 py-2" href="#">Book Your Tour</a>
      </section>
  )
}

export default Hero