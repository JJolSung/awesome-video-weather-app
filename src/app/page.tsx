// src/app/page.tsx
'use client';

import { useState } from 'react';
import ParentViewComponent from './_components'; // ← SearchWeather.tsx를 임포트하는 컴포넌트
import { VideoBackground } from './_components/WeatherBackground';

export default function Home() {
  const [videoSrc, setVideoSrc] = useState('/assets/videos/Clear.mp4');

  return (
    <>
      <ParentViewComponent setVideoSrc={setVideoSrc} />
      <VideoBackground videoSrc={videoSrc} />
    </>
  );
}
