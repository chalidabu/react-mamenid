import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white pt-[72px]">
      <Image 
        src="/images/bg-hero.jpg"
        alt='Background Hero'
        fill={true}
        style={{ objectFit: 'cover' }}
      />

      {/* Konten */}
      <div className="relative text-left px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          MAMEN.ID
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Explore thought-provoking discussions, trending reactions, <br/>and exclusive content. All in one place.
        </p>
        <p className="mt-8 text-lg font-semibold italic text-theme-yellow">
          "Your Go-To Platform for Podcasts & Videos."
        </p>
      </div>
    </section>
  )
}

export default Hero