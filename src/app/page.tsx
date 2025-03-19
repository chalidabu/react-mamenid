"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";
import Link from "next/link";
import { FaPhotoVideo, FaMicrophoneAlt } from "react-icons/fa";

export default function Home() {
  const [videos, setVideos] = useState<any[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  useEffect(() => {
    async function fetchVideos() {
      const res = await fetch("/api/youtube");
      const data = await res.json();
      if (data.items) {
        setVideos(data.items);
      }
    }

    fetchVideos();
  }, []);

  return (
    <>
      <Hero />

      {/*SECTION PODCAST */}
      <section className="container max-w-5xl mx-auto px-4">
        <FeatureCard
          title="Podcast"
          description="Nikmati obrolan seru dan inspiratif bersama host favoritmu! Dari trending topics hingga deep talks, semua ada di sini."
          icon="/icons/logo-spt.png"
          image="/images/img-pod.jpg"
          buttonText="Listen on Spotify"
          buttonLink="https://open.spotify.com/show/3mZaixB9zIUiQwbe2Msqit?si=95ba5a5ca53240ae"
          highlightText="#1 Monthly listener in January 2019"
          highlightIcon={<FaMicrophoneAlt size={20} />}
          reverse
        />
      </section>

      {/*SECTION YOUTUBE */}
      <section className="container max-w-5xl mx-auto px-4">
        <FeatureCard
          title="Channel"
          description="Video terbaru setiap minggu! Subscribe sekarang untuk konten yang lebih seru."
          icon="/icons/logo-yt.png"
          image="/images/img-yt.jpg"
          buttonText="Subscribe Here"
          buttonLink="https://www.youtube.com/@MamenID"
          highlightText="New Content Every Two Weeks"
          highlightIcon={<FaPhotoVideo size={20} />}
          bgColor="bg-theme-blue"
          bgPosition="right-[15px] bottom-[-15px]"
        />
      </section>

      {/* SECTION VIDEO CARD */}
      <section className="container max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Latest Videos</h2>
        <div className="flex gap-4 mt-4 justify-center container flex-wrap">
          {videos.slice(0, 3).map((video) => (
            <VideoCard
              key={video.id.videoId}
              thumbnail={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
              views={`${Number(video.viewCount).toLocaleString()} views`}
              onClick={() => setSelectedVideo(video)}
            />
          ))}
        </div>

        <div className="my-4 text-right">
          <Link href="https://www.youtube.com/@MamenID" className="font-semibold text-theme-red">
            More Videos &gt;
          </Link>
        </div>

        {/* MODAL */}
        {selectedVideo && (
          <VideoModal
            videoId={selectedVideo.id.videoId}
            title={selectedVideo.snippet.title}
            views={selectedVideo.viewCount}
            date={selectedVideo.snippet.publishedAt}
            description={selectedVideo.snippet.description}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </section>
    </>
  );
}
