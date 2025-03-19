import { ReactElement } from 'react';
import Image from 'next/image';

interface FeatureCardsProps {
  title: string;
  description: string;
  icon: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  highlightText?: string;
  highlightIcon?: ReactElement;
  bgColor?: string;
  bgPosition?: string;
  reverse?: boolean;
}

const FeatureCard: React.FC<FeatureCardsProps> = ({
  title,
  description,
  icon,
  image,
  buttonText,
  buttonLink,
  highlightText,
  highlightIcon,
  reverse = false,
  bgColor = "bg-theme-red",
  bgPosition = "right-[-15px] bottom-[-15px]"
}) => {
  
  return (
    <section className={`flex flex-col md:flex-row items-center gap-8 md:gap-10 p-6 md:p-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>

      {/* GAMBAR */}
      <div className='relative w-full md:w-1/2'>
        <div className={`absolute -z-10 w-full h-full rounded-3xl ${bgColor} ${bgPosition}`}></div>
        <Image 
          src={image}
          alt={title}
          width={500}
          height={300}
          className='rounded-2xl shadow-lg'
        />
      </div>

      {/* KONTEN */}
      <div className="w-full md:w-1/2 space-y-4">
        <div className="flex items-center gap-3">
          <Image src={icon} alt='icon' width={50} height={50} />
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <p className="text-gray-700">{description}</p>

        {/* HIGHLIGHT */}
        {highlightText && (
          <div className="flex items-center gap-2 text-gray-600 font-semibold">
            {highlightIcon && highlightIcon}
            <span className='font-bold'>{highlightText}</span>
          </div>
        )}

        {/* BUTTON */}
        <a 
          href={buttonLink}
          className='inline-block px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition'
          target='_blank'
        >
          {buttonText}
        </a>
      </div>
    </section>
  )
};

export default FeatureCard