import Image from "next/image";

export default function ImageWallpaper() {

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
            <Image src="/media/wallpaper.jpg" alt="Descripción" width={1600} height={500}/>
        </div>
    );
}