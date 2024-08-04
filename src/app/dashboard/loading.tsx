import Image from 'next/image'

export default function Loading() {
    return (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full transition-opacity duration-500">
                <Image
    src="/media/mujer disfrutando del día de lluvia.gif"
    width={350}
    height={350}
    alt="clima gif"
    />
        </div>
    );
}