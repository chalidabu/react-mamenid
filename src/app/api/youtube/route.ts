import { NextResponse } from "next/server";

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = "UChwTREae_HUNF3OLRwRQV3Q";

export async function GET() {
  try {
    // Fetch data video terbaru
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`;
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();

    if (!searchData.items) {
      return NextResponse.json({ error: "No videos found" }, { status: 404 });
    }

    // Ambil video IDs untuk fetch view count
    const videoIds = searchData.items.map((video: any) => video.id.videoId).join(",");

    // Fetch view count dari video
    const statsUrl = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=statistics`;
    const statsRes = await fetch(statsUrl);
    const statsData = await statsRes.json();

    // Gabungkan view count ke dalam data video
    const videosWithViews = searchData.items.map((video: any, index: number) => ({
      ...video,
      viewCount: statsData.items[index]?.statistics?.viewCount || "0",
    }));

    return NextResponse.json({ items: videosWithViews });
  } catch (error) {
    return NextResponse.json({ error: "YouTube API Error" }, { status: 500 });
  }
}