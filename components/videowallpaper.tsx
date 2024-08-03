import { useEffect, useRef } from 'react';

export default function VideoWallpaper() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Error attempting to play the video:", error);
            });
        }
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
            <video 
                ref={videoRef}
                className="absolute top-0 left-0 object-cover w-full h-full"
                src="/media/videowallpaper.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
            />
        </div>
    );
}