import React from 'react';
import Image from 'next/image';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  views: string;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ thumbnail, title, views, onClick}) => {
  return (
    <div className='cursor-pointer w-full sm:w-72 p-2' onClick={onClick}>
      {/* THUMBNAIL */}
      <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
        <Image src={thumbnail} alt={title} fill={true} className='absolute top-0 left-0 right-0 bottom-0' />
      </div>

      {/* INFO VIDEO */}
      <div className='flex justify-between mt-3 gap-2'>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-gray-500 whitespace-nowrap">{views} 👁</p>
      </div>
    </div>
  )
}

export default VideoCard