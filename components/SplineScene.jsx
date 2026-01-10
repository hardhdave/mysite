'use client';
import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center relative">
       {/* 
         REPLACE THE URL BELOW WITH YOUR OWN SPLINE SCENE URL 
         Export from Spline > Code > React > Copy URL
       */}
       <Spline 
        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
        className="w-full h-full scale-110"
      />
      
      {/* Overlay to prevent stealing focus if needed, or allow interaction */}
      {/* <div className="absolute inset-0 pointer-events-none" /> */}
    </div>
  );
}
