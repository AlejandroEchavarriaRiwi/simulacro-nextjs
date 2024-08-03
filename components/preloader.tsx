import Image from 'next/image'

export default function Preloader() {
    return (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full transition-opacity duration-500 bg-white">
                <Image
    src="/media/mujer disfrutando del día de lluvia.gif"
    width={350}
    height={350}
    alt="Picture of the author"
    />
        </div>
    );
}