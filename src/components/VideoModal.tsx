import React from 'react';
import { formatDate } from '@/utils/dateFormatter';

interface VideoModalProps {
  videoId: string;
  title: string;
  views: string;
  date: string;
  description: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoId, title, views, date, description, onClose}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-50'>
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
        {/* CLOSE BUTTON */}
        <button onClick={onClose} className='absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl cursor-pointer'>x</button>

        {/* VIDEO EMBED */}
        <div className="realtive w-full aspect-video">
          <iframe 
            className='w-full h-full rounded-lg'
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allowFullScreen
          ></iframe>
        </div>

        {/* INFO VIDEO */}
        <h2 className="mt-4 text-lg font-bold">{title}</h2>
        <p className="text-sm-text-gray-500">{views} views • {formatDate(date)}</p>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  )
}

export default VideoModal